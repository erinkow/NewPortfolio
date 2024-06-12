import { ContactForm } from '@/components/contactForm/contact-form';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: '../../../public/fonts/font.woff2',
});

const ContactPage = () => {
  return (
    <div
      id='contact'
      className='h-screen flex justify-center items-center text-white'
    >
      <div className='flex items-center mb-30'>
        <h1
          className={cn(
            'text-6xl items-center justify-center text-neutral-300',
            headingFont.className
          )}
        >
        </h1>
        <ContactForm/>
      </div>
    </div>
  );
};

export default ContactPage;
