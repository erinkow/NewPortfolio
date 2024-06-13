import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import Image from 'next/image';


const headingFont = localFont({
  src: '../../../public/fonts/font.woff2',
  weight: "400",
  style: "normal"
});

const WorksPage = () => {
  const portfolioImages = [
    '/portfolio.png',
    '/portfolio.png',
    '/portfolio.png',
  ];

  return (
    <div
      id='works'
      className='h-screen flex flex-col justify-center items-center text-white'
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
      <div className='grid grid-cols-2 gap-4'>
        {portfolioImages.map((src, index) => (
          <div key={index} className='flex justify-center'>
            <Popover>
              <PopoverTrigger asChild>
                <Image 
                  src='/portfolio.png' 
                  alt='portfolio image ${index + 1}'
                  width={400}
                  height={200}
                  className='cursor-pointer hover:bg-neutral-50/10 bg-muted'
                  
                />
              </PopoverTrigger>
              <PopoverContent 
                className='px-1 pt-10 pb-10' 
                side='bottom' 
                // align={align}
                >
                <div >
                  <div>
                    <h4 className='font-medium leading-none'>My portfolio</h4>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

        ))}
      </div>
    </div>
  );
};

export default WorksPage;
