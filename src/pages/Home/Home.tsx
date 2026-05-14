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
import SecondContent from "./sections/SecondContent";
import OurProducts from "./sections/OurProducts";
import { DataPrivacySection } from "./sections/DataPrivacySection";

function Home() {
    useScrollAnimations();

    return (
        <div className="overflow-x-clip bg-[#161616] min-h-screen">
            <SEO 
                title="Coirei - Custom Web Development & Digital Solutions"
                description="Coirei specializes in AI agents and software development, delivering scalable web solutions, custom CRM/ERP systems, AI chatbots, and process automation to drive efficient business growth."
            />
            <FaqSchema />

            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            <NewHero />
            <AboutUs />
            <WhatWeDo />
            <WhyChooseUs />
            <OurProducts />
            <SecondContent/>
            <CeoSection/>
            <DataPrivacySection />
            <Footer /> 
            
        </div>
    );
}

export default Home;
