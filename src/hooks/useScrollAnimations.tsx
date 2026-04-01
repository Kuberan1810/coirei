import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

const useScrollAnimations = (): void => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements = gsap.utils.toArray<HTMLElement>("[data-ns-animate]");

            elements.forEach((el) => {
                /* ---------- READ DATA ATTRIBUTES ---------- */
                const delay = parseFloat(el.dataset.delay ?? "0");
                const duration = parseFloat(el.dataset.duration ?? "0.8");
                const offset = parseFloat(el.dataset.offset ?? "60");
                const direction = (el.dataset.direction ?? "up") as Direction;
                const rotate = parseFloat(el.dataset.rotate ?? "0");
                const scale = parseFloat(el.dataset.scale ?? "1");
                const blur = el.dataset.blur !== "false";
                const once = el.dataset.once !== "false";

                /* ---------- CALCULATE AXIS ---------- */
                let x = 0;
                let y = 0;

                switch (direction) {
                    case "up":
                        y = offset;
                        break;
                    case "down":
                        y = -offset;
                        break;
                    case "left":
                        x = offset;
                        break;
                    case "right":
                        x = -offset;
                        break;
                }

                /* ---------- INITIAL STATE ---------- */
                gsap.set(el, {
                    opacity: 0,
                    x,
                    y,
                    scale,
                    rotate,
                    filter: blur ? "blur(16px)" : "none",
                    willChange: "transform, opacity, filter"
                });

                /* ---------- SCROLL ANIMATION ---------- */
                gsap.to(el, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                    duration,
                    delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        end: "top 40%",
                        toggleActions: once
                            ? "play none none none"
                            : "play reverse play reverse"
                    }
                });
            });
        });

        /* ---------- CLEANUP ---------- */
        return () => {
            ctx.revert();
        };
    }, []);
};

export default useScrollAnimations;
