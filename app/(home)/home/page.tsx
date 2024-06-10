"use client";

import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ScrollDown } from '@/components/scrolldown/scrolldown';
import { Waves } from 'lucide-react';

const headingFont = localFont({
  src: '../../../public/fonts/font.woff2'
});

const textFont = Poppins ({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]
})

export default function Home() {
  return (
    <>
      <div id='home' className='h-screen flex justify-center items-center bg-gray-800 text-white'>
        {/* className="fixed bottom=0 flex justify-center items-center w-full h-full bg-gray-800" */}
        <div className='flex items-center space-x-4 mb-44'>
          <Waves color='rgb(212,212,212)' size='3.75rem'/>
          <h1 className={cn(
            'text-6xl items-center justify-center text-neutral-300',
            headingFont.className
          )}>
            Portfolio
          </h1>
        </div>
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2">
          <ScrollDown targetId='aboutme'/>          
        </div>
      </div>
    </>

  )   
}
