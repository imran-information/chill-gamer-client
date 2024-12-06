import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { handleGoogleSignInUser, handleSignUpUser,updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState({})
    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            return setError({ ...error, password: "Password must be 6 characters long" })
        }
        if (!/[A - Z]/.test(password)) {
            return setError({ ...error, password: "Password must contain at least one Uppercase letter" })

        }
        if (!/[a - z]/.test(password)) {
            return setError({ ...error, password: "Password must contain at least one  Lowercase letter" })

        }

        handleSignUpUser(email, password)
            .then(res => {
                updateUserProfile(name, photo)
                    .then(res => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Sign Up successfully..!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }).catch(err => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "invalid information..! try again",
                            footer: '<a href="#">Why do I have this issue?</a>'
                        });
                    })
                navigate(location?.state ? location.state : '/')
            }).catch(err => {
                setError({ ...error, password: err.code })
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "email already used ..! try again",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    }

    const handleGoogleLogIn = () => {
        handleGoogleSignInUser()
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign Up successfully..!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/')
                
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
    return (
        <div>
            {/* <Helmet>
                <title>Coupon Collecting | Register </title>
            </Helmet> */}
            <div className="hero-content flex-col mx-auto">

                <div className="card bg-base-100  w-[500px]   shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold py-8 text-center">Sign up for free</h1>

                    <div className=" px-8 w-full">
                        <button onClick={handleGoogleLogIn} className="btn px-5 w-full btn-outline"><FaGoogle className='font-bold text-2xl'></FaGoogle> Continue with Google</button>
                    </div>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control ">

                        </div>
                        <p className='text-center'>or Sign up with email:</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            {
                                error?.password && <label className="label text-sm text-red-500">
                                    {error?.password}
                                </label>
                            }

                        </div>
                        <div className="form-control mt-6">

                            <button className="py-2 font-bold rounded px-5 border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">Sign Up</button>
                        </div>
                        <p className='text-center font-semibold '>Already have an account? <NavLink to='/signIn' className='text-[#ff00dc]'> Log in </NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;