import logo from '/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div>
                <div className="flex flex-col lg:flex-row flex-wrap mt-10 lg:mt-20 lg:mx-20 px-5 lg:px-20 justify-center">
                    <div className='mx-auto w-full lg:w-auto justify-start px-2 mt-3'>
                        <img src={logo} alt="logo" height="50" width="150" />
                        <div className='flex my-auto mt-5'>
                            <svg className='my-auto ms-2 me-2' width="25" height="25" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9394 0.708984C16.2804 0.708984 17.5704 1.23898 18.5194 2.18998C19.4694 3.13898 20.0004 4.41898 20.0004 5.75898V13.659C20.0004 16.449 17.7304 18.709 14.9394 18.709H5.06043C2.26943 18.709 0.000427246 16.449 0.000427246 13.659V5.75898C0.000427246 2.96898 2.25943 0.708984 5.06043 0.708984H14.9394ZM16.0704 5.90898C15.8604 5.89798 15.6604 5.96898 15.5094 6.10898L11.0004 9.70898C10.4204 10.19 9.58943 10.19 9.00043 9.70898L4.50043 6.10898C4.18943 5.87898 3.75943 5.90898 3.50043 6.17898C3.23043 6.44898 3.20043 6.87898 3.42943 7.17898L3.56043 7.30898L8.11043 10.859C8.67043 11.299 9.34943 11.539 10.0604 11.539C10.7694 11.539 11.4604 11.299 12.0194 10.859L16.5304 7.24898L16.6104 7.16898C16.8494 6.87898 16.8494 6.45898 16.5994 6.16898C16.4604 6.01998 16.2694 5.92898 16.0704 5.90898Z" fill="#FF5555" />
                            </svg>
                            <p className='my-auto text-lg font-semibold tracking-widest'>Help@Frybix.com</p>
                        </div>
                        <div className='flex my-auto mt-3'>
                            <svg className='my-auto ms-2 me-2' width="25" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5317 13.1814C15.5208 17.1693 16.4258 12.5557 18.9656 15.0938C21.4143 17.5417 22.8216 18.0322 19.7192 21.1337C19.3306 21.446 16.8616 25.2032 8.1846 16.5287C-0.493478 7.85298 3.26158 5.38143 3.57397 4.99293C6.68387 1.88283 7.16586 3.29837 9.61449 5.74631C12.1544 8.28548 7.54266 9.1934 11.5317 13.1814Z" fill="#FF5555" />
                            </svg>

                            <p className='my-auto text-lg font-semibold tracking-widest'>+1234 456 678 89</p>
                        </div>
                    </div>
                    <div className='mx-auto w-full lg:w-auto justify-start px-2 mt-3'>
                        <h1 className='text-4xl font-bold tracking-widest'>Links</h1>
                        <div className='flex flex-col mt-4'>
                            <Link to='/' className='my-2 text-lg font-medium'>Home</Link>
                            <Link to='/about' className='my-2 text-lg font-medium'>About Us</Link>
                            <Link to='/booking' className='my-2 text-lg font-medium'>Bookings</Link>
                            <Link to='/blog' className='my-2 text-lg font-medium'>Blog</Link>
                        </div>
                    </div>
                    <div className='mx-auto w-full lg:w-auto justify-start px-2 mt-3'>
                        <h1 className='text-4xl font-bold tracking-widest'>Legal</h1>
                        <div className='flex flex-col mt-4'>
                            <Link to='/termsOfUse' className='my-2 text-lg font-medium'>Terms Of Use</Link>
                            <Link to='/privacy' className='my-2 text-lg font-medium'>Privacy Policy</Link>
                            <Link to='/Cookie' className='my-2 text-lg font-medium'>Cookie Policy</Link>
                        </div>
                    </div>
                    <div className='mx-auto w-full lg:w-auto justify-start px-2 mt-3'>
                        <h1 className='text-4xl font-bold tracking-widest'>Product</h1>
                        <div className='flex flex-col mt-4'>
                            <Link to='/tour' className='my-2 text-lg font-medium'>Take Tour</Link>
                            <Link to='/chart' className='my-2 text-lg font-medium'>Live Chart</Link>
                            <Link to='/review' className='my-2 text-lg font-medium'>Reviews</Link>
                        </div>
                    </div>
                    <div className='mx-auto w-full lg:w-auto justify-start px-2 mt-3'>
                        <h1 className='text-4xl font-bold tracking-widest'>Newsletter</h1>
                        <div className='flex flex-col mt-4'>
                            <Link to='/tour' className='my-2 text-lg font-medium'>stay Up To Date</Link>
                            <input type="text" className='my-2 p-2 outline-none border rounded-md' placeholder='Your email' />
                            <button className='my-2 bg-red-500 p-2 text-white font-semibold rounded-md'>Subscribe</button>
                        </div>
                    </div>

                    {/* Line */}
                    <div className='w-full mt-20 mb-10 border border-1 border-gray-400 rounded-full'></div>

                    <footer className='w-full text-center mb-20'>
                        <p className='text-md font-medium capitalize'>Copyright 2022 uifry.com all rights reserved</p>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer