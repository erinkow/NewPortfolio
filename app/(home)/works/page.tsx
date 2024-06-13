import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogClose,
  DialogOverlay,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { API_BASE_URL } from '../../../constants/base_url';

import Image from 'next/image';

import { Work } from '../../../types/types'


const headingFont = localFont({
  src: '../../../public/fonts/font.woff2',
  weight: "400",
  style: "normal"
});

async function fetchWorks() {
  const response = await fetch(API_BASE_URL, {
    next: {revalidate: 10}
  });
  if(!response.ok) {
    throw new Error('Failed to fetch works');
  }
  return response.json();
}

const WorksPage = async() => {
  const works = await fetchWorks();

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
        {works.map((work: Work, index: number) => (
          <div key={index} className='flex justify-center'>
            <Dialog>
              <DialogTrigger asChild>
                <Image 
                  src={work.img || ''} 
                  alt='portfolio image ${index + 1}'
                  width={400}
                  height={200}
                  className='cursor-pointer hover:bg-neutral-50/10'
                />
              </DialogTrigger>
              <DialogContent 
                className='px-1 pt-10 pb-10 bg-neutral-200' 
              >
                <DialogHeader>
                  <DialogTitle>
                    {work.title}
                  </DialogTitle>
                  <DialogDescription>
                    <Image 
                      src={work.img || ''}
                      alt='portfolio image ${index + 1}'
                      width={400}
                      height={300}
                      className='border-2 border-neutral-300 shadow-lg'
                    />
                    {work.description} <br />
                    Used technology: {work.technology}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

        ))}
      </div>
    </div>
  );
};

export default WorksPage;
