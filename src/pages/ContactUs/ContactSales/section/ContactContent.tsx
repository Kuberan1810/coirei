import React from 'react'

const ContactContent = () => {
  return (
      <section className='py-10 mx-15'>
          
          <div>
              <div>
                  <h2 className='text-white text-6xl leading-17 mb-8'>
                      <span className='text-[#FC7C04]'>The power of Warp</span> <br />
                      From prompt to production
                  </h2>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 '>
                  <div>
                      <h4 className='text-2xl text-white/80 mb-4'>Top-rated Agent</h4>
                      <p className='text-lg text-white/60 leading-7'>Warp outperforms Claude Code and Cursor in overall coding performance. Warp runs on the best models from OpenAI, Anthropic, and Google. Our mixed-model approach outperforms single-model approaches.</p>
                  </div>
                  <div>
                      <h4 className='text-2xl text-white/80 mb-4 '>Full software lifecycle, from one app</h4>
                      <p className='text-lg text-white/60 leading-7'>Warp is built at the terminal level, meaning it can write code, respond to system events, and even deploy to prod.</p>
                  </div>
                  <div>
                      <h4 className='text-2xl text-white/80 mb-4'>Top-rated Agent</h4>
                      <p className='text-lg text-white/60 leading-7'>Warp is used by over 700,000 developers and over 56% of the Fortune 500 engineering teams. Developers save an average of 5 hours a week using Warp.</p>
                  </div>
              </div>
          </div>

   </section>
  )
}

export default ContactContent