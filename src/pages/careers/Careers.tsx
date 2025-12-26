
import Footer from "../../component/Footer/Footer";
import CareersHero from "./section/CareersHero";
import CareersFeature from "./section/CareersFeature";
import CareersWorkFlow from "./section/CareersWorkFlow";
import CareersRoles from "./section/CareersRoles";
import Navbar from "../../component/Navbar";


function Careers() {
    return (
        <>
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <CareersHero />
            <CareersFeature />
            <CareersWorkFlow />
            <CareersRoles />
            <Footer />
        </>
    );
};

export default Careers;
