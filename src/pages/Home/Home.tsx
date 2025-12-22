import FeaturesSection from "./sections/FeaturesSection";
import Footer from "../../component/Footer";
import Hero from "./sections/Hero";
import Navbar from "../../component/Navbar";
import ContentSection from "./sections/ContentSection";
import SecondContent from "./sections/SecondContent";
import { CeoSection } from "./sections/CeoSection";
import FeaturesList from "./sections/FeaturesList";
import ProblemSection from "./sections/ProblemSection";


function Home() {
    return (
        <>
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <Hero />
            <ProblemSection/>
            <FeaturesSection />
            <FeaturesList/>
            <ContentSection />
            <SecondContent />
            <CeoSection/>
            <Footer />
        </>
    );
};

export default Home;
