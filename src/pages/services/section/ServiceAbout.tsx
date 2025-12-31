
import signature from "../../../assets/images/services/signature2.png"
import groupImage from "../../../assets/images/services/group_images.png"

const ServiceAbout = () => {
  return (
    <section className='bg-[#1C1B1B] py-20 flex items-center'>
      <div className="flex pl-20">

        {/* Image Collage */}
        <div className="relative w-[350px] h-[400px] mr-20">
          {/* Orange Shape */}
          <img src={groupImage} alt="" className='object-cover w-[350px] h-[400px]' />
        </div>

        {/* Text Content */}
        <div className=''>
          <span className=" text-white text-[24px] mb-2 inline-flex items-center justify-center
          text-sm py-2 px-6 bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 w-fit shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full ">About Us</span>

          <h2 className="mt-4 text-[64px] leading-tight text-white">
            Transforming{" "}
            <span className="text-[#FF6A00]">Ideas.</span>
            <br />

            <p className="text-[#FF6A00]">
              into Digital Reality
            </p>
          </h2>

          <p className="mt-4 text-[#FFFAFA] text-xl w-100.5">
            Get assistance with invoices, subscriptions, plan
            changes, or account-related questions
          </p>

          {/* Signature */}
          <div className="mt-6">
            <img
              src={signature}
              alt="Signature"
              className="absolute text-white h-[130px] w-[130px] object-cover"
            />
          </div>
          <div className="relative mt-20">
            <p className=" text-white text-md mt-2">
              Naveenkumar S
              <br />
              <span className="text-white text-sm">
                (CEO & Founder)
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceAbout