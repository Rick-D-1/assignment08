import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import ErrorDesign from '../Errordesign/ErrorDesign';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ErrorDesign></ErrorDesign>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;