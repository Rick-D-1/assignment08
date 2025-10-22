import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    const navigation = useNavigation();

    const isLoading = navigation.state === 'loading';

    return (
        <div>
            <Navbar></Navbar>

            {isLoading && (
                <div className="fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50">
                    <div
                        className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin"

                    ></div>
                    <p className="mt-4 text-[#632EE3] font-semibold animate-pulse">
                        Loading page...
                    </p>
                </div>
            )}

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
