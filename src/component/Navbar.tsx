import logo from "../assets/images/homepage/coirei-logo.png";
import { Link } from "react-router-dom";
import ResourcesDropdown from "../component/NavDropdown/ResourcesDropdown";
import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    return (
        <header className="text-[rgb(212,212,212)] mx-5 my-7.5 rounded-lg ">
            <nav className="glass flex items-center justify-between px-5 py-2.5">
                <div className="flex gap-7.5 items-center">

                    {/* LEFT */}

                    <Link to="/">
                        <img src={logo} alt="Coirei Logo" className="w-20 h-7" />
                    </Link>

                    {/* DESKTOP MENU */}

                    <ul className="hidden md:flex items-center gap-7.5">
                        {/* <FeaturesDropdown /> */}
                        <li>
                            <Link
                                to="/features"
                                className="p-2.5 rounded hover:bg-[#7B7B7B20]"
                            >
                                Features
                            </Link>
                        </li>
                        <ResourcesDropdown />

                        {/* <li>
                            <Link
                                to="/pricing"
                                className="p-2.5 rounded hover:bg-[#7B7B7B20]"
                            >
                                Pricing
                            </Link>
                        </li> */}


                        <li>
                            <Link
                                to="/careers"
                                className="p-2.5 rounded hover:bg-[#7B7B7B20]"
                            >
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Services"
                                className="p-2.5 rounded hover:bg-[#7B7B7B20]"
                            >
                                Services
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* RIGHT */}
                <div className="hidden md:block">
                    <Link
                        to="/contactsales"
                        className="bg-white text-[#3E3E3E] rounded-lg py-2.5 px-5 font-medium hover:bg-[#3E3E3E] hover:text-white transition"
                    >
                        Contact sales
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>
            

            
            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden mt-3 px-2">
                    <div className="glass rounded-2xl p-3 bg-[#121212]/90 backdrop-blur-2xl border border-white/10">
                        <ul className="flex flex-col gap-3 text-white">

                            {/* Features */}
                            <li>
                                <Link
                                    to="/features"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between text-lg px-4 py-3 rounded-lg hover:bg-white/5"
                                >
                                    <span>Features</span>
                                    <ChevronRight size={16} className="opacity-40" />
                                </Link>
                            </li>

                            {/* RESOURCES – SINGLE CARD ACCORDION */}
                            <li
                                className={`overflow-hidden rounded-2xl transition-all duration-300 ${resourcesOpen ? "bg-[#1c1c1c]/60 border border-white/10" : ""
                                    }`}
                            >

                                {/* Header */}
                                <button
                                    onClick={() => setResourcesOpen(prev => !prev)}
                                    className={`w-full flex items-center justify-between px-4 py-4 text-lg font-medium transition-colors ${resourcesOpen ? "hover:bg-white/5 " : "hover:bg-white/5 rounded-lg "
                                        }`}
                                >
                                    <span>Resources</span>
                                    <ChevronRight
                                        size={18}
                                        className={`transition-transform duration-300 ${resourcesOpen ? "rotate-90" : "rotate-0"
                                            }`}
                                    />
                                </button>

                                {/* List */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-out ${resourcesOpen ? "max-h-75 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    {[
                                        { label: "Company", to: "/resources/company" },
                                        // { label: "Careers", to: "/resources/careers" },
                                        { label: "Contact", to: "/resources/contact" },
                                        { label: "Privacy", to: "/resources/privacy" },
                                    ].map((item, index) => (
                                        <Link
                                            key={item.label}
                                            to={item.to}
                                            onClick={() => setOpen(false)}
                                            className={`flex items-center justify-between px-4 py-3 text-[15px] text-white/90 hover:bg-white/5 ${index !== 0 ? "border-t border-white/10" : ""
                                                }`}
                                        >
                                            <span>{item.label}</span>
                                            <ChevronRight size={14} className="opacity-40" />
                                        </Link>
                                    ))}
                                </div>
                            </li>

                            {/* Careers */}
                            <li>
                                <Link
                                    to="/careers"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between text-lg px-4 py-3 rounded-lg hover:bg-white/5"
                                >
                                    <span>Careers</span>
                                    <ChevronRight size={16} className="opacity-40" />
                                </Link>
                            </li>

                            {/* Services */}
                            <li>
                                <Link
                                    to="/services"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between text-lg px-4 py-3 rounded-lg hover:bg-white/5"
                                >
                                    <span>Services</span>
                                    <ChevronRight size={16} className="opacity-40" />
                                </Link>
                            </li>

                            {/* Contact sales */}
                            <Link
                                to="/contactsales"
                                onClick={() => setOpen(false)}
                                className="mt-4 text-center bg-white text-black rounded-lg py-3 font-medium hover:bg-white/90"
                            >
                                Contact sales
                            </Link>

                        </ul>
                    </div>
                </div>
            )}




        </header>
    );
}


export default Navbar;
