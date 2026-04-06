import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer/Footer";
import LmsHero from "./section/LmsHero";
import WhyLms from "./section/Whylms";
import Progresstrack from "./section/Progresstrack"
import Timeline from "./section/Timeline"
import Lmsroadmap from './section/Lmsroadmap'
import LmsData from './section/LmsData'



function Lms() {
    
    return (
        <div className="relative">
            

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
               
            </div>


           <LmsHero/>
            <WhyLms/>
            <Progresstrack/>
            <Timeline/>
            <Lmsroadmap/>
            <LmsData/>
            <Footer />
            

        </div>
    );
}

export default Lms;
