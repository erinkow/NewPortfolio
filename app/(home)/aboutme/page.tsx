import { cn } from "@/lib/utils";
import localFont from 'next/font/local';
import { ScrollDown } from "@/components/scrolldown/scrolldown";

const headingFont = localFont({
    src: '../../../public/fonts/font.woff2'
  });

const AboutMePage = () => {
    return(
        <div id='aboutme' className="h-screen flex flex-col justify-center items-center bg-red-300 text-white">
            <div className='flex flex-col items-center  mb-24'>
                <h1 className={cn(
                    'text-6xl items-center justify-center text-neutral-300 mt-10',
                    headingFont.className
                )}>
                    About Me
                </h1>
            </div>
        </div>
    );
};

export default AboutMePage;