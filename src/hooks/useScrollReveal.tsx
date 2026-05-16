import { useEffect, useRef, useState } from "react";

const useScrollReveal = (
    threshold = 0.3,
    y = 48,
    duration = 0.7
) => {

    const ref = useRef<any>(null);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();

    }, [threshold]);

    const revealStyle = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible
            ? "translateY(0px)"
            : `translateY(${y}px)`,

        transition: `
            opacity ${duration}s cubic-bezier(0.4,0,0.2,1),
            transform ${duration}s cubic-bezier(0.4,0,0.2,1)
        `,
    };

    return {
        ref,
        isVisible,
        revealStyle,
    };
};

export default useScrollReveal;