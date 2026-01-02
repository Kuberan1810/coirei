
import Banner from "../../../assets/images/contact/cta-banner.png"
const CTABanner = () => {
  return (
    <section className='mx-15 py-20'>
      <div className='relative'>
        <img src={Banner} alt="CTA banner" className='w-full rounded-2xl '/>
        <div className='absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 text-center w-[80%] '>
          <h2 className='text-[48px] text-white/60 mb-4'>Download Coirei</h2>
          <p className='text-6xl text-white '>The Execution Platform for Agent-Assisted Development</p>
        </div>
      </div>

   </section>
  )
}

export default CTABanner