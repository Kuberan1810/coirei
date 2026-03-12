import SEO from "../../component/SEO";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar";
import LearningSection from "./section/LearningSection";

const Learning = () => {
  return (
    <div className="overflow-hidden">
      <SEO 
        title="Learning Resources | AI, Software & Web Development Guides"
        description="Learn about AI development, web technologies, automation and software engineering through tutorials, guides and educational resources"
        keywords="learn AI development, web development tutorials, programming resources, software engineering learning, technology tutorials"
        breadcrumbs={[
            { name: "Home", url: "https://coirei.com" },
            { name: "Learning", url: "https://coirei.com/learning" }
        ]}
      />
      <div className="fixed w-full top-0 z-10">
        <Navbar />
      </div>
      <LearningSection />
      <Footer />
    </div>
  )
}

export default Learning;