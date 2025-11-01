import Skeleton from 'react-loading-skeleton';

import SkeletonLoader from "@/components/common/SkeletonLoader";
import Card from "@/components/common/Card";

const BlogFeaturedHeroSkeleton = () => {
  return (
    <SkeletonLoader>
      <Card className='min-w-[326px]'>
        <Skeleton
          height={400}
          containerClassName='flex'
          className='!rounded-xl'
        />
      </Card>
    </SkeletonLoader>
  );
};

export default BlogFeaturedHeroSkeleton;
