
import Home from "./home/page";
import ContactPage from "./contact/page";
import { ScrollDown } from "@/components/scrolldown/scrolldown";
import AboutMePage from "./aboutme/page";
import WorksPage from "./works/page";

const App = () => {
    return(
        <>
            <div className="fixed top-0 w-full flex justify-around bg-transparent text-white p-4">
                <ScrollDown targetId="aboutme"/>
                <ScrollDown targetId="works"/>
                <ScrollDown targetId="contact"/>
            </div>
            <div>
                <Home/>
                <AboutMePage/>
                <WorksPage/>
                <ContactPage/>
            </div>
        </>
    );
}

export default App;