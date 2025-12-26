import React from 'react'

const ContactList = () => {
  return (

    <>
      <section className='pt-50 pb-20 mx-15'>

        <div className='flex justify-between flex-wrap ' >
          <div>
            <h2 className='text-5xl text-white/80 mb-2'>Contact Sales</h2>
            <p className='text-lg text-white/70 max-w-2xl mb-3'>We’re always here to help you build better software. Let us know what kind of question you have and we’ll route to you the right place.</p>
            <p className='text-lg text-white/70 max-w-2xl mb-3'>If you’re looking for detailed documentation regarding a specific feature, check out our docs.</p>
          </div>
          <div >

            <div className='pb-8'>
              <p className='text-white/80 text-2xl'>How can we help?</p>
            </div>
            <div className='flex flex-col gap-5'>
              <div className="group bg-[#1e1e1e] p-8 rounded-lg space-y-3 
                hover:bg-[#29292950] cursor-pointer transition-all duration-300">

                <h4 className="text-2xl text-white/80 
                 transition-all duration-300
                 group-hover:text-white/50">
                  Request a Demo
                </h4>

                <p className="text-lg text-white/70 max-w-md
                transition-all duration-300
                group-hover:text-white/40">
                  Talk with our team and see Warp in action for your use case.
                </p>

              </div>
              <div className="group bg-[#1e1e1e] p-8 rounded-lg space-y-3 
                hover:bg-[#29292950] cursor-pointer transition-all duration-300">

                <h4 className="text-2xl text-white/80 
                 transition-all duration-300
                 group-hover:text-white/50">
                 Upgrade my plan
                </h4>

                <p className="text-lg text-white/70 max-w-md
                transition-all duration-300
                group-hover:text-white/40">
                  Connect with Sales to explore advanced plans and team features.
                </p>


              </div>
              <div className="group bg-[#1e1e1e] p-8 rounded-lg space-y-3 
                hover:bg-[#29292950] cursor-pointer transition-all duration-300">

                <h4 className="text-2xl text-white/80 
                 transition-all duration-300
                 group-hover:text-white/50">
                 Help with Billing
                </h4>

                <p className="text-lg text-white/70 max-w-md
                transition-all duration-300
                group-hover:text-white/40">
                  Get support with invoices, payments, or subscription updates.
                </p>

              </div>
              <div className="group bg-[#1e1e1e] p-8 rounded-lg space-y-3 
                hover:bg-[#29292950] cursor-pointer transition-all duration-300">

                <h4 className="text-2xl text-white/80 
                 transition-all duration-300
                 group-hover:text-white/50">
                  Report a bug
                </h4>

                <p className="text-lg text-white/70 max-w-md
                transition-all duration-300
                group-hover:text-white/40">
                  Found a bug? File a GitHub issue and the Warp team will review it right away.
                </p>

              </div>
              <div >
                <h4  className='text-white/80 text-2xl mb-2.5'>Other questions:</h4>
                <div className='flex gap-6'>
                  <a href="#" className='text-white/60 text-lg underline hover:text-white/80 cursor-pointer transition-all duration-300'>Technical Issue</a>
                  <a href="#" className='text-white/60 text-lg underline  hover:text-white/80 cursor-pointer transition-all duration-300'>Questions about privacy</a>
                  <a href="#" className='text-white/60 text-lg underline  hover:text-white/80 cursor-pointer transition-all duration-300'>Security concerns</a>
                </div>

                

              </div>
           </div>
            
          </div>

        </div>
      </section>
    </>
  )
}

export default ContactList