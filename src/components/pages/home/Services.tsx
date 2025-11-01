import { BiRocket as RocketIcon } from 'react-icons/bi';
import SectionHeading from '@/components/common/SectionHeading';
import Card from '@/components/common/Card';
import Link from 'next/link';

const Services = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title="What I've been working on" />
        <p className='leading-[1.8] text-neutral-800 md:leading-loose dark:text-neutral-300'>
          I assist brands, companies, institutions, and startups in creating
          exceptional digital experiences for their businesses through strategic
          development services.
        </p>
      </div>
      <Card className='space-y-4 rounded-xl border bg-neutral-100 p-8 dark:border-none dark:bg-[#1e1e1e]'>
        <div className='flex items-center gap-2'>
          <RocketIcon size={24} />
          <h3 className='text-xl font-medium'>Lets work together!</h3>
        </div>
        <p className='pl-2 leading-[1.8] text-neutral-800 md:leading-loose dark:text-neutral-300'>
          I&apos;m open for freelance projects, feel free to email me to see how
          can we collaborate.
        </p>
        <Link href='/contact' data-umami-event='Click Contact Button'>
          Contact me
        </Link>
      </Card>
    </section>
  );
};

export default Services;
