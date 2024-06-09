import SvgComponent1 from "./SvgComponent1";
import Advantage_Phone from '/images/Advantages_Phone.png';
import mobile_strap from '/images/mobile_strap.png';
const Advantages = () => {
    return (
        <>
            <div className='flex lg:mt-11 justify-center flex-col lg:flex-row lg:mx-20 lg:px-14 py-10'>
                <div className='w-full lg:w-1/2 p-10 lg:mt-10 '>
                    <div>
                        <p className='uppercase text-red-400 font-semibold text-xl tracking-widest'>Advantages</p>
                        <h1 className='text-4xl capitalize font-extrabold'>Why Choose Uifry?</h1>

                        {/* Point */}
                        <div className="mt-10">
                            <div className="flex">
                                <div className="bg-red-500 p-2 rounded-full">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 21.488H10M18 8.48804C18 6.89674 17.3679 5.37061 16.2427 4.2454C15.1174 3.12018 13.5913 2.48804 12 2.48804C10.4087 2.48804 8.8826 3.12018 7.75738 4.2454C6.63216 5.37061 6.00002 6.89674 6.00002 8.48804C6.00002 11.5782 5.22049 13.694 4.34968 15.0934C3.61515 16.2739 3.24788 16.8641 3.26134 17.0288C3.27626 17.2111 3.31488 17.2806 3.46179 17.3896C3.59448 17.488 4.19261 17.488 5.38887 17.488H18.6112C19.8074 17.488 20.4056 17.488 20.5382 17.3896C20.6852 17.2806 20.7238 17.2111 20.7387 17.0288C20.7522 16.8641 20.3849 16.2739 19.6504 15.0935C18.7795 13.694 18 11.5782 18 8.48804Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <h2 className="my-auto font-bold text-2xl ms-4">Clever Notifications</h2>
                            </div>
                            <p className="mt-6 text-gray-500 capitalize text-lg font-semibold">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                        </div>

                    </div>
                </div>
                <div className='w-full justify-center lg:w-1/2 flex lg:justify-end'>
                    <div className='hidden lg:block relative -right-[550px] top-20 z-0'>
                        <SvgComponent1 />
                    </div>
                    <img className='z-10' src={Advantage_Phone} alt="features" />
                    <img className=" z-20 absolute mt-32 ms-20 lg:mt-56 lg:me-10" src={mobile_strap} alt="features" />
                </div>
            </div>
        </>
    )
}

export default Advantages