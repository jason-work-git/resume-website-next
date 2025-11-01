'use client';

import { motion } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

import BlogCardNew from '@/components/pages/blog/BlogCardNew';
// import BlogCardNewSkeleton from '@/common/components/skeleton/BlogCardNewSkeleton';
import { BlogItemProps } from '@/types/blog';
import { mockBlogData } from './mockBlogData'; // or inline above

const BlogCarousel = () => {
  const isLoading = false; // Set to true + useEffect for demo loading

  const blogData: BlogItemProps[] = useMemo(() => mockBlogData, []);

  const ref = useRef<HTMLDivElement>(null);
  // @ts-ignore
  const { events } = useDraggable(ref);

  const renderBlogCards = () => {
    if (isLoading) {
      return Array.from({ length: 3 }, (_, i) => (
        <div
          key={i}
          className='h-[400px] min-w-[326px] animate-pulse rounded-lg bg-gray-200 dark:bg-neutral-800'
        />
      ));
    }

    return blogData.map((item, index) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className='min-w-[326px] gap-x-5'
      >
        <BlogCardNew {...item} />
      </motion.div>
    ));
  };

  return (
    <div
      className='scrollbar-hide flex gap-4 overflow-x-scroll p-1'
      {...events}
      ref={ref}
    >
      {renderBlogCards()}
    </div>
  );
};

export default BlogCarousel;
