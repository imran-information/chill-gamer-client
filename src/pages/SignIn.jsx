import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { handleGoogleSignInUser, handleSignIn, handleGithubLoginUser } = useContext(AuthContext)
    const [toggle, setToggle] = useState(false)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const [error, setError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleSignIn(email, password)
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state ? location.state : '/')
            }).catch(err => {
                setError({ ...error, login: err.code })
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "invalid information..! try again",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });


            })
    }
    const handleGoogleLogin = () => {
        handleGoogleSignInUser()
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state ? location.state : '/')
            }).catch(error => {
                setError({ ...error, login: err.code })
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "invalid information..! try again",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    }
    const handleGithubLogin = () => {
        handleGithubLoginUser()
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Sorry",
                    text: "Try again",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    }
    return (
        <div className="hero py-10 w-10/12 mx-auto">
            {/* <Helmet>
                <title>Coupon Collecting | Login </title>
            </Helmet> */}
            <div className="hero-content flex-col">
                <div className="text-center ">


                </div>
                <div className="card bg-base-100  md:w-[500px]   shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold pt-5 text-center">Login Now!</h1>
                    <div className="form-control px-8 pt-10">
                        <button onClick={handleGoogleLogin} className="btn btn-outline">
                            <FaGoogle className='font-bold text-2xl'></FaGoogle> Login with Google</button>
                    </div>
                    <div className="form-control px-8 pt-5">
                        <button onClick={handleGithubLogin} className="btn btn-outline">
                            {/* <FaGithub /> */}
                            <FaGithub className='font-bold text-2xl'></FaGithub> Login with Github</button>
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
                            <input type={toggle ? "text" : 'password'} name='password' placeholder="password" className="input input-bordered" required /> <p onClick={() => setToggle(!toggle)} className='absolute top-14 md:left-[400px] left-[240px]  cursor-pointer' href="">{toggle ? <FaEyeSlash /> : <FaEye></FaEye>}</p>
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