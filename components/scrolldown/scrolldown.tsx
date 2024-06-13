"use client";

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';

interface ScrollDownProps {
    // // targetPath: string;
    // targetId: string;
    // children?: React.ReactNode;
    resetCurrentSection: () => void;
}

const scrollSections = ['home', 'aboutme', 'works', 'contact'];

export const ScrollDown = forwardRef<ScrollDownProps>((props, ref)  => //6/13forwardRef追加
//   {
//     targetId,
// }: ScrollDownProps
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

    // const handleScroll = (hash: string) => {
    //   const currentIndex = scrollSections.indexOf(currentSection); //6/9追加
    //   const nextIndex = (currentIndex + 1) % scrollSections.length; //6/9追加
    //   const nextSection = scrollSections[nextIndex]; //6/9追加

    //   // const element = document.getElementById(hash); //6/12復活
    //   const element = document.getElementById(nextSection);
    //   if (element) {
    //         element.scrollIntoView({behavior: 'smooth'});
    //         router.push(`#${nextSection}`);
    //         setCurrentSection(nextSection);
    //         console.log(`successfully scrolled to ${nextSection}`)
    //   } else {
    //     router.push(`/#${hash}`);
    //   }
    // };

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

    // useEffect(() => { 
    //   const hash = window.location.hash.replace('#', '');
    //   if(hash) {
    //     const element = document.getElementById(hash);
    //     if(element) {
    //       element.scrollIntoView({behavior: 'smooth'});
    //       setCurrentSection(hash);
    //     }
    //   }
    // }, [searchParams])

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
