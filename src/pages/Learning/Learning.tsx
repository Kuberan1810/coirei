import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar";
import LearningSection from "./section/learningSection";

const Learning = () => {
  return (
    <div className="overflow-hidden">
      <div className="fixed w-full top-0 z-10">
        <Navbar />
      </div>
      <LearningSection />
      <Footer />
    </div>
  )
}

export default Learning;