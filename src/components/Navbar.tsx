import { useState } from 'react';
import logo from '/logo.png'; // Make sure to add your logo image in the src folder

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg lg:px-40">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" />
                        {/* <span className="text-black text-xl font-bold ml-2">uifry</span> */}
                    </div>
                    <div className="hidden md:flex space-x-8 text-lg">
                        <a href="#" className="font-bold text-red-500">Home</a>
                        <a href="#" className="text-gray-600 hover:text-red-500">About Us</a>
                        <a href="#" className="text-gray-600 hover:text-red-500">Pricing</a>
                        <a href="#" className="text-gray-600 hover:text-red-500">Features</a>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-black text-white px-4 py-2 rounded">
                            Download
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <a href="#" className="block px-2 py-1 text-black font-semibold hover:text-red-500">Home</a>
                        <a href="#" className="block px-2 py-1 text-gray-600 hover:text-black">About Us</a>
                        <a href="#" className="block px-2 py-1 text-gray-600 hover:text-black">Pricing</a>
                        <a href="#" className="block px-2 py-1 text-gray-600 hover:text-black">Features</a>
                        <button className="w-full bg-black text-white px-4 py-2 rounded mt-2">
                            Download
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
