import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";



/* LOTTIE (OTHER SECTIONS) */
import aiSun from "../../../assets/js/ganify ai sun.json";
import shieldIcons from "../../../assets/js/shield and icons recreated.json";

/* STATIC IMAGE */
import Orca from "../../../assets/images/Features/orca-ai.png";

import GlassCard from "./FeatureGlassCard";
import AiWorkflowTrack from "./AiWorkflowTrack";



const FeatureCategories: React.FC = () => {
  return (
    <section className="px-15 py-20">

      {/* TOP GRID */}
      <div className="grid grid-cols-[1fr_1.9fr]  gap-6">

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
            className="w-full"
            
          />
        </GlassCard>

        {/* AI WORKFLOW AUTOMATION — REACT IMAGE ANIMATION */}
        <GlassCard 
          title="AI Workflow Automation"
          subtitle="Execution that moves on its own"
          description="ORCA uses context-aware AI to automate execution across planning, code, and pipelines. Agents orchestrate workflows across systems based on intent and state."
        >
          <AiWorkflowTrack   />
          
        </GlassCard>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-[2fr_1fr] gap-6 mt-6">

        {/* COMMAND CENTER — LOTTIE */}
        <GlassCard
          title="Your AI Command Center"
          subtitle="One workspace for total execution control"
          description="ORCA provides a single workspace to manage all AI capabilities and execution workflows."
        >
          <div className="flex justify-center mt-4">
            <Lottie animationData={aiSun} loop autoplay />
          </div>
        </GlassCard>

        {/* SECURITY — LOTTIE */}
        <GlassCard
          title="Unified Security"
          subtitle="Protection built into execution"
          description="Security and governance are built directly into ORCA’s execution fabric."
        >
          <div className="flex justify-center mt-4">
            <Lottie animationData={shieldIcons} loop autoplay />
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default FeatureCategories;
