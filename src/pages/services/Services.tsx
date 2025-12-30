import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar";
import OurServices from "./section/OurServices";
import ServiceAbout from "./section/ServiceAbout";
import ServicesHero from "./section/ServicesHero";
import ServicesWorkFlow from "./section/ServicesWorkFlow";

function Services() {
    return (
        <>
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <ServicesHero />
            <ServiceAbout />
            <OurServices />
            <ServicesWorkFlow/>
            <Footer />
        </>
    );
};

export default Services
