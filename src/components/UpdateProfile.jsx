import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';

const UpdateProfile = () => {
    const { user, handleSignOut, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignOutUser = () => {
        handleSignOut()
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign Out successfully !",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Sorry..! try again",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
        navigate("/")
    }
    const handleUpdateUser = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        updateUserProfile(name, photo)
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Profile Updated !",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "invalid information.. Please try again...!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });

            })
    }
    return (
        <div className='bg-img w-10/12 mx-auto flex justify-center py-20'>
            {/* <Helmet>
                <title>Coupon Collecting | Profile</title>
            </Helmet> */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body text-center">
                    <h2 className=" text-xl font-semibold py-5 text-center">{user?.email}</h2>
                    <img className='w-14 h-14 border border-accent p-1 rounded-full mx-auto ' src={user?.photoURL} alt="" />
                    <h2 className=" text-xl font-semibold  text-center">Hi, {user?.displayName}!</h2>
                    <form onSubmit={handleUpdateUser}>
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
                        <button className="btn btn-neutral w-full my-4">Update Profile</button>
                    </form>

                    <button onClick={handleSignOutUser} className="btn btn-outline">Sign Out</button>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;