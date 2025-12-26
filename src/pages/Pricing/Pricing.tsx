import { useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import Topsection from "./section/Topsection";
import Pricingsection from "./section/Pricingsection";
import Modelsection from "./section/Modelsection";
import PrivacySecurity from "./section/PrivacySecurity";

function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <>
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>

            <Topsection
                isAnnual={isAnnual}
                setIsAnnual={setIsAnnual}
            />

            <Pricingsection
                isAnnual={isAnnual}
            />

            <Modelsection />
            <PrivacySecurity />
            <Footer />
        </>
    );
}

export default Pricing;
