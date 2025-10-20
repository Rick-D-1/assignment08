import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Downloadimg from '../../assets/icon-downloads.png';

const AppDetails = () => {
    const { id } = useParams();
    const Appid = parseInt(id)
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === Appid)




    return (
        <div className='my-10 max-w-[1440px] mx-auto'>
            <div className=" bg-base-100 shadow-sm flex-row gap-7 md:flex lg:flex ">
                <figure className=''>
                    <img
                        src={singleApp.image}
                        alt="Movie" />
                </figure>
                <div className="border border-red-600 w-full">
                    <h2 className="card-title text-3xl font-bold">{singleApp.title
                    }</h2>
                    <p className='text-lg text-gray-500 font-semibold'>Developed by <span className='text-purple-500'>productive.io</span></p>
                    <div>
                        <div className='border'>
                            <img src={Downloadimg} alt="" />
                            <p>Downloads</p>
                            <h1 className='text-3xl font-bold'>8M</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;