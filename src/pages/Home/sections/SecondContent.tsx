import React from 'react'

const SecondContent = () => {
  return (
      <>
          <section className='mx-35 py-20'>
              
              <div className='flex flex-col gap-15 '>
                  <div>
                      <h2 className='text-6xl text-white max-w-4xl'><span className='text-[#FF8800]'> Private and Secure </span> <br /> Transparency and control at every touchpoint.</h2>
                  </div> 
                  <div className='flex gap-7.5'>
                      <div> 
                          <h3 className='text-[32px] text-white mb-2.5'>Complete Control</h3>
                          <p className='max-w-md font-normal text-xl text-white'>Control exactly how much autonomy agents have, from approving every step to allowing full autonomy. Configurable at the individual and enterprise level.</p>
                      </div>
                      <div>
                          <h3 className='text-[32px] text-white mb-2.5  ' >Your data, secure and private</h3>
                          <p className='max-w-md font-normal text-xl text-white'>Your code, workflows, and execution history are never used to train external models. You control Data retention, Analytics and telemetry (one-click disable), Model access and routing</p>
                      </div>
                      
                  </div>
              </div>
          </section>

      </>
  )
}

export default SecondContent