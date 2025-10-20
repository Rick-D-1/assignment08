import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { useNavigate } from 'react-router';


const HomeApp = ({ data }) => {
    const navigate = useNavigate();
    const appsToShow = data.slice(0, 8);
    return (
        <div className='p-6'>
            <h1 className='text-center text-4xl font-bold mb-2'>Trending Apps</h1>
            <p className='text-center text-gray-500 mb-6'>
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {appsToShow.map((Singleapp) => (
                    <SingleApp key={Singleapp.id} Singleapp={Singleapp} />
                ))}
            </div>


            <div className='text-center mt-6'>
                <button
                    onClick={() => navigate('/Apps')}
                    className='bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-all'
                >
                    Show All
                </button>
            </div>
        </div>
    );
};

export default HomeApp;