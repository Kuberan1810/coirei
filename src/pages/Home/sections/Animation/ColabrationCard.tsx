
import type { JSX } from "react";
import Lottie from "lottie-react";

import collaborateLottie from "../../../../assets/js/colabration.json";

export default function CollaborateFeature(): JSX.Element {
  return (
    <section className="features-v1-01-top flex items-center gap-10 relative">

      {/* LEFT – LOTTIE */}
      <div className="lottie-100 hidden md:block ">
        <Lottie
          animationData={collaborateLottie}
          loop
          autoplay
          
          className="w-full h-full "
        />
      </div>


      
    </section>
  );
}
