import Lottie from "lottie-react";
import ganifyIcons from "../../../../assets/js/traceability.json"

export default function TraceabilityCard() {
    return (
        <div className="ai-card-lottie w-full h-full flex items-center justify-center">
            <Lottie
                animationData={ganifyIcons}
                loop
                autoplay
                renderer="svg"
                className="w-full h-full"
            />
        </div>
    );
}
