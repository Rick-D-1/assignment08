import React from 'react';
import Bannerimg from '../../assets/Home.png';

const Banner2 = () => {
    return (
        <div className='mb-10'>
            <img src={Bannerimg} alt="" />
            <div className='flex '>
                <div className='w-full h-[300px] bg-linear-to-br from-[#632EE3] to-[#9F62F2] p-20'>
                    <h1 className='text-center text-5xl font-bold text-white mb-5'>Trusted by Millions, Built for You</h1>
                    <div className='flex justify-center items-center gap-15'>
                        <div className='text-white text-center'>
                            <p>Total Downloads</p>
                            <h1 className='text-3xl font-bold'>29.6M</h1>
                            <p>21% more than last month</p>
                        </div>
                        <div className='text-white text-center'>
                            <p>Total Reviews</p>
                            <h1 className='text-3xl font-bold'>906K</h1>
                            <p>46% more than last month</p>
                        </div>
                        <div className='text-white text-center'>
                            <p>Active Apps</p>
                            <h1 className='text-3xl font-bold'>132+</h1>
                            <p>31 more will Launch</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner2;