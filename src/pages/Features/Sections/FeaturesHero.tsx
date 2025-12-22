const FeaturesHero = () => {
  return (
    <section className="mb-25 mt-50">
      <div className="herocontainer main-container">
        <div className="top-content ">
          <h1 className="text-[#E3E3E0] text-6xl font-medium w-117.5 mb-5">
            Our latest articles in your inbox
          </h1>
          <p className="text-[#B5B4B2] text-xl w-2xl mb-7.5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br /> Animi non similique distinctio.
          </p>
        </div>
        <div className="mail-content mt-20">
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-5 text-[#E3E3E0] border border-white/20"
          />
          <button className="backdrop-blur-md border border-white/20 p-2 max-w-fit text-base text-[#959493] h-[65.6px]">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;