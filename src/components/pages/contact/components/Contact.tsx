
import BookACall from './BookACall';
import ContactForm from './ContactForm';
import SocialMediaList from './SocialMediaList';
import BreakLine from "@/components/common/break-line";

const Contact = () => {
  return (
    <section className='space-y-6'>
      <SocialMediaList />
      <BreakLine />
      <BookACall />
      <BreakLine />
      <div className='space-y-5'>
        <h3 className='text-lg font-medium'>Or send me a message</h3>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
