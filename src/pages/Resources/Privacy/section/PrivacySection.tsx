import { Settings } from "lucide-react";

const PrivacySection = () => {
    return (
        <section className="text-white px-6 md:px-15 py-16 mt-40">
            {/* Hero */}
            <div className="w-full">
                <h1 className="text-4xl md:text-6xl leading-tight">
                    Your privacy <br /> while using Coirei
                </h1>

                <p className="mt-6 text-[18px] text-[#A1A09D] max-w-3xl leading-relaxed">
                    At Coirei, we are building a unified execution platform for software development
                    because Coirei operates across code, workflows, pipelines, and AI-assisted execution,
                    we take privacy, security, and data control seriously by design</p>

                <p className="mt-6 text-[18px] text-[#ffffff]">Our goal is simple: you remain in control of your data at all times.</p>


                {/* Highlights */}
                <div className="w-full flex justify-between mt-12">
                    <div className="max-w-xl">
                        <Settings className="text-[18px] bg-gray-400 p-0.5 rounded-md mb-2.5" />
                        <p className="text-[20px] text-white mb-2">Telemetry is optional. You remain in control.</p>
                        <p className="text-[18px] text-[#A1A09D] leading-relaxed">
                            Coirei may collect limited execution telemetry to improve {" "}
                            <a href="#" className="text-white">
                                platform reliability and performance.
                            </a>{" "}
                            You can opt out at any time{" "}
                            <a href="#" className="text-white">
                                without losing access
                            </a>
                            to core features, {" "}
                            <a href="#" className="text-white">
                                including AI assistance.
                            </a>{" "}

                        </p>
                    </div>
                    <div className="max-w-xl">
                        <Settings className="text-[18px] bg-gray-400 p-0.5 rounded-md mb-2.5" />
                        <p className="text-[20px] text-white mb-2">Full visibility, always.</p>
                        <p className="text-[18px] text-[#A1A09D] leading-relaxed">
                            You can review execution and telemetry events in {" "}
                            <a href="#" className="text-white">
                                real time through Coirei’s monitoring and audit views.
                            </a>{" "}
                            All data collection is transparent{" "}
                            <a href="#" className="text-white">
                                documented
                            </a>
                            , and {" "}
                            <a href="#" className="text-white">
                                governed
                            </a>{" "}
                            by your privacy settings.
                        </p>
                    </div>
                </div>
            </div>

            {/* Philosophy */}
            <div className="text-center mt-24 max-w-4xl mx-auto">
                <h2 className="text-[32px] md:text-[40px] font-medium">
                    Our philosophy is built on transparency, minimal data collection,
                    and explicit control
                </h2>
                <p className="mt-4 text-[18px] text-[#A1A09D]">
                    TCoirei is designed so that execution happens inside
                    controlled environments, with clear ownership, access rules, and auditability.{" "}
                    <a href="#" className="text-white">
                        Any data that leaves your execution environment
                    </a>{" "}
                    does so intentionally, securely, and with purpose.
                    We do not believe in hidden data collection or opaque AI behaviour.{" "}
                    <a href="#" className="text-white">
                        Every system interaction is governed, observable, and accountable.
                    </a>
                    .
                </p>
            </div>

            {/* How Coirei Works */}
            <div className="max-w-4xl mx-auto mt-24">
                <h3 className="text-[40px] font-regular mb-4">How Coirei Works</h3>
                <p className="text-[20px] text-white-400 leading-relaxed">
                    Coirei operates as a cloud-native execution platform. Code is written
                    and executed inside isolated cloud workspaces. Execution environments are consistent and reproducible.
                </p>
            </div>

            {/* Cloud-based Capabilities */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-[40px] font-regular mb-4">Cloud-based Capabilities</h3>
                <p className="text-[20px] text-white-400 mb-2.5">Some Coirei features rely on cloud services to function correctly, including:</p>
                <ul className="text-[18px] text-white-400 space-y-2 list-disc list-inside">
                    <li>Cloud workspaces and execution environments</li>
                    <li>Continuous testing and CI/CD orchestration</li>
                    <li>AI-assisted analysis and recommendations</li>
                    <li>Collaboration, monitoring, and execution history</li>
                </ul>
                <p className="mt-2.5 text-[20px] text-white-400 leading-relaxed">
                    All cloud-based data is encrypted in transit and at rest.
                    You can delete project data at any time based on your access level and organization policies.
                </p>
            </div>

            {/* Coirei AI */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-[40px] font-regular font-regular mb-4">Coirei AI</h3>
                <p className="text-[18px] text-[#A1A09D] leading-relaxed">
                    Coirei AI provides{" "}
                    <a href="#" className="text-white">
                        execution-aware assistance
                    </a>{" "}
                    across planning, code, workflows, and pipelines.
                </p>

                <p className="mt-5 text-[18px] text-white-400 leading-relaxed">
                    It helps teams by understanding intent, analyzing execution signals, detecting risks,
                    and generating recommendations to improve quality and reliability.
                </p>

                <p className="mt-5 text-[18px] text-white-400 leading-relaxed">
                    Some AI capabilities may process execution context such as code diffs, test results,
                    workflow state, or system outputs in order to provide accurate assistance. This processing
                    happens strictly within defined boundaries and never results in autonomous execution of
                    irreversible actions. AI in Coirei does not merge code, deploy changes, or override ownership and access controls.
                    All critical actions require explicit human approval, and AI behavior is always observable and auditable.
                </p>

                <p className="mt-5 c text-white-400 leading-relaxed">
                    You can manage or disable specific AI capabilities at any time through platform settings.
                </p>

                <p className="mt-5 text-[18px] text-white-400 leading-relaxed">
                    Learn more about how Coirei’s AI assistance works.
                </p>
            </div>

            {/* Telemetry */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-[40px] font-regular mb-4">Telemetry (Opt-out)</h3>
                <p className="text-[18px] text-[#A1A09D] leading-relaxed">
                    Coirei may collect limited telemetry to improve platform reliability, performance, and user experience.{" "}
                    <a href="#" className="text-white">
                        This telemetry is focused on system health and feature usage, not customer code or proprietary logic.
                    </a>
                    Opting out of telemetry does not restrict access to core features or AI assistance.
                    You can disable telemetry at any time and continue using Coirei without interruption.
                    We take additional safeguards to ensure that{" "}
                    <a href="#" className="text-white">
                        when telemetry is disabled, data is not collected unintentionally. For enterprise customers,
                    </a>{" "}
                    zero data retention configurations are available based on organizational requirements.
                </p>
            </div>

            {/* Login */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-[40px] font-regular mb-2.5">Login</h3>
                <p className="text-[18px] text-white-400 leading-relaxed">
                    Coirei supports optional sign-in to provide a consistent
                    and secure execution experience across devices and teams.
                </p>
                <p className="text-[18px] text-[#A1A09D] leading-relaxed">
                    You can explore Coirei without logging in, but signing in enables:
                </p>
                <ul className="mt-2.5 text-[18px] text-[#FFFFFF] list-disc list-inside space-y-2">
                    <li>Persistent cloud workspaces and execution history</li>
                    <li>Synchronized settings and configurations across devices</li>
                    <li>Faster support and issue resolution tied to your account</li>
                </ul>
                <p className="mt-2.5 text-[18px] text-[#A1A09D] leading-relaxed">
                    We understand that identity should provide value, not friction.
                    Login exists to enhance execution continuity, visibility,
                    and collaboration ,{" "}
                    <a href="#" className="text-white">
                        not to limit access.
                    </a>
                </p>
            </div>

            {/* Coirei’s Business Model */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-[40px] font-regular mb-4">Coirei’s Business Model</h3>
                <p className="text-[18px] text-[#A1A09D] leading-relaxed">
                    Coirei is built as a product-led platform with usage-based and enterprise subscription plans.
                    Our business model is focused on delivering execution infrastructure for{" "}
                    <a href="#" className="text-white">
                        teams and organizations not on collecting or monetizing user data.
                    </a>
                    Pricing is tied to platform capabilities, scale, and support needs, not to the value
                    of your code or execution data.
                </p>
            </div>

            {/* Open & Verifiable Practices */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-[40px] font-regular mb-2.5">Open & Verifiable Practices</h3>
                <p className="text-[18px] text-white-400 leading-relaxed">
                    Coirei believes trust is earned through transparency and verifiability.
                </p>
                <p className="text-[18px] text-[#A1A09D] leading-relaxed">
                    Where applicable, parts of the platform, tooling, or interfaces may be made open or auditable to:
                </p>
                <ul className="mt-2.5 text-[18px] text-[#FFFFFF] list-disc list-inside space-y-2">
                    <li>Improve reliability and security</li>
                    <li>Enable independent review of system behavior</li>
                    <li>Strengthen trust around privacy and execution guarantees</li>
                </ul>
                <p className="mt-2.5 text-[18px] text-[#A1A09D] leading-relaxed">
                    We are committed to building systems that can be inspected,
                    reasoned about, and trusted at scale.{" "}
                </p>
            </div>

            {/* Contact */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-[40px] font-regular mb-2.5">
                    Contact the Coirei Privacy Team
                </h3>
                <p className="text-[18px] text-[#A1A09D] leading-relaxed">
                    For questions about privacy, security, data handling, or governance, please reach out to us directly{" "}
                    <a href="#" className="text-white">info@coirei.com.</a>You can also review our
                    <a href="#" className="text-white"> Privacy Policy, Terms of Service,</a> and
                    <a href="#" className="text-white"> Trust documentation</a> for more details.
                </p>
            </div>
        </section>
    );
};

export default PrivacySection;