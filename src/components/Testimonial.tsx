import SvgComponent1 from "./SvgComponent1";
import TestimonialImg from "/images/Testimonial.png";
import p1 from "/images/Testimonial/p1.png";
import p2 from "/images/Testimonial/p2.png";
import p3 from "/images/Testimonial/p3.png";
import p4 from "/images/Testimonial/p4.png";
import p5 from "/images/Testimonial/p5.png";

const Testimonial = () => {
    return (
        <>

            <div>
                <div className="text-center">
                    <h3 className="uppercase text-xl tracking-widest">Testimonial</h3>
                    <h1 className="capitalize font-extrabold text-4xl mt-1 tracking-widest"> what our users <br />say about us?</h1>
                </div>
                <div className='flex justify-center flex-col lg:flex-row lg:mx-20 lg:px-14 py-5'>
                    <div className='w-full justify-center lg:w-1/2 flex lg:justify-end'>
                        <div className='hidden lg:block relative -right-[550px] top-20 z-0'>
                            <SvgComponent1 />
                        </div>
                        <img className='z-10' src={TestimonialImg} alt="Testimonial" />
                    </div>
                    <div className='w-full lg:w-1/2 px-10 my-auto'>
                        <div>
                            {/* Point */}
                            <div className="flex">
                                <h2 className="my-auto font-bold text-2xl capitalize">the best financial accounting <br />app ever!</h2>
                            </div>
                            <p className="mt-3 text-gray-500 capitalize text-xl font-semibold">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>

                            {/* Person */}
                            <div className="flex mt-5">
                                <img src={p1} alt="person" className="w-12 h-12 rounded-full" />
                                <img src={p2} alt="person" className="w-8 h-8 my-auto rounded-full ms-2 opacity-40" />
                                <img src={p3} alt="person" className="w-8 h-8 my-auto rounded-full ms-2 opacity-40" />
                                <img src={p4} alt="person" className="w-8 h-8 my-auto rounded-full ms-2 opacity-40" />
                                <img src={p5} alt="person" className="w-8 h-8 my-auto rounded-full ms-2 opacity-40" />
                            </div>
                            <h3 className="font-bold text-lg mt-5">Nick Jonas</h3>
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default Testimonial