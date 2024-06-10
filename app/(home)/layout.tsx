// import { Toaster } from "sonner";
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
                <div className="flex-grow bg-slate-100"> {/* スクロールに問題がでたのでoverflow-y-autoを一旦削除*/}      
                    <main className="h-calc-screen pt-navbar pb-footer bg-slate-100">
                        {children}
                    </main>
                </div>
                <Footer className='h-footer'/>

            </div>
        </>
    );
};

export default HomeLayout;