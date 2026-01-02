import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";

import Hero from "./sections/Hero";
import ProblemSection from "./sections/ProblemSection";
import FeaturesSection from "./sections/FeaturesSection";
import ContentSection from "./sections/ContentSection";
import SecondContent from "./sections/SecondContent";
import { CeoSection } from "./sections/CeoSection";

function Home() {
    return (
        <div className="overflow-hidden">
          
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
