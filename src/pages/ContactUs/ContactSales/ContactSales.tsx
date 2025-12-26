import Footer from "../../../component/Footer/Footer";
import Navbar from "../../../component/Navbar";
import CTABanner from "../section/CTABanner";
import ContactContent from "./section/ContactContent";
import ContactList from "./section/ContactList";



function ContactSales() {


  return (
    <>
      <div className="fixed w-full top-0 z-10">
        <Navbar />
      </div>

      <ContactList />
      <ContactContent/>
      <CTABanner/>
      <Footer />
    </>
  );
}

export default ContactSales;
