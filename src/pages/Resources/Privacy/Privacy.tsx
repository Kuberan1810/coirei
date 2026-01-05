import Footer from "../../../component/Footer/Footer"
import Navbar from "../../../component/Navbar"
import PrivacySection from "./section/PrivacySection"

const Privacy = () => {
    return (
        <div className="overflow-hidden">
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <PrivacySection />
            <Footer />
        </div>
    )
}

export default Privacy