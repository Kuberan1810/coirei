import React from "react";
import { Play } from "lucide-react";

const videos = [
  { id: 1, title: "Coirei VS ZIRA", thumbnail: "/videos/v1.jpg" },
  { id: 2, title: "Coirei VS ZIRA", thumbnail: "/videos/v2.jpg" },
  { id: 3, title: "Coirei VS ZIRA", thumbnail: "/videos/v3.jpg" },
  { id: 4, title: "Coirei VS ZIRA", thumbnail: "/videos/v4.jpg" },
  { id: 5, title: "Coirei VS ZIRA", thumbnail: "/videos/v5.jpg" },
  { id: 6, title: "Coirei VS ZIRA", thumbnail: "/videos/v6.jpg" },
];

const VideoSection: React.FC = () => {
  const onPlay = (video: {
    id: number;
    title: string;
    thumbnail: string;
  }) => {
    alert(`Play Video: ${video.title}`);
  };

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-14">
          <p className="text-gray-200 mb-4 tracking-wide">
            Coirei UNIVERSITY
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Become a Coirei power user
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto">
            Tutorials to help you work smarter and build faster in Coirei
          </p>
        </div>

        {/* GETTING STARTED */}
        <div className="bg-[#2b2b2b] rounded-2xl p-8 md:p-10">

          {/* HEADER */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-1">
              Getting started
            </h2>
            <p className="text-gray-300 text-sm">
              Everything you need to get up and running with Coirei’s AI-powered coding environment
            </p>
          </div>

          {/* VIDEO ROW */}
          <div
            className="
              flex gap-6 overflow-x-auto pb-4
              scroll-smooth
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:'none']
              [scrollbar-width:'none']
            "
          >
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => onPlay(video)}
                className="
                  group min-w-[320px] h-45
                  relative rounded-xl overflow-hidden
                  cursor-pointer bg-black
                "
              >
                {/* THUMBNAIL */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105"
                />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                      w-14 h-14 rounded-full
                      bg-black/70 flex items-center justify-center
                      transition-all duration-300
                      group-hover:bg-black/90
                    "
                  >
                    <Play size={22} />
                  </div>
                </div>

                {/* TITLE */}
                <div className="absolute bottom-3 left-3 text-sm font-semibold">
                  {video.title}
                </div>
              </div>
            ))}
          </div>

          {/* VIEW ALL */}
          <div className="flex justify-end mt-4">
            <button className="font-medium text-gray-200 hover:text-white flex items-center gap-1">
              View all 9 Videos →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;
