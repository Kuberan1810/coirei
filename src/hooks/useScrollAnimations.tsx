import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = (): void => {
    useEffect(() => {
        ScrollTrigger.getAll().forEach(t => t.kill());

        /* ==================================================
           TEXT / SECTION – SCRUB REVEAL (PREMIUM)
           data-ns-animate
           ================================================== */
        gsap.utils.toArray<HTMLElement>("[data-ns-animate]").forEach(el => {
            const offset = Number(el.dataset.offset) || 60;

            gsap.fromTo(
                el,
                { opacity: 0, y: offset, filter: "blur(16px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        end: "top 40%",
                        scrub: true
                    }
                }
            );
        });

        /* ==================================================
           ACCORDION – SCROLL REVEAL (ONE TIME)
           ================================================== */
        gsap.utils.toArray<HTMLElement>(".accordion-item").forEach((item, i) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 50, filter: "blur(20px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0)",
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        once: true
                    }
                }
            );
        });

        /* ==================================================
           DIVIDER EXPAND
           ================================================== */
        gsap.utils.toArray<HTMLElement>(".divider, .footer-divider").forEach(el => {
            gsap.fromTo(
                el,
                { width: "0%" },
                {
                    width: "100%",
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                        once: true
                    }
                }
            );
        });

        /* ==================================================
           STEP LINE (TIMELINE)
           ================================================== */
        gsap.utils.toArray<HTMLElement>(".step-line").forEach((line, i) => {
            gsap.fromTo(
                line,
                { height: 0 },
                {
                    height: "380px",
                    duration: 1.5,
                    delay: i * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: line,
                        start: "top 75%",
                        once: true
                    }
                }
            );
        });

        /* ==================================================
           HERO PERSPECTIVE (PREMIUM)
           ================================================== */
        gsap.utils.toArray<HTMLElement>(".hero-perspective").forEach(hero => {
            gsap.fromTo(
                hero,
                {
                    opacity: 0,
                    scale: 0.9,
                    rotateX: 14,
                    filter: "blur(20px)"
                },
                {
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    filter: "blur(0)",
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: hero,
                        start: "top 90%",
                        once: true
                    }
                }
            );
        });

        /* ==================================================
           FEATURE CARDS – SCRUB
           ================================================== */
        gsap.utils.toArray<HTMLElement>(".feature-card-1").forEach(el => {
            gsap.from(el, {
                x: 100,
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    end: "bottom 20%",
                    scrub: 2
                }
            });
        });

        gsap.utils.toArray<HTMLElement>(".feature-card-2").forEach(el => {
            gsap.from(el, {
                rotation: 10,
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    end: "bottom 20%",
                    scrub: 2
                }
            });
        });

        gsap.utils.toArray<HTMLElement>(".feature-card-3").forEach(el => {
            gsap.from(el, {
                x: -100,
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    end: "bottom 20%",
                    scrub: 2
                }
            });
        });

        /* ==================================================
           PROGRESS BAR + COUNT
           ================================================== */
        gsap.utils.toArray<HTMLElement>("[data-progress-item]").forEach(item => {
            const value = Number(item.dataset.progressValue) || 0;
            const bar = item.querySelector<HTMLElement>("[data-progress-bar]");
            const text = item.querySelector<HTMLElement>("[data-progress-text]");
            if (!bar || !text) return;

            gsap.fromTo(
                bar,
                { width: "0%" },
                {
                    width: `${value}%`,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        once: true
                    }
                }
            );

            const counter = { val: 0 };
            gsap.to(counter, {
                val: value,
                duration: 2,
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    once: true
                },
                onUpdate: () => {
                    text.textContent = `${Math.floor(counter.val)}%`;
                }
            });
        });


        gsap.utils.toArray<HTMLElement>("[data-ns-animate]").forEach(el => {
            const offset = Number(el.dataset.offset) || 60;
            const delay = Number(el.dataset.delay) || 0; // ✅ NEW

            gsap.fromTo(
                el,
                {
                    opacity: 0,
                    y: offset,
                    filter: "blur(16px)"
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    ease: "none",
                    delay, // ✅ APPLY DELAY
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        end: "top 40%",
                        scrub: true
                    }
                }
            );
        });


    }, []);
};
