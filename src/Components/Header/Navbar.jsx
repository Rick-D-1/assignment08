import React from 'react';
import logoImg from '../../assets/logo.png'
import { Link, Navigate } from 'react-router';

const Navbar = () => {
    const links = <>
        <Link to='/'><li className='m-2'>Home</li></Link>

        <Link to='/Apps'><li className='m-2'>Apps</li></Link>
        <Link to='/Install'> <li className='m-2'>Installation</li></Link>

    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div>
                        <img className='w-[40px] h-[40px]' src={logoImg} alt="" />
                    </div>
                    <a className="text-xl font-bold text-purple-800">HERO.IO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white">Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;