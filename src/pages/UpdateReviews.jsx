import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';

const UpdateReviews = () => {
    const oneReviewData = useLoaderData()
    const [isModalOpen, setIsModalOpen] = useState(true);
    const navigate = useNavigate();
    const { coverUrl, title, description, rating, year, genre, _id, } = oneReviewData;

    // console.log(oneReviewData)
    // const handleUpdateClick = () => {
    //     // Logic to determine whether to redirect or open the modal
    //     const openModal = true; // Change based on your condition
    //     if (openModal) {
    //         setIsModalOpen(true);
    //     } else {
    //         navigate(`/updateReview/${reviewId}`);
    //     }
    // };

    const { user } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        coverUrl: coverUrl,
        title: title,
        description: description,
        rating: rating,
        year: year,
        genre: genre,
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
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
            .then(res => {
                // Simulating data storage
                Swal.fire({
                    title: "Success!",
                    text: "Your review has been submitted.",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            }).catch(err => {
                console.log("ERR!")
            })


        setIsModalOpen(false);

    };

    return (
        <div className='min-h-screen bg-hero-pattern'>
            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-[50%]">
                        <h2 className="font-bold text-lg"></h2>
                        <h2 className="mb-5 text-4xl font-bold text-center">Edit Your <span className='text-[#ff00dc]'>Review</span> </h2>
                        <form onSubmit={handleSubmit} className=" card-body ">
                            <div className="flex gap-4">
                                <div className="mb-3 form-control w-full">
                                    <label htmlFor="coverUrl" className="label">
                                        <span className="label-text font-semibold">Thumbnail URL</span>
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
                                        <span className="label-text font-semibold">Game Title/Name</span>

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
                                    <span className="label-text font-semibold">Review Description</span>

                                </label>
                                <textarea
                                    className="rounded-sm border-2 text-black"
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

                                        <span className="label-text font-semibold">Rating (1-10)</span>
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
                                        <span className="label-text font-semibold">Publishing Year</span>

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
                                        <span className="label-text font-semibold">Genre</span>

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
                                        <span className="label-text font-semibold">User Email</span>

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
                                        <span className="label-text font-semibold"> User Name</span>

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


                            <button type="submit" className="py-2 font-bold rounded px-5 border-0 bg-[#ff00dc] mr-5 text-white"> Save </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="py-2 font-bold rounded px-5 border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] "
                            >
                                Cancel
                            </button>
                        </form>


                    </div>
                </div>
            )}
        </div>

    );
};

export default UpdateReviews;