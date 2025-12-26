import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import ContactHero from "./section/ContactHero";
import CTABanner from "./section/CTABanner";



function Contact() {

    return (
        <>

            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <ContactHero />
            <CTABanner/>
            <Footer />
        </>
    )

}


export default Contact;