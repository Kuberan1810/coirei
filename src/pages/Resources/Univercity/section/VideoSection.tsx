import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* VIDEO DATA */
const allVideoImages = [
  {
    id: 1,
    title: "Coirei VS ZIRA",
    image: "https://media.istockphoto.com/id/692243858/photo/exoplanet-in-deep-space.jpg?s=612x612&w=0&k=20&c=KQ7B3RI8_D3qeD06RtE7IuEyiDHnLGDg-Hqp8Fe8PXU=",
    youtubeId: "aOuVTGG9Bik",
  },
  {
    id: 2,
    title: "Coirei VS ZIRA",
    image: "https://img.freepik.com/premium-photo/astronaut-outer-space-against-background-planet-astronaut-wearing-space-suit-with-full-rear-view-colorful-space-ai-generated_538213-2916.jpg",
    youtubeId: "tRaMUeBkJmU",
  },
  {
    id: 3,
    title: "Coirei VS ZIRA",
    image: "https://images.stockcake.com/public/9/b/5/9b5fcb58-2c91-4b6c-86c1-3ea0f48fc717_large/cosmic-space-galaxy-stockcake.jpg",
    youtubeId: "nGnX6GkrOgk",
  },
  {
    id: 4,
    title: "Coirei VS ZIRA",
    image: "https://www.fodors.com/wp-content/uploads/2025/09/0_HERO_Unknown_Unknown_Cosmic-CliffsCarina-Nebula_Space-dark-nebula_NASA_Unknown_NASA-ESA-CSA-STScI.jpg",
    youtubeId: "zkCKx3fpk4Q",
  },
  {
    id: 5,
    title: "Coirei VS ZIRA",
    image: "https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg",
    youtubeId: "Yla5i5tzXKE",
  },
  {
    id: 6,
    title: "Coirei VS ZIRA",
    image: "https://cdn.mos.cms.futurecdn.net/uVwrSjfVvkGwk9y6zNJMob.jpg",
    youtubeId: "egDIqKLt2L4",
  },
  {
    id: 7,
    title: "Coirei VS ZIRA",
    image: "https://images.stockcake.com/public/7/5/6/756238d4-9bbe-4f83-9c4a-ca8558d10d8e_large/earth-from-space-stockcake.jpg",
    youtubeId: "pSHVbLPWA28",
  },
  {
    id: 8,
    title: "Coirei VS ZIRA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOZnReFgaN0se99-jL8nMuIhiGAmUpXCsIg&s",
    youtubeId: "CrgYEbIQkac",
  },
  {
    id: 9,
    title: "Coirei VS ZIRA",
    image: "https://res.cloudinary.com/momentum-media-group-pty-ltd/image/upload/c_fill,q_auto:good,f_auto,e_unsharp_mask:80,w_830,h_478/Space%20Connect%2Fspace-exploration-sc_fm1ysf",
    youtubeId: "EdfQQGSoNXU",
  },
];

const VideoSection = () => {
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <>
      <section className="mx-20 ">

        <div className="bg-[#292929] rounded-2xl p-10 mb-14 border border-white/10">
          <h2 className="text-[40px] font-medium mb-2 text-white">Getting started</h2>
          <p className="text-[20px] text-[#C1C1C1] mb-6">
            Everything you need to get up and running with Coirei’s AI-powered coding environment
          </p>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
          >
            {allVideoImages.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item.youtubeId)}
                className="min-w-112.5 h-60 bg-black rounded-xl overflow-hidden relative cursor-pointer"
              >
                <img src={item.image} className="w-full h-full object-cove opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div className="bg-[#B9B9B9] p-3 rounded-full">
                    <Play size={28} strokeWidth={2} fill="#1a1a1a" className="text-[#1a1a1a]"/>
                  </div>
                </div>
                <div className="absolute bottom-2 right-10 text-[30px] text-white">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          <div
            onClick={() => setShowAllVideos(!showAllVideos)}
            className="flex justify-end mt-5  cursor-pointer text-white text-xl" >
            {showAllVideos ? "Hide all Videos ↑" : "View all 9 Videos →"}
          </div>

          {showAllVideos && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allVideoImages.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveVideo(item.youtubeId)}
                  className="h-60 bg-black rounded-xl overflow-hidden relative cursor-pointer"
                >
                  <img src={item.image} className="w-full h-full object-cover opacity-70" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#B9B9B9] p-3 rounded-full">
                      <Play size={28} strokeWidth={2} fill="#1a1a1a" className="text-[#1a1a1a]" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* MODAL */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative w-[80%] h-[80%] bg-black rounded-xl overflow-hidden">

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActiveVideo(null)}
                className="
          absolute top-4 right-4 z-50
          w-10 h-10
          flex items-center justify-center
          rounded-full
          bg-black/70 backdrop-blur
          text-white text-xl
          hover:bg-black
          transition
        "
                aria-label="Close video"
              >
                ✕
              </button>

              {/* IFRAME */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                allowFullScreen
              />
            </div>
          </div>
        )}

      </section>
    </>
  );
};

export default VideoSection;
