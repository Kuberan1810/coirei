import React from "react";
import Lottie from "lottie-react";

/* LOTTIE (OTHER SECTIONS) */
import aiSun from "../../../assets/js/ganify ai sun.json";
import shieldIcons from "../../../assets/js/shield and icons recreated.json";

/* STATIC IMAGE */
import Orca from "../../../assets/images/Features/orca-ai.png";

import GlassCard from "./FeatureGlassCard";
import AiWorkflowTrack from "./animation/AiWorkflowTrack";

const FeatureCategories: React.FC = () => {
  return (
    <section className="mx-6 sm:mx-10 md:mx-15 py-10 sm:py-20">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.9fr] gap-6">

        {/* LANGUAGE INTELLIGENCE */}
        <GlassCard
          title="Language Intelligence"
          subtitle="Understand intent, not just text"
          description="ORCA turns human intent into machine-executable actions. It understands goals, context, and constraints transforming natural language into real execution."
          imageFirst
        >
          <img
            src={Orca}
            alt="Orca AI"
            className="w-full h-auto"
          />
        </GlassCard>

        {/* AI WORKFLOW AUTOMATION */}
        <GlassCard
          title="AI Workflow Automation"
          subtitle="Execution that moves on its own"
          description="ORCA uses context-aware AI to automate execution across planning, code, and pipelines. Agents orchestrate workflows across systems based on intent and state."
        >
          <AiWorkflowTrack />
        </GlassCard>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mt-6">

        {/* COMMAND CENTER */}
        <GlassCard
          title="Your AI Command Center"
          subtitle="One workspace for total execution control"
          description="ORCA provides a single workspace to manage all AI capabilities and execution workflows."
        >
          <div className="flex justify-center mt-4 w-full">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-full">
              <Lottie animationData={aiSun} loop autoplay />
            </div>
          </div>
        </GlassCard>

        {/* SECURITY */}
        <GlassCard
          title="Unified Security"
          subtitle="Protection built into execution"
          description="Security and governance are built directly into ORCA’s execution fabric."
        >
          <div className="flex justify-center mt-4 w-full">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-full">
              <Lottie animationData={shieldIcons} loop autoplay />
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default FeatureCategories;
