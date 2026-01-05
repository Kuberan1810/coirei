import { Routes, Route } from "react-router-dom";
import ScrollAnimationWrapper from "./layout/ScrollAnimationWrapper";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/ContactUs/Contact";

// Resources pages
import Blog from "./pages/Resources/Blog/Blog";
// import Docs from "./pages/Resources/Docs";
import University from "./pages/Resources/Univercity/University";
// import Changelog from "./pages/Resources/Changelog";

// Features pages
import Features from "./pages/Features/Features";
import Careers from "./pages/careers/Careers";
import Privacy from "./pages/Resources/Privacy/Privacy";
import ContactSales from "./pages/ContactUs/ContactSales/ContactSales";
import Company from "./pages/Resources/Company/Company";
import Services from "./pages/services/Services";

// import Analytics from "./pages/Features/Analytics";
// import Integrations from "./pages/Features/Integrations";

function App() {
  return (
    <ScrollAnimationWrapper>
    <Routes>
      {/* MAIN PAGES */}
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact-sales" element={<ContactSales />} />
      <Route path="/services" element={<Services />} />

      {/* RESOURCES (NO parent page) */}
      <Route path="/resources/blog" element={<Blog />} />
      <Route path="/resources/company" element={<Company />} />
      <Route path="/resources/university" element={<University />} />
      <Route path="contactsales" element={<ContactSales />} />
      <Route path="/resources/privacy" element={<Privacy />} />
      <Route path="/resources/contact" element={<Contact />} />
      <Route path="/resources/careers" element={<Careers />} />


      {/* FEATURES (NO parent page) */}
      <Route path="/features" element={<Features />} />

      </Routes>
    </ScrollAnimationWrapper>
  );
}

export default App;
