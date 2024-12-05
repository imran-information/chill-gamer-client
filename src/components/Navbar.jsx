import React, { useContext } from 'react';

import gamerLogo from '../assets/gamer-logo.png'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { user, handleSignOut } = useContext(AuthContext)
    console.log(user)
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/add-review'>Add Review</NavLink></li>
        <li><NavLink to='/all-reviews'>All Reviews</NavLink></li>
        <li><a>My Reviews</a></li>
        <li><a>Game Watch List</a></li>
        <li>
            <details>
                <summary>Profile</summary>
                <ul className="p-2">
                    <li><a>Update info </a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
    </>

    const handleSignOutUser = () => {
        handleSignOut()
            .then(data => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logout Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div className="navbar fixed text-[#ff00dc] z-50 top-0 md:px-10 backdrop-blur-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to="/" className=" md:ps-0 md:text-3xl  font-semibold flex items-center ">
                    <img className='w-12  text-[#7a217e]' src={gamerLogo} alt="" />
                    <h4 className='ps-2 '>Chill Gamer</h4>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex-none gap-2">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn  btn-circle avatar border-2 border-[#ff00dc]">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt=""
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <NavLink to="/update-profile" className="justify-between">
                                            Update info
                                            <span className="badge">New</span>
                                        </NavLink>
                                    </li>
                                    {/* <li><a>Settings</a></li> */}
                                    <li onClick={handleSignOutUser}><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                        : <NavLink to='/signIn'>Login</NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;