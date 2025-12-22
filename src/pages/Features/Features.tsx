import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import FeaturesHero from "./Sections/FeaturesHero";
import FeatureCategories from "./Sections/FeatureCategories";
import FeatureContent from "./Sections/FeatureContent";
import IntegrationSection from "./Sections/IntegrationSection";
import CTASection from "./Sections/CTASection";
import WorksFlow from "./Sections/WorksFlow";
import FeatureContact from "./Sections/FeatureContact";


function Features() {
    return (
        <>
            <Navbar />
            <FeaturesHero />
            <FeatureCategories />
            <FeatureContent />
            <WorksFlow/>
            <IntegrationSection />
            <CTASection />
            <FeatureContact/>
            <Footer />
        </>
    );
};

export default Features;
