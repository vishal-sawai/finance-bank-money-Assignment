import React, { FC } from 'react';
import FeaturesPhone from '/images/Features_Phones.png';
import { PiStarFourBold, PiCubeTransparent } from "react-icons/pi";
import SvgComponent1 from './SvgComponent1';
import SvgComponent2 from './SvgComponent2';

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const Feature: FC<FeatureProps> = ({ icon, title, description }) => (
    <div className='mt-10'>
        <div className='flex'>
            {icon}
            <h2 className='text-xl capitalize my-auto font-bold'>{title}</h2>
        </div>
        <p className='font-semibold text-gray-500 mt-3'>{description}</p>
    </div>
);

const Features: FC = () => {
    const features = [
        {
            icon: <PiStarFourBold className='text-red-500 text-2xl font-extrabold my-auto me-2' />,
            title: 'budgeting intervals',
            description: 'Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.'
        },
        {
            icon: <svg className='my-auto me-2' width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1.50002V11M10 11L18.5 6.27773M10 11L1.5 6.27773M10 11V20.5M18.5 15.7222L10.777 11.4317C10.4934 11.2741 10.3516 11.1954 10.2015 11.1645C10.0685 11.1371 9.93146 11.1371 9.79855 11.1645C9.64838 11.1954 9.50658 11.2741 9.22297 11.4317L1.5 15.7222M19 15.0586V6.94147C19 6.59883 19 6.4275 18.9495 6.27471C18.9049 6.13953 18.8318 6.01545 18.7354 5.91076C18.6263 5.79242 18.4766 5.70922 18.177 5.54282L10.777 1.43171C10.4934 1.27415 10.3516 1.19537 10.2015 1.16448C10.0685 1.13715 9.93146 1.13715 9.79855 1.16448C9.64838 1.19537 9.50658 1.27415 9.22297 1.43171L1.82297 5.54282C1.52345 5.70922 1.37369 5.79242 1.26463 5.91076C1.16816 6.01545 1.09515 6.13953 1.05048 6.27471C1 6.42751 1 6.59883 1 6.94147V15.0586C1 15.4012 1 15.5725 1.05048 15.7253C1.09515 15.8605 1.16816 15.9846 1.26463 16.0893C1.37369 16.2076 1.52345 16.2908 1.82297 16.4572L9.22297 20.5683C9.50658 20.7259 9.64838 20.8047 9.79855 20.8356C9.93146 20.8629 10.0685 20.8629 10.2015 20.8356C10.3516 20.8047 10.4934 20.7259 10.777 20.5683L18.177 16.4572C18.4766 16.2908 18.6263 16.2076 18.7354 16.0893C18.8318 15.9846 18.9049 15.8605 18.9495 15.7253C19 15.5725 19 15.4012 19 15.0586Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            title: 'budgeting intervals',
            description: 'Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.'
        },
        {
            icon: <PiCubeTransparent className='text-red-500 text-2xl font-extrabold my-auto me-2' />,
            title: 'budgeting intervals',
            description: 'Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.'
        },

    ];

    return (
        <>
            <div className='flex mt-11 justify-center flex-col lg:flex-row lg:mx-20 lg:px-14 py-10'>
                <div className='w-full justify-center lg:w-1/2 flex lg:justify-end'>
                    <div className='hidden lg:block relative left-[450px] -top-20 z-0'>
                        <SvgComponent1 />
                    </div>
                    <img className='z-10' src={FeaturesPhone} alt="features" />
                </div>
                <div className='w-full lg:w-1/2 p-10'>
                    <div>
                        <p className='uppercase text-red-400 font-semibold text-xl tracking-widest'>Features</p>
                        <h1 className='text-4xl capitalize font-extrabold'>Uifry Premium</h1>
                        {features.map((feature, index) => <Feature key={index} {...feature} />)}
                    </div>
                    <div className='hidden lg:block absolute top-[2400px] -right-20 lg:right-0 lg:top-[1000px]'>
                        <SvgComponent2 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;