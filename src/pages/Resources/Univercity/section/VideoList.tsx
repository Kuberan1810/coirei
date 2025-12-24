import { Section, Triangle } from "lucide-react";
import { useState } from "react";

const accordionItems = [
  "Coirei Code",
  "Developer workflow",
  "Using MCP",
  "Rules",
  "Prompts",
  "How coirei uses coirei",
];

const VideoList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (

    <section className=" mx-20">
      <div className="space-y-4">
        {accordionItems.map((title, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] rounded-xl p-10 cursor-pointer hover:bg-[#262626]"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-[40px] text-white font-medium pb-2">{title}</h3>
                <p className="text-[20px] text-gray-300">
                  Explore Features and use cases for coirei, told by the people who build them
                </p>
              </div>
              <span className="flex items-center gap-2 text-[24px] text-white">
                2 Videos
                <Triangle
                  fill="#fff"
                  size={18}
                  strokeWidth={2.5}
                  className={`
      transition-transform duration-300
      ${openIndex === index ? "rotate-0" : "rotate-180"}
    `}
                />
              </span>

            </div>

            {openIndex === index && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <iframe
                  className="w-full aspect-video rounded-xl border border-white/10"
                  src="https://www.youtube.com/embed/278IRQ6HSi4"
                  allowFullScreen
                />
                <iframe
                  className="w-full aspect-video rounded-xl border border-white/10"
                  src="https://www.youtube.com/embed/a3ICNMQW7Ok"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

export default VideoList;
