
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer/Footer";
import BlogHero from "./Section/BlogHero";
import BlogList from "./Section/BlogList";
import BlogCTA from "./Section/BlogCTA";

function Blog() {
    return (
        <>
            <div className="fixed w-full top-0 z-10">
                <Navbar />
            </div>
            <BlogHero />
            <BlogList />
            <BlogCTA />
            <Footer />
        </>
    );
};

export default Blog;
