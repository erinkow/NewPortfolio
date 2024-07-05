import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { API_BASE_URL } from '../../../constants/base_url';

import Image from 'next/image';

import { Work } from '../../../types/types'
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';


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
      className='h-[98vh] flex flex-col justify-center items-center text-white'
    >
      <div className='flex items-center space-x-4 mb-3 md:mb-9'>
        <h1
          className={cn(
            'text-2xl md:text-6xl items-center justify-center text-neutral-300',
            headingFont.className
          )}
        >
          Works
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-3'>
        {works.map((work: Work, index: number) => (
          <div key={index} className='flex justify-center md:px-5 md:pb-5'>
            <Dialog>
              <DialogTrigger asChild>
                <div className='flex flex-col items-center'>
                  <Image 
                    src={work.img || ''} 
                    alt='portfolio image ${index + 1}'
                    width={250}
                    height={120}
                    className='cursor-pointer hover:bg-neutral-50/10 md:w-[300px] md:h-[200px]'
                  />
                  <p className='text-[12px] text-neutral-300 mt-2 md:text-lg'>{work.title}</p>
                </div>
              </DialogTrigger>
              <DialogContent 
                className='flex flex-col w-72 md:w-auto justify-between items-center px-1 pt-10 pb-10 bg-neutral-200' 
              >
                <DialogHeader className='flex flex-col items-center'>
                  <DialogTitle>
                    <h1 className='text-neutral-700 pb-3'>{work.title}</h1>
                  </DialogTitle>
                  <DialogDescription className='flex flex-col items-center'>
                    <Image 
                      src={work.img || ''}
                      alt='portfolio image ${index + 1}'
                      width={400}
                      height={300}
                      className='border-2 border-neutral-300 shadow-lg px-3'
                    />
                    <p className='pt-5 px-5 md:px-10 pb-2 text-xs'>{work.description}<br /></p>
                    <p className='p-3 md:px-10 text-sm font-bold'>Used technology:<br/> {work.technology}</p>
                    <Link href={work.github_repository}>
                      <Image
                        src='/github-mark.svg'
                        alt='github logo'
                        width={40}
                        height={40}
                        className='mt-2'
                      />
                    </Link>
                    <a 
                      href={work.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-2 flex items-center font-bold'
                    >
                      <ChevronsRight className='mr-2'/>
                      Go To Check The Work URL
                    </a>
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
