import React from "react";
import logo from "../assets/images/Features/coirei-cirlce-logo.png"
interface FooterLinksProps {
    links: { label: string; href: string }[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => (
    <ul className="divide-y divide-white/10">
        {links.map((link) => (
            <li key={link.label}>
                <a
                    href={link.href}
                    className="flex items-center justify-between py-4 text-white/80 hover:text-white transition"
                >
                    {link.label}
                    <span className="text-white/40">›</span>
                </a>
            </li>
        ))}
    </ul>
);

interface FooterContactProps {
    icon: React.ReactNode;
    title: string;
    value: string;
}

const FooterContact: React.FC<FooterContactProps> = ({
    icon,
    title,
    value,
}) => (
    <div className="flex items-center gap-4 p-8 border border-white/10">
        <div className="text-white">{icon}</div>
        <div>
            <p className="text-white/50 text-sm">{title}</p>
            <p className="text-white font-medium">{value}</p>
        </div>
    </div>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-linear-to-b bg-[#161616] text-white mx-50">
            {/* TOP BAR */}
            <div className="border-b border-white/10">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-12.5"
                    />

                    <a
                        href="/careers"
                        className="flex items-center gap-2 text-sm tracking-wide hover:opacity-80 transition"
                    >
                        JOIN OUR TEAM <span>›</span>
                    </a>
                </div>
            </div>

            {/* MIDDLE */}
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
                            { label: "About", href: "/about" },
                            { label: "Contact", href: "/contact" },
                            { label: "Careers", href: "/careers" },
                        ]}
                    />

                    <FooterLinks
                        links={[
                            { label: "Career single", href: "#" },
                            { label: "Blog", href: "/blog" },
                            { label: "Blog post", href: "#" },
                            { label: "Coming soon", href: "#" },
                        ]}
                    />
                </div>
            </div>

            {/* CONTACT STRIP */}
            <div className="grid grid-cols-1 md:grid-cols-3">
                <FooterContact
                    icon={<span>✉</span>}
                    title="Email address"
                    value="info@quantumlab.com"
                />
                <FooterContact
                    icon={<span>💬</span>}
                    title="Live chat with us"
                    value="Chat with us"
                />
                <FooterContact
                    icon={<span>ℹ</span>}
                    title="Support"
                    value="support@quantumlab.com"
                />
            </div>

            {/* BOTTOM */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm">
                    <span>More Webflow Templates</span>
                    <span>
                        Copyright © QuantumLab | Designed by{" "}
                        <b className="text-white">BRIX Templates</b> and powered by Webflow
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;  