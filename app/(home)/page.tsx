
import Home from "./home/page";
import ContactPage from "./contact/page";
import { ScrollDown } from "@/components/scrolldown/scrolldown";
import AboutMePage from "./aboutme/page";
import WorksPage from "./works/page";
import { Suspense } from "react";

const App = () => {
    return(
        <>
            {/* <div className="fixed top-0 w-full flex justify-around bg-transparent text-white p-4">
                <ScrollDown targetId="aboutme"/>
                <ScrollDown targetId="works"/>
                <ScrollDown targetId="contact"/>
            </div> */}
            
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Home/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <AboutMePage/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <WorksPage/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactPage/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <ScrollDown />
                </Suspense>
            </div>
        </>
    );
}

export default App;