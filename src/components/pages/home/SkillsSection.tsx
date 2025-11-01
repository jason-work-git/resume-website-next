import SectionHeading from '@/components/common/SectionHeading';
import Skills from '@/components/pages/home/Skills';

const SkillsSection = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title='Tools that I have used' />
      </div>
      <Skills />
    </section>
  );
};

export default SkillsSection;
