import Introduction from '@/components/pages/home/Introduction';
import BreakLine from '@/components/common/break-line';
import BlogPreview from '@/components/pages/home/BlogPreview';
import SkillsSection from '@/components/pages/home/SkillsSection';
import Services from '@/components/pages/home/Services';

const HomePage = () => {
  return (
    <>
      <Introduction />
      <BreakLine className='mt-8 mb-7' />
      <BlogPreview />
      <BreakLine className='my-8' />
      <SkillsSection />
      <BreakLine className='my-8' />
      <Services />
    </>
  );
};

export default HomePage;
