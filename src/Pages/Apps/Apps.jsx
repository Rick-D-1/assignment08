import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';
import { IoSearch } from "react-icons/io5";

const Apps = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredApps = data.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='p-6'>
            <h1 className='text-center text-3xl font-bold mb-2'>Our All Applications</h1>
            <p className='text-center mb-6'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex flex-col md:flex-row justify-between items-center gap-3 mb-6'>
                <h1 className='text-xl font-bold'>
                    ({filteredApps.length}) Apps found
                </h1>

                <div className='relative w-full md:w-64'>
                    <IoSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl' />
                    <input
                        type='text'
                        placeholder='Search apps...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='border rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500'
                    />
                </div>
            </div>

            {filteredApps.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {filteredApps.map((Singleapp) => (
                        <SingleApp key={Singleapp.id} Singleapp={Singleapp} />
                    ))}
                </div>
            ) : (
                <div>
                    <p className='text-center text-gray-500 mt-10 text-4xl font-medium'>
                        No App Found
                    </p>
                    <div className='flex justify-center mt-5'>
                        <button
                            onClick={() => navigate('/')}
                            className='bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-all '
                        >
                            Show All
                        </button>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Apps;
