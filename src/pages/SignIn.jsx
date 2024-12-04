import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {

    // const { handleSignInUser, handleGoogleSignInUser } = useContext(AuthContext)
    const [toggle, setToggle] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleSignInUser(email, password)
            .then(res => {
                // toast.success("login successfully !", {
                //     position: "top-center"
                // });
                // navigate(location?.state ? location.state : '/')
            }).catch(err => {
                // setError({ ...error, login: err.code })
                // toast.error("invalid information..! try again ", {
                //     position: "top-left"
                // });

            })

    }
    const handleGoogleLogin = () => {
        handleGoogleSignInUser()
        // .then(res => {
        //     toast.success("login successfully !", {
        //         position: "top-center"
        //     });
        //     navigate(location?.state ? location.state : '/')
        // }).catch(error => {
        //     setError({ ...error, login: err.code })
        //     toast.warn("Please try again...!", {
        //         position: "top-center"
        //     });
        // })
    }
    return (
        <div className="hero py-10">
            {/* <Helmet>
                <title>Coupon Collecting | Login </title>
            </Helmet> */}
            <div className="hero-content flex-col">
                <div className="text-center ">


                </div>
                <div className="card bg-base-100  w-[500px]   shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold pt-5 text-center">Login Now!</h1>
                    <div onClick={handleGoogleLogin} className="form-control px-8 pt-10">
                        <button className="btn btn-outline">
                            <FaGoogle className='font-bold text-2xl'></FaGoogle> Login with Google</button>
                    </div>
                    <form onSubmit={handleSubmit} className="card-body">

                        <p className='text-center pt-3'>or login with email:</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={toggle ? "text" : 'password'} name='password' placeholder="password" className="input input-bordered" required /> <p onClick={() => setToggle(!toggle)} className='absolute top-14 left-[400px] cursor-pointer' href="">{toggle ? <FaEyeSlash /> : <FaEye></FaEye>}</p>
                            {
                                error?.login && <label className="label text-sm text-red-500">
                                    {error?.login}
                                </label>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="py-2 font-bold rounded px-5 border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">Login</button>
                        </div>
                        <p className='text-center font-semibold mt-2'> Don`t have an account?<NavLink to='/signUp' className='text-[#ff00dc]'> Sign Up for free</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;