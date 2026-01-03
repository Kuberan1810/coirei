import Footer from "../../../component/Footer/Footer";
import Navbar from "../../../component/Navbar";
import CTABanner from "../../ContactUs/section/CTABanner";
import ContentSection from "./section/ContentSection";
import HeroSection from "./section/HeroSection";

const Company = () => {
    return (
        <div className="overflow-hidden">
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <HeroSection />
            <ContentSection />
            <CTABanner/>
            <Footer />
        </div>
    );
};

export default Company;