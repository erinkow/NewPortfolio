import { ScrollDown } from '@/components/scrolldown/scrolldown';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

const headingFont = localFont({
  src: '../../../public/fonts/font.woff2',
});

const WorksPage = () => {
  return (
    <div
      id='works'
      className='bg-red-400 h-screen flex justify-center items-center text-white'
    >
      <div className='flex items-center space-x-4 mb-44'>
        <h1
          className={cn(
            'text-6xl items-center justify-center text-neutral-300',
            headingFont.className
          )}
        >
          Works
        </h1>
      </div>
    </div>
  );
};

export default WorksPage;
