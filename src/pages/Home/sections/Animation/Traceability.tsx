import type { JSX } from "react";
import Lottie from "lottie-react";

import homePageLottie from "../../../../assets/js/traceabilityCard.json"

export default function Traceability(): JSX.Element {
    return (
        <div className="home-lottie-wrap w-full h-full flex items-center justify-center">
            <div className="lottie-100 w-full h-full">
                <Lottie
                    animationData={homePageLottie}
                    loop
                    autoplay
                    className="w-full h-full"
                />
            </div>
        </div>
    );
}
