import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Enterprise from "./pages/Enterprise/Enterprise";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/ContactUs/Contact";

// Resources pages
import Blog from "./pages/Resources/Blog/Blog";
// import Docs from "./pages/Resources/Docs";
import University from "./pages/Resources/Univercity/University";
// import Changelog from "./pages/Resources/Changelog";

// Features pages
import Code from "./pages/Features/Features";
// import Analytics from "./pages/Features/Analytics";
// import Integrations from "./pages/Features/Integrations";

function App() {
  return (
    <Routes>
      {/* MAIN PAGES */}
      <Route path="/" element={<Home />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />

      {/* RESOURCES (NO parent page) */}
      <Route path="/resources/blog" element={<Blog />} />
      {/* <Route path="/resources/docs" element={<Docs />} /> */}
      <Route path="/resources/university" element={<University />} />
      {/* <Route path="/resources/changelog" element={<Changelog />} /> */}

      {/* FEATURES (NO parent page) */}
      <Route path="/features/code" element={<Code />} />
      {/* <Route path="/features/analytics" element={<Analytics />} />
      <Route path="/features/integrations" element={<Integrations />} /> */}
    </Routes>
  );
}

export default App;
