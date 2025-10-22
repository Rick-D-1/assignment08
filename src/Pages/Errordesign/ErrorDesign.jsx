import React from 'react';
import erimg from '../../assets/5156006_2689520 1.png';
import { Link, useNavigate } from 'react-router';

const ErrorDesign = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex justify-center'>
                <img src={erimg} alt="" />
            </div>
            <div>
                <h1 className='text-3xl font-bold text-center'>Oops, page not found!</h1>
                <p className='text-gray-500 text-center'>The page you are looking for is not available.</p>

                <div className='flex justify-center mb-10'>
                    <button onClick={() => navigate('/')} className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white ">Go back!</button>
                </div>

            </div>
        </div>
    );
};

export default ErrorDesign;