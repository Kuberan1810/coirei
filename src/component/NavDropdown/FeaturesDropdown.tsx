import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function FeaturesDropdown() {
    return (
        <li className="relative group">
            {/* Trigger */}
            <Link
                to="/features"
                className="flex items-center gap-1 p-2.5 rounded
        hover:bg-[#7B7B7B20] transition-all duration-300"
            >
                <span className="font-medium leading-none">Features</span>
                <ChevronRight
                    size={16}
                    strokeWidth={2}
                    className="mt-0.5 opacity-70 transition-transform duration-300
          group-hover:rotate-90"
                />
            </Link>

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
                        { label: "Code", to: "/features/Code" },
                        { label: "Analytics", to: "/features/analytics" },
                        { label: "Integrations", to: "/features/integrations" },
                    ].map((item) => (
                        <li key={item.label}>
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
