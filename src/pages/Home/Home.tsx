import SEO from "../../component/SEO";
import { FaqSchema } from "../../component/StructuredData";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";

import Hero from "./sections/Hero";
import ProblemSection from "./sections/ProblemSection";
import FeaturesSection from "./sections/FeaturesSection";
import ContentSection from "./sections/ContentSection";
import SecondContent from "./sections/SecondContent";
import { CeoSection } from "./sections/CeoSection";
import useScrollAnimations from "../../hooks/useScrollAnimations";

function Home() {
    useScrollAnimations();

    return (
        <div className="overflow-hidden">
            <SEO 
                title="Coirei – Intelligence Engineered"
                description="Coirei – Intelligence Engineered. We build AI-native systems, deep-tech engineering platforms, and scalable software solutions that transform ideas into intelligent digital products."
                keywords="Coirei, AI-native systems, deep tech engineering, intelligent software development, enterprise software solutions, AI platform development, software engineering company"
            />
            <FaqSchema />

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>


            <Hero />
            <ProblemSection />
            <FeaturesSection />
            <ContentSection />
            <SecondContent />
            <CeoSection />
            <Footer />

        </div>
    );
}

export default Home;
