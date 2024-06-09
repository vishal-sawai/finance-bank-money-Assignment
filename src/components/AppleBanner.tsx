import banner from '/images/banner.png';
import SvgComponent1 from './SvgComponent1';
const AppleBanner = () => {
    return (
        <>
            <div className='flex justify-center items-center mx-10 lg:mt-20 lg:mx-40'>
                <div className='hidden lg:block absolute -ms-96 mt-40 lg:-ms-[1200px] lg:-mt-[500px]'>
                    <SvgComponent1 />
                </div>
                <img className='w-full z-10' src={banner} alt="banner" />
            </div>
        </>
    )
}

export default AppleBanner