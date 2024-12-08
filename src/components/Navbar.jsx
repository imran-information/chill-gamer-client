import React, { useContext, useState } from 'react';

import gamerLogo from '../assets/gamer-logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
const Navbar = () => {
    const { user, handleSignOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/add-review'>Add Review</NavLink></li>
        <li><NavLink to='/all-reviews'>All Reviews</NavLink></li>
        <li><NavLink to='/my-reviews'>My Reviews</NavLink></li>
        <li><NavLink to='/game-watch-lists'>Game Watch List</NavLink></li>

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
                navigate('/')
            })
    }


    const handleToggleDarkMode = () => {
        const toggle = document.body;
        toggle.classList.toggle("dark-mode")
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
                <NavLink to="/" className=" md:ps-0    font-semibold flex items-center ">
                    <img className='w-12  text-[#7a217e]' src={gamerLogo} alt="" />
                    <h4 className='ps-2 text-sm md:text-3xl'>Chill Gamer</h4>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='mr-10 hidden md:block' onClick={() => handleToggleDarkMode('dark-mode',)}>
                    <p className='text-base font-medium flex items-center gap-3'>Dark Mode <FaToggleOn /></p>

                </button>
                {
                    user ?
                        <div className="flex-none gap-2  relative inline-block">
                            {isHovered && (
                                <div
                                    style={{

                                        position: "absolute",
                                        top: "60px",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                                        color: "#fff",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        fontSize: "12px",
                                        whiteSpace: "nowrap",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                        zIndex: 1000,
                                    }}
                                >
                                    {user.displayName}

                                </div>
                            )}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn  btn-circle avatar border-2 border-[#ff00dc]">
                                    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="w-10 rounded-full ">
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
                        : <NavLink className='text-sm md:text-lg font-semibold' to='/signIn'>Log in</NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;