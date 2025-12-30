import React from "react";
import Lottie from "lottie-react";

import automationIcons from "../../../assets/js/left right icons.json";
import aiSun from "../../../assets/js/ganify ai sun.json";
import shieldIcons from "../../../assets/js/shield and icons recreated.json";
import Orca from "../../../assets/images/Features/orca-ai.png";

import GlassCard from "./FeatureGlassCard";

const WorkStyleSection: React.FC = () => {
  return (
    <section className=" px-15 py-20">

      {/* TOP GRID */}
      <div className="grid grid-cols-[1fr_1.9fr] gap-6">

        <GlassCard
          title="Language Intelligence"
          subtitle="Understand intent, not just text"
          description="ORCA turns human intent into machine-executable actions. It understands goals, context, and constraints transforming natural language into real execution."
          imageFirst
        >
          <img src={Orca} alt="Orca AI" className="w-full" />
        </GlassCard>



        {/* WORKFLOW AUTOMATION */}
        <GlassCard
          title="AI Workflow Automation"
          subtitle="Execution that moves on its own"
          description="ORCA uses context-aware AI to automate execution across planning, code, and pipelines.
Agents orchestrate workflows across code, infrastructure, and systems, triggering actions based on intent, state, and outcomes."
        >
          <div className="flex justify-center">
            <Lottie animationData={automationIcons} loop autoplay />
          </div>
        </GlassCard>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-[2fr_1fr] gap-6 mt-6">

        {/* COMMAND CENTER */}
        <GlassCard
          title="Your AI Command Center"
          subtitle="One workspace for total execution control"
          description="ORCA provides a single workspace to manage all AI capabilities and execution workflows. Orchestrate multiple AI agents in real time while monitoring tasks, code, and pipelines together."
        >
          <div className="flex justify-center mt-4">
            <Lottie animationData={aiSun} loop autoplay />
          </div>
        </GlassCard>

        {/* SECURITY */}
        <GlassCard
          title="Unified Security"
          subtitle="Protection built into execution"
          description="Security and governance are built directly into ORCA’s execution fabric. Every action is permissioned, audited, and reversible across humans, agents, and systems."
        >
          <div className="flex justify-center mt-4">
            <Lottie animationData={shieldIcons} loop autoplay />
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default WorkStyleSection;
