"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';

interface ScrollDownProps {
    resetCurrentSection: () => void;
}

const scrollSections = ['home', 'aboutme', 'works', 'contact'];

export const ScrollDown = forwardRef<ScrollDownProps>((props, ref)  => //6/13forwardRef追加
{
    const router = useRouter(); 
    const pathname = usePathname();
    const searchParams = useSearchParams(); //6/9追加

    const [currentSection, setCurrentSection] = useState<string>('home'); //6/9追加
    const internalRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({ //6/13追加
      resetCurrentSection: () => setCurrentSection('home'),
      // scrollElement: internalRef.current
    }));

    const handleScroll = (hash: string) => {
      const element = document.getElementById(hash);
      if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top, behavior: 'smooth' });
          setCurrentSection(hash);
          history.pushState(null, '', `#${hash}`); // URLのハッシュを変更
          console.log(`Successfully scrolled to ${hash}`);
      } else {
          router.push(`/#${hash}`);
          console.log(`Element with id ${hash} not found`);
      }
    };

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                handleScroll(hash);
            }
        };

        handleHashChange(); // Handle the initial hash if any
        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [searchParams]);

    const handleScrollDown = () => {
      const currentIndex = scrollSections.indexOf(currentSection);
      const nextIndex = (currentIndex + 1) % scrollSections.length;
      const nextSection = scrollSections[nextIndex];

      handleScroll(nextSection);
      // router.push(`#${nextSection}`); これがあるとスクロールされなくなる
    };

  return (
    <>
      <div data-scroll-down ref={internalRef} className='fixed bottom-[6rem] left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer' onClick={handleScrollDown}> {/* 6/9追加 */}
        {/* <div className='flex flex-col items-center w-full  cursor-pointer' onClick={handleScrollDown}> */}
        {/* className='fixed bottom-0 flex flex-col items-center w-full mb-[6rem] cursor-pointer' */}
        <div className='relative w-6 h-6'>
          <div className='absolute w-7 h-2 opacity-0 transform scale-50 chevron animate-move'></div>
          <div className='absolute w-7 h-2 opacity-0 transform scale-50 chevron animate-move1'></div>
          <div className='absolute w-7 h-2 opacity-0 transform scale-50 chevron animate-move2'></div>
        </div>
        <span className='block mt-[3rem] text-center font-sans text-xs text-neutral-300 uppercase whitespace-nowrap opacity-25 animate-pulse'>
          scroll down
        </span>
        {/* {children} 6/9削除 */}
      </div>
    </>
  );
});

ScrollDown.displayName = "ScrollDown";
