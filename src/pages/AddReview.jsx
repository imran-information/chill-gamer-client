import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProviders';

const AddReview = () => {
    const { user } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        coverUrl: "",
        title: "",
        description: "",
        rating: "",
        year: "",
        genre: "",
        name: user.displayName,
        email: user.email,
    });

    const genres = ["Action", "RPG", "Adventure", "Puzzle", "Sports"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Review submitted:", formData);
        fetch('https://chill-gamer-server-gules.vercel.app/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(result => {
                Swal.fire({
                    title: "Success!",
                    text: "Your review has been submitted.",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            })



        // Reset form after submission
        setFormData({
            coverUrl: "",
            title: "",
            description: "",
            rating: "",
            year: "",
            genre: "",
        });
    };
    return (
        <div className="text-white">
            <div className="hero "
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-vector/detailed-gamer-room-illustration_23-2148923561.jpg?t=st=1733256238~exp=1733259838~hmac=dc9be82cc01c5b743e0e56e87d85b6607987aa9c81c3f69d8e896f9d024ee344&w=1380)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center backdrop-blur-sm">
                    <div className="container mt-5">

                        <h2 className="mb-5 text-4xl font-bold">Add New <span className='text-[#ff00dc]'>Game Review</span> </h2>
                        <form onSubmit={handleSubmit} className=" card-body">
                            <div className="flex gap-4">
                                <div className="mb-3 form-control w-full">
                                    <label htmlFor="coverUrl" className="label">
                                        <span className="label-text text-white">Thumbnail URL</span>
                                    </label>
                                    <input
                                        type="url"
                                        className="input input-bordered rounded-sm text-black"
                                        placeholder='Thumbnail URL'
                                        id="coverUrl"
                                        name="coverUrl"
                                        value={formData.coverUrl}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3 form-control w-full">
                                    <label htmlFor="title" className="label">
                                        <span className="label-text text-white">Game Title/Name</span>

                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered rounded-sm text-black"
                                        id="title"
                                        name="title"
                                        placeholder='Game Title/Name'
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3 form-control w-full">
                                <label htmlFor="description" className="label">
                                    <span className="label-text text-white">Review Description</span>

                                </label>
                                <textarea
                                    className="rounded-sm text-black"
                                    id="description"
                                    placeholder='Review Description'
                                    name="description"
                                    rows="4"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="flex gap-4">
                                <div className="mb-3 form-control w-full">
                                    <label htmlFor="rating" className="label">

                                        <span className="label-text text-white">Rating (1-10)</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="input input-bordered rounded-sm text-black"
                                        id="rating"
                                        name="rating"
                                        placeholder='Rating (1-10)'
                                        value={formData.rating}
                                        onChange={handleChange}
                                        min="1"
                                        max="10"
                                        required
                                    />
                                </div>
                                <div className="mb-3 form-control w-full">
                                    <label htmlFor="year" className="label">
                                        <span className="label-text text-white">Publishing Year</span>

                                    </label>
                                    <input
                                        type="number"
                                        className="input input-bordered rounded-sm text-black"
                                        id="year"
                                        name="year"
                                        value={formData.year}
                                        placeholder='Publishing Year'
                                        onChange={handleChange}
                                        min="1980"
                                        max={new Date().getFullYear()}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4">

                                <div className="mb-3 form-control w-full">
                                    <label htmlFor="genre" className="label">
                                        <span className="label-text text-white">Genre</span>

                                    </label>
                                    <select
                                        className="input input-bordered rounded-sm text-black"
                                        id="genre"
                                        name="genre"
                                        value={formData.genre}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a genre</option>
                                        {genres.map((genre) => (
                                            <option key={genre} value={genre}>
                                                {genre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mb-3 form-control w-full">
                                    <label htmlFor="email" className="form-label">
                                        <span className="label-text text-white">User Email</span>

                                    </label>
                                    <input
                                        type="email"
                                        className="input input-bordered rounded-sm text-black"
                                        id="email"
                                        name='email'

                                        value={user?.email}
                                        readOnly
                                    />
                                </div>
                                <div className="mb-3 form-control w-full">
                                    <label htmlFor="name" className="form-label">
                                        <span className="label-text text-white"> User Name</span>

                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered rounded-sm text-black"
                                        name='name'
                                        id="name"
                                        value={user?.displayName}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <button type="submit" className="py-2 font-bold rounded px-5 border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">Submit Review</button>
                        </form>


                    </div>

                </div>
            </div>
        </div>

    );
};

export default AddReview;