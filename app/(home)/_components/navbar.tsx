"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Waves } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({
    className, 
}: NavbarProps) => {
    const router = useRouter();
    const scrollDownRef = useRef<{resetCurrentSection: () => void, scrollElement: HTMLDivElement | null}>(null); //6/13追加

    // const handleScrollDown = (targetId: string) => {
    //     const element = document.getElementById(targetId);
    //     if (element) {
    //         // element.scrollIntoView({behavior: 'smooth'});
    //         const top = element.getBoundingClientRect().top + window.scrollY;
    //         window.scrollTo({ top, behavior: 'smooth' });
    //     } else {
    //         // window.location.href = '/#' + targetId;
    //         router.push('/#' + targetId)
    //     }
    // };
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleScroll = (hash: string) => {
        const element = document.getElementById(hash);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top, behavior: 'smooth' });
            console.log(`Scrolled to ${hash}`);
        } else {
            console.log(`Element with id ${hash} not found`)
            router.push(`/#${hash}`)
        }
    };

    // // ハッシュ変更イベントのリスナーを設定
    // const onHashChange = () => {
    //     const hash = window.location.hash.substring(1);
    //     if (hash) {
    //         handleScroll(hash);
    //     }
    // };

    useEffect(() => {
        const handleHashChange = () => { //追加
            const hash = window.location.hash.substring(1);
            if (hash) {
                handleScroll(hash);
            }
        }
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);

    }, []);
    // }, [pathname, searchParams]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        if(targetId === 'home') { //6/13追加
            if (scrollDownRef.current) {
                scrollDownRef.current.resetCurrentSection();
            }
        }
        window.history.pushState(null, '', `/#${targetId}`);
        handleScroll(targetId);
    };

    return(
        <div className={`fixed w-full h-navbar px-4 py-auto border-b-4 shadow-sm bg-neutral-50 opacity-80 items-center z-10 ${className}`}>
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between pt-5">
                <Link href='/#home'>
                    <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                        <Waves/>
                        <p
                            className={cn(
                                'text-lg text-neutral-700 pb-1',
                            )}
                        >
                            Portfolio
                        </p>
                    </div>
                </Link>
                <div className="flex flex-wrap justify-center space-x-4 md:block md:w-auto items-center justiy-between w-full">
                    <Button size='sm' variant='outline' className="text-xs sm:text-sm"> 
                        <a href="/#home" onClick={e => handleClick(e, 'home')}>
                        {/* onClick={() => handleScrollDown('home')} */}
                            Home
                        </a>
                    </Button>
                    <Button size='sm' variant='outline' className="text-xs sm:text-sm">
                        {/* onClick={() => handleScrollDown('aboutme')} */}
                        <a href="/#aboutme" onClick={e => handleClick(e, 'aboutme')}>
                            About me
                        </a>
                    </Button>
                    <Button size='sm' variant='outline' className="text-xs sm:text-sm">
                        {/* onClick={() => handleScrollDown('works')} */}
                        <a href="/#works" onClick={e => handleClick(e, 'works')}>
                            Works
                        </a>
                    </Button>
                    <Button size='sm' variant='outline' className="text-xs sm:text-sm">
                        {/* onClick={() => handleScrollDown('contact')} */}
                        <a href="/#contact" onClick={e => handleClick(e, 'contact')}>
                            contact
                        </a>
                    </Button>
                    
                </div>
            </div>
        </div>
    )
}