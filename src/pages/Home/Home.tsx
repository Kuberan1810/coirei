import SEO from "../../component/SEO";
import { FaqSchema } from "../../component/StructuredData";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";

import NewHero from "./sections/NewHero";
import AboutUs from "./sections/AboutUs";
import WhatWeDo from "./sections/WhatWeDo";
import WhyChooseUs from "./sections/WhyChooseUs";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import { CeoSection } from "./sections/CeoSection";
import ValuesSection from "./sections/ValuesSection";
import IndustriesServing from "./sections/IndustriesServing";
import OurProducts from "./sections/OurProducts";
import OurMission from "./sections/OurMission";
import FAQSection from "./sections/FAQSection";

function Home() {
    useScrollAnimations();

    return (
        <div className="overflow-x-clip bg-[#161616] min-h-screen">
            <SEO
                title="AI Powered Solutions for Businesses | Coirei"
                description="Coirei is AI powered solutions company. We create AI apps and chatbots. AI automation and AI web and platform. AI products and customized LMS for business."
            />
            <FaqSchema />
            
            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <NewHero />
            <AboutUs />
            <OurMission />
            <WhatWeDo />
            <WhyChooseUs />
            <OurProducts />
            <ValuesSection />
            <IndustriesServing />
            <FAQSection />
            <CeoSection />
            <Footer />

        </div>
    );
}

export default Home;
