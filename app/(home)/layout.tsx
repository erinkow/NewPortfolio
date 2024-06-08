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
            {/* <Toaster/> うまくいかない。一旦保留*/} 
            <Navbar/>
            <div className="h-full bg-slate-100">      
                <main className="pt-[4rem] pb-20 bg-slate-100">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default HomeLayout;