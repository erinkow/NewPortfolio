"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface ScrollDownProps {
    // targetPath: string;
    targetId: string;
    children?: React.ReactNode;
}

const scrollSections = ['home', 'aboutme', 'works', 'contact'];

export const ScrollDown = ({
    // targetPath
    targetId,
    children
}: ScrollDownProps) => {
    const router = useRouter(); //6/9追加
    const searchParams = useSearchParams //6/9追加
    const [currentSection, setCurrentSection] = useState<string>('home'); //6/9追加

    // const handleScrollDown = () => {
    //     router.push(targetPath)
    // }
    
    useEffect(() => { //6/9追加
      const hash = window.location.hash.replace('#', '');
      if(hash) {
        const element = document.getElementById(hash);
        if(element) {
          element.scrollIntoView({behavior: 'smooth'});
          setCurrentSection(hash);
        }
      }
    }, [searchParams])

    const handleScrollDown = () => {
      const currentIndex = scrollSections.indexOf(currentSection); //6/9追加
      const nextIndex = (currentIndex + 1) % scrollSections.length; //6/9追加
      const nextSection = scrollSections[nextIndex]; //6/9追加

      const element = document.getElementById(targetId);
      if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            router.push(`#${nextSection}`); //6/9追加
            setCurrentSection(nextSection) //6/9追加
      }
    };


  return (
    <div className='flex flex-col items-center w-full  cursor-pointer' onClick={handleScrollDown}>
      {/* className='fixed bottom-0 flex flex-col items-center w-full mb-[6rem] cursor-pointer' */}
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
