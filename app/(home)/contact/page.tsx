import { ContactForm } from '@/components/contactForm/contact-form';

const ContactPage = () => {
  return (
    <div
      id='contact'
      className='h-screen flex justify-center items-center text-white'
    >
      <div className='flex items-center mb-30'>
        <ContactForm/>
      </div>
    </div>
  );
};

export default ContactPage;
