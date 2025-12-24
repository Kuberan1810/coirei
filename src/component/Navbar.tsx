import logo from "../assets/images/homepage/coirei-logo.png";
import { Link } from "react-router-dom";
import FeaturesDropdown from "../component/NavDropdown/FeaturesDropdown";
import ResourcesDropdown from "../component/NavDropdown/ResourcesDropdown";

function Navbar() {
    return (
        <header className="text-[rgb(212,212,212)] mx-5 my-7.5 rounded-lg ">
            <nav className="glass flex items-center justify-between px-5 py-2.5">
                <div className="flex gap-7.5 items-center">
                    <Link to="/">
                        <img src={logo} alt="Coirei Logo" className="w-20 h-7" />
                    </Link>

                    <ul className="flex items-center gap-7.5">
                        <FeaturesDropdown />
                        <ResourcesDropdown />

                        <li>
                            <Link
                                to="/pricing"
                                className="p-2.5 rounded hover:bg-[#7B7B7B20]"
                            >
                                Pricing
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/enterprise"
                                className="p-2.5 rounded hover:bg-[#7B7B7B20]"
                            >
                                Enterprise
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/careers"
                                className="p-2.5 rounded hover:bg-[#7B7B7B20]"
                            >
                                Careers
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link
                    to="/contact"
                    className="bg-white text-[#3E3E3E] rounded-lg py-2.5 px-5 font-medium
          hover:bg-[#3E3E3E] hover:text-white transition"
                >
                    Contact sales
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;
