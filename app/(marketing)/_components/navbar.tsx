import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Waves } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    return(
        <div className="fixed top-[5px] w-full h-[4.5rem] px-4 py-auto border-b shadow-sm bg-white items-center">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Link href='/'>
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
                <div className="space-x-4 md:block md:w-auto items-center justiy-between w-full">
                    <Button size='sm' variant='outline' asChild>
                        <Link href='/'>
                            Home
                        </Link>
                    </Button>
                    <Button size='sm' variant='outline' asChild>
                        <Link href='/contact'>
                            Contact
                        </Link>
                    </Button>
                    <Button size='sm' variant='outline' asChild>
                        <Link href='/Skills'>
                            Skills
                        </Link>
                    </Button>
                    <Button size='sm' variant='outline' asChild>
                        <Link href='/Works'>
                            Works
                        </Link>
                    </Button>
                    <Button size='sm' variant='outline' asChild>
                        <Link href='/About me'>
                            About me
                        </Link>
                    </Button>

                </div>
            </div>
        </div>
    )
}