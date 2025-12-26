import { Settings } from "lucide-react";

const PrivacySection = () => {
    return (
        <section className="text-white px-6 md:px-15 py-16 mt-40">
            {/* Hero */}
            <div className="w-full">
                <h1 className="text-4xl md:text-6xl leading-tight">
                    Your privacy <br /> while using Warp
                </h1>

                <p className="mt-6 text-[18px] text-gray-400 max-w-3xl leading-relaxed">
                    At Warp, we’re building a completely new way to use the command line.
                    Warp is an intelligent terminal that uses cloud-based LLMs to help
                    developers, and also has a built-in suite of collaboration primitives.
                    Because Warp works differently from classic terminal tools, we would
                    like to share how we protect your privacy as you’re using the app.
                </p>

                {/* Highlights */}
                <div className="w-full flex justify-between mt-12">
                    <div className="max-w-xl">
                        <Settings className="text-[18px] bg-gray-400 p-0.5 rounded-md mb-2.5" />
                        <p className="text-[18px] text-white mb-2">Warp’s telemetry is optional, and you can opt out at any time.</p>
                        <p className="text-[18px] text-gray-400 leading-relaxed">
                            We may collect certain console interactions to improve Warp’s AI
                            capabilities. You can opt out of this telemetry at anytime and
                            still continue using all of Warp, including our AI features. Visit
                            telemetry settings under Settings Privacy.
                        </p>
                    </div>
                    <div className="max-w-xl">
                        <Settings className="text-[18px] bg-gray-400 p-0.5 rounded-md mb-2.5" />
                        <p className="text-[18px] text-white mb-2">You have full control.</p>
                        <p className="text-[18px] text-gray-400 leading-relaxed">
                            You can read the list of high-level You can
                            read the list of{" "}
                            <a href="#" className="text-white">
                                high-level telemetry events
                            </a>{" "}
                            that get sent for app analytics and monitor telemetry in real-time
                            with our native{" "}
                            <a href="#" className="text-white">
                                Network Log
                            </a>
                            . Visit our{" "}
                            <a href="#" className="text-white">
                                Privacy docs
                            </a>{" "}
                            for more info.
                        </p>
                    </div>
                </div>
            </div>

            {/* Philosophy */}
            <div className="text-center mt-24 max-w-4xl mx-auto">
                <h2 className="text-[32px] md:text-[40px] font-medium">
                    Our philosophy is full transparency and control of any data leaving
                    your machine.
                </h2>
                <p className="mt-4 text-[16px] text-gray-400">
                    This page outlines details you need to know in human-readable
                    language. We encourage you to visit our{" "}
                    <a href="#" className="text-white">
                        Privacy docs
                    </a>{" "}
                    for more info. There is also a more formal "legalese" version of
                    Warp's{" "}
                    <a href="#" className="text-white">
                        privacy policy available
                    </a>
                    .
                </p>
            </div>

            {/* How Warp Works */}
            <div className="max-w-4xl mx-auto mt-24">
                <h3 className="text-3xl font-semibold mb-4">How Warp Works</h3>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                    Warp is a fully-native local application that can run without an
                    internet connection. The core features of the terminal will always
                    work offline. You have total, explicit, and granular control over any
                    information that is sent to Warp AI.
                </p>
            </div>

            {/* Cloud-based Features */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-3xl font-semibold mb-4">Cloud-based Features</h3>
                <p className="text-[16px] text-gray-400 mb-2.5">Warp includes cloud-based features that power cool things like:</p>
                <ul className="text-[16px] text-gray-400 space-y-2 list-disc list-inside">
                    <li>Warp AI</li>
                    <li>Warp Drive</li>
                    <li>Session Sharing</li>
                    <li>Block Sharing</li>
                </ul>
                <p className="mt-2.5 text-[16px] text-gray-400 leading-relaxed">
                    If you choose to use Warp Drive or block sharing and save an item,
                    that item will be sent to Warp’s servers and stored securely in Warp’s
                    database. Data is encrypted at rest, and you can delete this data
                    anytime.
                </p>
            </div>

            {/* Warp AI */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-3xl font-semibold mb-4">Warp AI</h3>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                    Warp AI includes features like AI Command Suggestions, AI autofill in
                    Warp Drive, and Agent Mode. Visit our{" "}
                    <a href="#" className="text-white">
                        Warp AI docs
                    </a>{" "}
                    for the latest info.
                </p>

                <p className="text-[16px] text-gray-400 leading-relaxed">
                    Please note that certain features, such as Prompt Suggestions and Next
                    Command, are powered by large language models (LLMs) running in the
                    background. To function, they may send segments of your terminal
                    output to AI services. If you prefer not to share this information,
                    you can disable these features at any time by navigating to Settings
                    AI. When using other features, like Agent Mode, Warp AI will read the
                    command outputs for any command you authorize it to run during the
                    session as it gathers information in pursuit of completing a task.
                </p>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                    We may collect console interactions in order to improve our AI
                    features; you can opt out of this telemetry at any time under Settings
                    Privacy.
                </p>
                <a href="#" className="text-white">
                    Read more about how our AI features work.
                </a>
            </div>

            {/* Telemetry */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-3xl font-semibold mb-4">Telemetry (Opt-out)</h3>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                    Visit{" "}
                    <a href="#" className="text-white">
                        What telemetry does Warp collect and why
                    </a>
                    ? for detailed information on our telemetry. Opting out of this
                    telemetry does not mean you lose access to any AI features. You can
                    opt out at any time and still continue to use Warp to its fullest.
                    We've taken several precautions to ensure that, if you've opted out,
                    there will be no accidental collection of data. A Zero Data Retention
                    policy is available on Warp's{" "}
                    <a href="#" className="text-white">
                        Enterprise
                    </a>{" "}
                    plan.
                </p>
            </div>

            {/* Login */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-3xl font-semibold mb-2.5">Login (Optional)</h3>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                    Unlike classic terminals, you can login to Warp. This is more in line
                    with what you might expect from cloud-based apps like Figma or GitHub.
                </p>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                    While you are able to use Warp without logging in, the best experience
                    comes from being signed-in. Your unique login:
                </p>
                <ul className="mt-2.5 text-[16px] text-gray-400 list-disc list-inside space-y-2">
                    <li>Ensures your personal workflows are available any time you use Warp, on any machine</li>
                    <li>Makes it easier for Warp to provide support, should you ever have an issue specific to your account</li>
                    <li>Identity allows you to sync your personalized configurations from device-to-device.</li>
                </ul>
                <p className="mt-2.5 text-[16px] text-gray-400 leading-relaxed">
                    We understand that logging in is a big ask. It’s our goal to make your
                    experience with Warp so exceptional that the login feels like a
                    benefit instead of a hindrance. Learn more about Warp's{" "}
                    <a href="#" className="text-white">
                        position on login on our blog
                    </a>
                    .
                </p>
            </div>

            {/* Business Model */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-3xl font-semibold mb-4">Warp’s Business Model</h3>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                    Warp’s business plan is built around billing power users and business
                    teams for cloud-based features.{" "}
                    <a href="#" className="text-white">

                        Check out our pricing page to learn more
                    </a>
                    . Please note Warp’s business model is not about collecting or
                    monetizing any of your data.
                </p>
            </div>

            {/* Open Source */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-3xl font-semibold mb-4">Open Source</h3>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                    Several of Warp’s extension points, like{" "}
                    <a href="#" className="text-white">
                        themes
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-white">
                        workflows
                    </a>
                    , are open-sourced today. We would love it if you checked out the
                    Github repos and contributed to our growing community! In the future,
                    we plan to open-source the Rust client code and related projects, like
                    our UI framework. Among{" "}
                    <a href="#" className="text-white">
                        other benefits
                    </a>{" "}
                    to the community, open-sourcing will enable folks to audit our code
                    for privacy and security bugs. Learn more about{" "}
                    <a href="#" className="text-white">
                        Warp's position on open source
                    </a>{" "}
                    on our blog.
                </p>
            </div>

            {/* Contact */}
            <div className="max-w-4xl mx-auto mt-16">
                <h3 className="text-3xl font-semibold mb-4">
                    Contact Warp’s Privacy Team
                </h3>
                <p className="text-[16px] text-gray-400 leading-relaxed">
                    For more information about Warp's privacy policies, please view our{" "}
                    <a href="#" className="text-white">complete policy notice</a> and our <a href="#" className="text-white">terms of service</a> or visit our <a href="#" className="underline text-white">Trust
                        Center</a>. If you have questions about privacy or Zero Data Retention
                    (ZDR), contact us at: <a href="#" className="text-white">privacy@warp.dev</a>.
                </p>
            </div>
        </section>
    );
};

export default PrivacySection;