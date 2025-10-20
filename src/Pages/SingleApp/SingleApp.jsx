import React from 'react';
import DownloadIcn from '../../assets/icon-downloads.png';
import ratingicn from '../../assets/icon-ratings.png';

const SingleApp = ({ Singleapp }) => {
    const { image, ratingAvg,
        title, downloads } = Singleapp;

    return (
        <div className="card bg-base-100 w-[348px] shadow-sm mt-5">
            <figure className="px-5 pt-5 ">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>


            </div>
            <div className='flex justify-between pb-5 px-5 pt-5'>
                <div className=' px-3 flex h-7 justify-center items-center gap-1 bg-gray-200 rounded-lg'><img className='w-[17px] h-[17px]' src={DownloadIcn} alt="" />
                    <p className='text-green-600 font-bold'>{downloads}</p>
                </div>
                <div className=' px-3 flex justify-center items-center gap-1 bg-[#FFF0E1] rounded-lg'><img className='w-[17px] h-[17px]' src={ratingicn} alt="" />
                    <p className='text-orange-400 font-bold'>{ratingAvg}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleApp;