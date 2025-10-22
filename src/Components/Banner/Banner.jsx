import React from 'react';
import playstore from '../../assets/google-play-store-icon.webp'
import AppStore from '../../assets/App_Store_(iOS)-Logo.wine.png';

const Banner = () => {
    return (
        <div className=' w-2/3 mx-auto'>
            <h1 className='text-center text-5xl font-bold'>We Build <br />
                <span className='text-purple-500'>Productive</span> Apps</h1>
            <p className='m-2 text-center text-gray-500'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='text-center flex justify-center'>
                <a href='https://www.google.com/' className='m-2 btn border p-2 rounded-lg flex gap-2 font-semibold' ><img className='w-[20px]' src={playstore} alt="" /> Google Play</a>
                <a href='https://www.apple.com/app-store/' className='m-2 btn h-[40px] p-2 rounded-lg flex items-center font-semibold'>
                    <img className='w-[50px]' src={AppStore} alt="" />App Store</a>
            </div>
        </div>
    );
};

export default Banner;