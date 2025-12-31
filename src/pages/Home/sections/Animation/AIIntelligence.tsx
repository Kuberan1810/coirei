import Lottie from "lottie-react";
import aiIntelligence from "../../../../assets/js/ai-intelligence.json";

const AIIntelligence = () => {
    return (
        <div className="ai-card-image-wrap">
            <Lottie
                animationData={aiIntelligence}
                loop={true}
                autoplay={true}
                className="w-full h-full"
            />
        </div>
    );
};

export default AIIntelligence;
