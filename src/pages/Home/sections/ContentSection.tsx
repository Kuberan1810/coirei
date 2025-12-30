import React from 'react'

const ContentSection = () => {
    return (
        <>
            <section className='mx-35 py-20'>
                <div className='flex justify-between items-center '>
                    <div>
                        <h2 className='text-6xl text-[#E3E3E0] max-w-110'>Your execution data stays yours. Always.</h2>
                    </div>
                    <div className=''>
                        <p className='text-2xl text-white max-w-152 mb-10 font-medium'>Agents operate only within permissions you define.</p>
                        <p className='text-2xl text-white max-w-152 mb-7.5 font-medium'>No training on your data. Ever. Control over analytics and telemetry. BYO-LLM and zero-data-retention modes available for enterprise.</p>
                        <button className='text-lg p-2.5 text-[#FFF9F9] bg-[#292929] rounded font-medium mb-5'>Learn more about data and privacy</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContentSection