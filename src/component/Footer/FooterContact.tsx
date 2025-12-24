import React from "react";

interface FooterContactProps {
    icon: React.ReactNode;
    title: string;
    value: string;
}

const FooterContact: React.FC<FooterContactProps> = ({
    icon,
    title,
    value,
}) => {
    return (
        <div className="group flex items-center gap-5 p-8 border border-white/10 cursor-pointer">
            <div className="relative overflow-hidden p-4 text-white bg-white/10 
        before:absolute before:inset-0 before:bg-white 
        before:-translate-x-full before:transition-transform before:duration-300
        group-hover:before:translate-x-0 group-hover:text-black">
                <span className="relative z-10">{icon}</span>
            </div>

            <div>
                <p className="text-white/50 text-sm">{title}</p>
                <p className="text-white font-medium">{value}</p>
            </div>
        </div>
    );
};

export default FooterContact;
