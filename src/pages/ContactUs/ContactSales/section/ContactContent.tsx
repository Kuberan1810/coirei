
const ContactContent = () => {
  return (
      <section className='py-10 mx-15'>
          
          <div>
              <div>
                  <h2 className='text-white text-6xl leading-17 mb-8'>
                      Why teams choose  <br />
                      <span className='text-[#FC7C04] '>Coirei</span>
                  </h2>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 '>
                  <div>
                      <h4 className='text-2xl text-white/80 mb-4'>Execution at scale</h4>
                      <p className='text-lg text-white/60 leading-7'>Coirei unifies planning, development, validation, and deployment into a single execution system, reducing handoffs and operational overhead.</p>
                  </div>
                  <div>
                      <h4 className='text-2xl text-white/80 mb-4 '>Built for real workflows</h4>
                      <p className='text-lg text-white/60 leading-7'>From cloud-native development to background CI/CD and human-governed AI, Coirei supports how modern teams actually ship software.</p>
                  </div>
                  <div>
                      <h4 className='text-2xl text-white/80 mb-4'>Enterprise-ready by design</h4>
                      <p className='text-lg text-white/60 leading-7'>Clear ownership, role-based access, audit trails, and governance are built into every layer of the platform.</p>
                  </div>
              </div>
          </div>

   </section>
  )
}

export default ContactContent