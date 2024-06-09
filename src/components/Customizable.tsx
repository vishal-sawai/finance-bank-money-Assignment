import SvgComponent1 from "./SvgComponent1";
import customizePhone from "/images/cutomize_phone.png";
import visa from "/images/visa_card.png";
import { PiStarFourBold } from "react-icons/pi";
const Customizable = () => {
    return (
        <>
            <div className='flex justify-center flex-col lg:flex-row lg:mx-20 lg:px-14 py-10'>
                <div className='w-full justify-center lg:w-1/2 flex lg:justify-end'>
                    <div className='hidden lg:block relative -right-[550px] top-20 z-0'>
                        <SvgComponent1 />
                    </div>
                    <img className='z-10' src={customizePhone} alt="features" />
                    <img className=" z-20 absolute mt-28 ms-5 lg:mt-48 lg:me-36" src={visa} alt="features" />
                </div>
                <div className='w-full lg:w-1/2 px-10 my-auto'>
                    <div>
                        {/* Point */}
                        <div className="flex">
                            <div className="bg-red-500 text-white p-3 text-2xl rounded-full">
                                <PiStarFourBold />
                            </div>
                            <h2 className="my-auto font-bold text-2xl ms-4">Fully Customizable</h2>
                        </div>
                        <p className="mt-6 text-gray-500 capitalize text-lg font-semibold">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Customizable