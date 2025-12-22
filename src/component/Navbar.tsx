import logo from "../assets/images/homepage/coirei-logo.png"
import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';

function Navbar() {

    return (
        <>

            <header className=" text-[rgb(212,212,212)] mx-5 my-7.5 rounded-lg">
                <nav className="glass  flex items-center justify-between px-5 py-2.5">

                    <div className="flex gap-7.5 items-center">
                        <Link to="/" className="text-xl font-bold">
                            <img src={logo} alt="Coirei Logo" className="w-20 h-7" />
                        </Link>


                        <ul className="flex items-center gap-7.5">
                            <li>
                                <Link
                                    to="/features"
                                    className="flex items-center justify-center gap-1 p-2.5 rounded   hover:bg-[#7B7B7B20] cursor-pointer  transition-all duration-500 ease-out"
                                >
                                    <span className="font-medium leading-none">
                                        Features
                                    </span>

                                    <ChevronRight
                                        size={16}
                                        strokeWidth={2.5}
                                        className="shrink-0 mt-1"
                                    />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/resources"
                                    className="flex items-center justify-center gap-1 p-2.5 rounded   hover:bg-[#7B7B7B20] cursor-pointer  transition-all duration-500 ease-out"
                                >
                                    <span className="font-medium leading-none">
                                        Resources
                                    </span>
                                    <ChevronRight
                                        size={16}
                                        strokeWidth={2.5}
                                        className="shrink-0 mt-1"
                                    />
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/pricing"
                                    className="flex items-center justify-center gap-1 p-2.5 rounded   hover:bg-[#7B7B7B20] cursor-pointer  transition-all duration-500 ease-out"
                                >
                                    <span className="font-medium leading-none">
                                        Pricing
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/enterprise"
                                    className="flex items-center justify-center gap-1 p-2.5 rounded   hover:bg-[#7B7B7B20] cursor-pointer  transition-all duration-500 ease-out"
                                >
                                    <span className="font-medium leading-none">
                                        Enterprise
                                    </span>
                                </Link>
                            </li>


                        </ul>
                    </div>
                    <div>
                        <Link
                            to="/contact"
                            className="bg-white text-[#3E3E3E] rounded-lg p-2.5 font-medium  hover:bg-[#3E3E3E] cursor-pointer hover:text-white transition-all duration-500 ease-out "
                        >
                            Contact sales
                        </Link>
                    </div>
                </nav>
            </header>

        </>
    )
}




export default Navbar;
