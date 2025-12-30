
import  signature  from "../../../assets/images/services/signature2.png"
import groupImage from "../../../assets/images/services/group_images.png"

const ServiceAbout = () => {
  return (
    <section className='bg-[#1C1B1B] h-[600px] flex items-center'>
      <div className="flex pl-20">
          
          {/* Image Collage */}
          <div className="relative w-[350px] h-[400px] mr-20">
            {/* Orange Shape */}
            <img src={groupImage} alt="" className='object-cover w-[350px] h-[400px]'/>
          </div>

          {/* Text Content */}
          <div className='h-[416px]'>
            <span className="text-2xl text-white">About Us</span>

            <h2 className="mt-4 text-6xl leading-tight text-white">
              Transforming{" "}
              <span className="text-[#FF6A00]">Ideas.</span>
              <br />
              
              <p className="text-[#FF6A00]">
                into Digital Reality
              </p>
            </h2>

            <p className="mt-4 text-[#FFFAFA] text-sm w-[290px]">
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