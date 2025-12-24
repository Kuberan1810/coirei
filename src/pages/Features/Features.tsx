import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import FeaturesHero from "./Sections/FeaturesHero";
import FeatureCategories from "./Sections/FeatureCategories";
import FeatureContent from "./Sections/FeatureContent";
import IntegrationSection from "./Sections/IntegrationSection";
import CTASection from "./Sections/CTASection";
import WorksFlow from "./Sections/WorksFlow";
import FeatureContact from "./Sections/FeatureContact";
import "./Features.css"

function Features() {
    return (
        <>
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <FeaturesHero />
            <FeatureCategories />
            <FeatureContent />
            <WorksFlow />
            <IntegrationSection />
            <CTASection />
            <FeatureContact />
            <Footer />
        </>
    );
};

export default Features;
