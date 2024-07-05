import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

import { API_BASE_URL } from '../../../constants/base_url';

import WorksPopover from '@/components/work-popover';

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

const WorksPage = async () => {
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
      <WorksPopover works={works}/>
    </div>
  );
};

export default WorksPage;
