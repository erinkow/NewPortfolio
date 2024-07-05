// import { Toaster } from "sonner";
import { Suspense } from "react";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const HomeLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return(
        <>
            <div className="flex flex-col min-h-screen">
                {/* <Toaster/> うまくいかない。一旦保留*/} 
                <Navbar className='h-navbar'/>
                <div className="flex-grow "> {/* スクロールに問題がでたのでoverflow-y-autoを、背景に問題がでたのでbg-slate-100を一旦削除*/}      
                    <main className="h-calc-screen pt-navbar pb-footer">
                        <Suspense fallback={<div>Loading...</div>}>
                            {children}
                        </Suspense>
                    </main>
                </div>
                <Footer className='h-footer'/>

            </div>
        </>
    );
};

export default HomeLayout;