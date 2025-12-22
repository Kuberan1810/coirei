
import Ceo from '../../../assets/images/homepage/Ceo-img.png'
export const CeoSection = () => {
    return (
        <>
            <section className='mx-35 py-20'>

                <div className=''>
                    <div className='mb-10'> 
                        <span className='text-2xl text-white py-2.5 px-10  bg-[#7B7B7B]/10 backdrop-blur-3xl  border border-white/20  w-full shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full '>What our CEO said</span>
                    </div>
                    <div className='flex gap-10 leading-none items-end '>
                        <div>
                            <img src={Ceo} alt="" />
                        </div>
                        <div>
                            <p className='text-[36px] font-normal text-[#E3E3E0] max-w-264'>“Instant access to the latest models from OpenAI, Anthropic, and Google. Our mixed-model approach outperforms single-model setups, keeping you working with the best model on the market.”</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
