import React from 'react'

const ContentSection = () => {
    return (
        <>
            <section className='mx-35 py-20'>
                <div className='flex justify-between items-center '>
                    <div>
                        <h2 className='text-6xl text-[#E3E3E0] max-w-110'> Your Data stays between you and the AI </h2>
                    </div>
                    <div className=''>
                        <p className='text-2xl text-white max-w-152 mb-10'>No training on your data by external model providers. Control over </p>
                        <p className='text-2xl text-white max-w-152 mb-7.5'>No training on your data by external model providers. Control over analytics and telemetry one click disable. ZDR and BYO LLM available on enterprise plans.</p>
                        <button className='text-lg p-2.5 text-[#FFF9F9] bg-[#292929] rounded font-medium mb-5'>Learn more about data and privacy</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContentSection