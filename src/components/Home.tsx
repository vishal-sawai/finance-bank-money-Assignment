import design from '/images/design.png';
import iphone from '/images/iPhone-1.png';
import iphone2 from '/images/iPhone-2.png';
import tagline from '/images/tagline.png';
import SvgComponent1 from './SvgComponent1';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { IoPlayCircleOutline } from "react-icons/io5";



const Home = () => {
    return (
        <>
            {/* Image Group */}
            <div className='flex flex-col lg:flex-row'>
                <div className='mx-10 lg:mx-44'>
                    {/* Title */}
                    <div className='hidden absolute z-0 -top-5 left-72 opacity-75'>
                        <SvgComponent1 />
                    </div>
                    <div className='font-extrabold text-center mt-14 z-10'>
                        <h1 className='text-start font-bold text-5xl lg:text-[80px] capitalize'>make the best <br />financial decisions</h1>
                    </div>

                    {/* Description */}
                    <div className='text-lg text-center mt-5 lg:mt-10'>
                        <p className='text-start text-gray-500 font-medium'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus <br className='hidden lg:block' /> tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    </div>

                    {/* Buttons */}
                    <div className='flex justify-center mt-5 float-start'>
                        <div className='flex bg-black text-white rounded px-2 lg:px-8 py-4 mr-4 lg:mr-8 text-sm lg:text-lg'>
                            <div className='my-auto'>Get Started </div>
                            <LiaLongArrowAltRightSolid className='my-auto mx-2 text-2xl' />
                        </div>

                        <div className='flex bg-white text-black rounded px-2 lg:px-4 py-4 text-sm lg:text-xl font-semibold'>
                            <IoPlayCircleOutline className='my-auto me-2 text-4xl' />
                            <div className='my-auto'>watch video</div>
                        </div>
                    </div>

                    {/* Tagline Image */}
                    <div className='justify-start mt-20'>
                        <div className='w-11/12'>
                            <img src={tagline} alt="design" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row  h-[900px] lg:h-full'>
                    <div className='z-30 relative top-10 -right-10 lg:absolute lg:right-72 lg:top-28'>
                        <img src={iphone2} alt="iphone2" />
                    </div>
                    <div className='z-20 relative -top-96 right-4 lg:absolute lg:right-40 lg:top-48 '>
                        <img src={iphone} alt="iphone" />
                    </div>
                    <div className='z-10 relative -top-[780px] right-10 lg:absolute lg:right-10 lg:top-64'>
                        <img src={iphone2} alt="design" />
                    </div>
                    <div className='hidden lg:block w-5/6 border-yellow-900 relative -top-[1180px] -right-28 lg:absolute lg:top-28 lg:right-10'>
                        <img src={design} alt="design" className='z-0 scale-y-[-1] rotate-180 lg:rotate-90  float-end' />
                    </div>
                    <div className='hidden absolute z-0 top-96 right-20'>
                        <SvgComponent1 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

