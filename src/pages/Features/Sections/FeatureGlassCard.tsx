import React from "react";

interface GlassCardProps {
    title: string;
    subtitle: string;
    description: string;
    children?: React.ReactNode;
    imageFirst?: boolean; // 👈 NEW
}

const GlassCard: React.FC<GlassCardProps> = ({
    title,
    subtitle,
    description,
    children,
    imageFirst = false,
}) => {
    return (
        <div
            className="
        glass
        backdrop-blur-4xl
        border border-white/10
        rounded-3xl
        shadow-[0_20px_60px_rgba(0,0,0,0.65)]
        hover:-translate-y-1.5
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.85)]
        transition-all duration-300
        p-7
        animate-fadeUp
      "
        >
            {/* IMAGE FIRST — ONLY IF imageFirst = true */}
            {imageFirst && children && (
                <div className="mb-5 flex justify-center">
                    {children}
                </div>
            )}

            <h3 className="text-white text-[28px] font-semibold ">
                {title}
            </h3>

            <p className="text-white/70 text-base mb-8">
                {subtitle}
            </p>

            <p className="text-white/90 font-medium text-lg leading-relaxed mb-5 ">
                {description}
            </p>

            {/* NORMAL POSITION — OTHER CARDS */}
            {!imageFirst && children && (
                <div className="flex justify-center">
                    {children}
                </div>
            )}
        </div>
    );
};

export default GlassCard;
