import type { JSX } from "react";
import Lottie from "lottie-react";

import smartLayoutsBig from "../../../../assets/js/TraceabilityMain.json"

export default function TraceabilityMain(): JSX.Element {
    return (
        <div className="lottie-100 w-full h-full flex items-center justify-center">
            <Lottie
                animationData={smartLayoutsBig}
                loop
                autoplay
                className="w-full h-full"
            />
        </div>
    );
}
