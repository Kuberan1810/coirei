import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Logo1 from "../../../../assets/images/Features/animation/logo1.png";
import Logo2 from "../../../../assets/images/Features/animation/Logo2.png";
import Logo3 from "../../../../assets/images/Features/animation/Logo3.png";
import Logo4 from "../../../../assets/images/Features/animation/Logo4.png";
import Logo5 from "../../../../assets/images/Features/animation/Logo5.png";
import Logo6 from "../../../../assets/images/Features/animation/Logo6.png";
import CenterLogo from "../../../../assets/images/Features/animation/CenterLogo.png";

const leftIcons = [Logo1, Logo2, Logo3];
const rightIcons = [Logo4, Logo5, Logo6];

type Phase = "center" | "open" | "close";

const AiWorkflowTrack = () => {
    const [phase, setPhase] = useState<Phase>("center");

    useEffect(() => {
        if (phase === "center") setTimeout(() => setPhase("open"), 100);
        if (phase === "open") setTimeout(() => setPhase("close"), 3000);
        if (phase === "close") setTimeout(() => setPhase("center"), 1000);
    }, [phase]);

    return (
        <div className="relative w-full h-52 rounded-full border border-white/10 overflow-hidden">

            {/* ================= BORDER (OLD STYLE) ================= */}
            <motion.div
                className="absolute top-0 left-0 h-[2px] w-40 bg-orange-500"
                animate={{ x: ["-30%", "530%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute bottom-0 right-0 h-[2px] w-40 bg-orange-500"
                animate={{ x: ["0", "-530%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />

            {/* ================= CENTER ICON (FIRST OPEN, SMOOTH CLOSE) ================= */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                        scale: phase === "center" || phase === "open" ? 1 : 0 ,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <img src={CenterLogo} className="w-35" />
                </motion.div>
            </div>

            {/* ================= LEFT ICONS ================= */}
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex gap-6">
                {leftIcons.map((icon, i) => (
                    <motion.div
                        key={i}
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
                        animate={{
                            // 🔥 OPEN – opposite side (Right → Center)
                            x: phase === "open" ? [60, 0] : 0,

                            // 🔥 WAVE only during OPEN (opp side)
                            y:
                                phase === "open"
                                    ? [0, 8, 0]            // opposite wave
                                    : phase === "close"
                                        ? [0, -16, -40]      // ✅ OLD CLOSE (unchanged)
                                        : 0,

                            // 🔥 SCALE
                            scale:
                                phase === "open"
                                    ? [0, 1]               // open in
                                    : phase === "close"
                                        ? [1, 0]             // ✅ old close out
                                        : 0,

                            opacity: phase === "close" ? 0 : 1,
                        }}

                        transition={{
                            duration: 0.8,
                            delay: phase === "open" ? i * 0.12 : 0,
                            ease: "easeInOut",
                        }}
                    >
                        <img src={icon} className="w-full" />
                    </motion.div>
                ))}
            </div>

            {/* ================= RIGHT ICONS ================= */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex gap-6">
                {rightIcons.map((icon, i) => (
                    <motion.div
                        key={i}
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
                        animate={{
                            // 🔁 OPEN (OPPOSITE): Left → Center
                            x: phase === "open" ? [-60, 0] : 0,

                            // 🔁 OPEN wave opposite
                            y:
                                phase === "open"
                                    ? [0, -8, 0]            // opposite wave
                                    : phase === "close"
                                        ? [0, 16, 40]         // ✅ SAME close (unchanged)
                                        : 0,

                            // SCALE (unchanged)
                            scale:
                                phase === "open"
                                    ? [0, 1]
                                    : phase === "close"
                                        ? [1, 0]
                                        : 0,

                            opacity: phase === "close" ? 0 : 1,
                        }}

                        transition={{
                            duration: 0.8,
                            delay: phase === "open" ? i * 0.12 : 0,
                            ease: "easeInOut",
                        }}
                    >
                        <img src={icon} className="w-full" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AiWorkflowTrack;
