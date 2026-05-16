import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "How do you deliver your AI services?",
        answer: "We provide customized AI solutions tailored to your business needs, delivered via a secure cloud platform or on-premises integration."
    },
    {
        question: "Is my data secure with Coirei?",
        answer: "Yes, we prioritize data privacy and security. Our systems are built with industry-standard encryption and we comply with major security protocols."
    },
    {
        question: "Can I integrate Coirei with my existing tools?",
        answer: "Absolutely. Our AI solutions are designed to be flexible and can integrate with most modern software stacks and APIs without complex coding."
    }
];

const FAQSection = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <section className="mx-6 sm:mx-10 md:mx-15 pt-12 md:pt-16 pb-20 md:pb-6 ">
          
            <div className="flex md:flex-row flex-col gap-10 jusify-between">

                {/* LEFT SIDE */}
                <div className="flex-1">
                    <span className="inline-flex items-center justify-center px-6 h-[52px] rounded-full border border-white/10 text-white text-lg bg-white/[0.02] backdrop-blur-xl mb-10">
                        Contact Us
                    </span>

                    <h2 className="text-4xl md:text-5xl leading-tight tracking-tight">
                        <span className="text-[#FF6B00] block">
                            Reach out For Ai experts
                        </span>

                        <span className="text-white block">
                            for your queries.
                        </span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className=" flex flex-col gap-4 flex-1">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            data-ns-animate
                            data-delay={0.1 * index}
                            className={`group border rounded-2xl transition-all duration-300 ${openFaq === index ? 'border-white/20 bg-white/5 shadow-[0_0_30px_rgba(246,115,0,0.05)]' : 'border-white/10 bg-transparent hover:border-white/20'
                                }`}
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 sm:p-8 text-left cursor-pointer"
                            >
                                <span className="text-[18px] sm:text-[22px] font-medium pr-8 transition-colors duration-300 text-white">
                                    {faq.question}
                                </span>

                                <ChevronDown className="text-white/70 shrink-0" />

                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="p-8 pt-0 flex gap-4 border-t border-white/5">

                                    <div className="text-[#B5B4B2] text-[16px] sm:text-[18px] font-light leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
