import React from "react";
import logo from "../../assets/images/Features/coirei-cirlce-logo.png";
import { Mail, MessagesSquare, Info, ChevronRight } from "lucide-react";

import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#161616] text-white mx-20 pt-20">

            {/* TOP BAR */}
            <div className="relative overflow-hidden">
                {/* Top border animation */}
                <span className="  pointer-events-none  absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent
  " />

                {/* Bottom border animation */}
                <span className=" pointer-events-none absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/30 to-transparent

  " />

                <div className="group max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-12 transition-transform duration-500 ease-out group-hover:rotate-180"
                    />

                    <a
                        href="/careers"
                        className="flex items-center gap-2 text-sm tracking-wide  text-white/70 hover:text-white transition-all duration-300"
                    >
                        JOIN OUR TEAM

                        <span
                            className="flex items-center text-white/40  transition-all duration-300 ease-out
                            group-hover:translate-x-2 group-hover:text-white"
                        >
                            <ChevronRight size={16} />
                        </span>
                    </a>
                </div>

            </div>


            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* LEFT */}
                <div className="max-w-lg">
                    <h2 className="text-4xl font-medium leading-tight">
                        Unlock tomorrow’s most important AI trends
                    </h2>
                    <p className="text-white/60 mt-4">
                        Lorem ipsum dolor sit amet consectetur sit mi lacus quis vitae sed
                        pellentesque libero ultricies neque.
                    </p>

                    <form className="mt-10 flex border border-white/20">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-transparent px-4 py-3 text-white outline-none"
                        />
                        <button className="bg-white text-black px-6 text-sm font-medium">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>

                {/* RIGHT */}
                <div className="grid grid-cols-2 gap-16">
                    <FooterLinks
                        links={[
                            { label: "Home", href: "/" },
                            { label: "Features", href: "/features/code" },
                            { label: "Contact Sales", href: "/contactsales" },
                            { label: "Careers", href: "/careers" },
                        ]}
                    />

                    <FooterLinks
                        links={[

                            { label: "Blog", href: "/resources/blog" },
                            { label: "Coirei University", href: "/resources/university" },
                            { label: "Pricing", href: "/pricing" },
                            { label: "Coming soon", href: "#" },
                        ]}
                    />
                </div>
            </div>

            {/* CONTACT STRIP */}
            <div className="grid grid-cols-1 md:grid-cols-3 mx-18">
                <FooterContact
                    icon={<Mail />}
                    title="Email address"
                    value="info@coirei.com"
                />
                <FooterContact
                    icon={<MessagesSquare />}
                    title="Live chat with us"
                    value="Chat with us"
                />
                <FooterContact
                    icon={<Info />}
                    title="Support"
                    value="support@coirei.com"
                />
            </div>

            {/* BOTTOM */}
            <div className="">
                <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm">
                    <span>Coirei Technologies</span>
                    <span>
                        © coirei| {" "}
                        <b className="text-white">Technologies</b>
                    </span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
