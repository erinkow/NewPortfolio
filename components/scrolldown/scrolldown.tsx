"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

interface ScrollDownProps {
    // targetPath: string;
    targetId: string;
    children?: React.ReactNode;
}

export const ScrollDown = ({
    // targetPath
    targetId,
    children
}: ScrollDownProps) => {
    // const router = useRouter();

    // const handleScrollDown = () => {
    //     router.push(targetPath)
    // }
    const handleScrollDown = () => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

  return (
    <div className='fixed bottom-0 flex flex-col items-center w-full mb-[6rem] cursor-pointer' onClick={handleScrollDown}>
      <div className='relative w-6 h-6'>
        <div className='absolute w-7 h-2 opacity-0 transform scale-50 chevron animate-move'></div>
        <div className='absolute w-7 h-2 opacity-0 transform scale-50 chevron animate-move1'></div>
        <div className='absolute w-7 h-2 opacity-0 transform scale-50 chevron animate-move2'></div>
      </div>
      <span className='block mt-[3rem] text-center font-sans text-xs text-white uppercase whitespace-nowrap opacity-25 animate-pulse'>
        scroll down
      </span>
      {children}
    </div>
  );
};
