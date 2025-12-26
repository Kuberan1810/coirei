
import Footer from "../../../component/Footer/Footer";

import Navbar from "../../../component/Navbar";
import UniversityHero from "./section/UniversityHero";
import VideoSection from "./section/VideoSection";
import VideoList from "./section/VideoList";



function University() {
    return (
        <>
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <UniversityHero />
            <VideoSection />
            <VideoList />
            <Footer />
        </>
    );
};

export default University;
