import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ResourcesDropdown() {
    return (
        <li className="relative group">
            {/* Trigger — NOT a Link */}
            <div
                className="flex items-center gap-1 p-2.5 rounded cursor-pointer
        hover:bg-[#7B7B7B20] transition-all duration-300"
            >
                <span className="font-medium leading-none">Resources</span>
                <ChevronRight
                    size={16}
                    strokeWidth={2}
                    className="mt-0.5 opacity-70 transition-transform duration-300
          group-hover:rotate-90"
                />
            </div>

            {/* Dropdown */}
            <div
                className="absolute left-0 top-full mt-6.5 w-70
        opacity- invisible translate-y-2
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
        transition-all duration-300 ease-out
        NavGlass rounded-xl!"
            >
                <ul className="py-2">
                    {[
                        { label: "Blog", to: "/resources/blog" },
                        { label: "Docs", to: "/resources/docs" },
                        { label: "Coirei University", to: "/resources/university" },
                        { label: "Changelog", to: "/resources/changelog" },
                        { label: "Company", to: "/company" },
                        { label: "How We Work", to: "/how-we-work" },
                        { label: "Careers", to: "/careers" },
                        { label: "Contact", to: "/contact" },
                        { label: "Privacy", to: "/privacy" },
                    ].map((item) => (
                        <li key={item.label}>
                            {/* ONLY these are Links */}
                            <Link
                                to={item.to}
                                className="group flex items-center justify-between
                px-4 py-3 mx-2 rounded-xl
                text-[15px] font-medium text-white/90
                hover:bg-white/10 transition-all"
                            >
                                <span>{item.label}</span>
                                <ChevronRight
                                    size={14}
                                    strokeWidth={2}
                                    className="opacity-40 transition-all duration-300
                  group-hover:opacity-80 group-hover:translate-x-1"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
}
