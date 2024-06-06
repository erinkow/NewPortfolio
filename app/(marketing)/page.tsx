import Head from 'next/head';
import 'tailwindcss/tailwind.css'; 
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: '../../public/fonts/font.woff2'
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
    <div className="fixed bottom=0 flex justify-center items-center w-full h-full bg-gray-800">
      <div>
        <h1 className={cn(
          'text-6xl items-center justify-center text-neutral-300',
          headingFont.className
        )}>Portfolio</h1>
      </div>
      <div className='fixed bottom-0 flex flex-col items-center w-full mb-4'>
        <div className="relative w-6 h-6">
          <div className="absolute w-7 h-2 opacity-0 transform scale-50 chevron animate-move"></div>
          <div className="absolute w-7 h-2 opacity-0 transform scale-50 chevron animate-move1"></div>
          <div className="absolute w-7 h-2 opacity-0 transform scale-50 chevron animate-move2"></div>
        </div>
        <span className="block mt-[3rem] text-center font-sans text-xs text-white uppercase whitespace-nowrap opacity-25 animate-pulse">scroll down</span>
      </div>
    </div>

  )   
}
