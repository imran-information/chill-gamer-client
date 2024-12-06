import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';

const ReviewDetails = () => {
    const { user } = useContext(AuthContext)
    const reviewDetailsData = useLoaderData()
    const { coverUrl, title, description, rating, year, genre, _id, name, email } = reviewDetailsData;
    const [ratings, setRatings] = useState(0)

    const handleAddToWatchList = (username, email, coverUrl, title, description, rating, year, genre) => {
        const newWatchList = {
            username,
            email,
            coverUrl,
            title,
            description,
            rating,
            year, genre
        }
        fetch('https://chill-gamer-server-gules.vercel.app/watchLists', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newWatchList)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Success!",
                    text: "Your WatchList has been Added.",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            })
    }
    return (
        <div className='bg-hero-pattern  h-full text-white pb-20 pt-10'>
            <h2 className="mb-5 text-4xl text-center font-bold">Review  <span className='text-[#ff00dc]'>Details</span> </h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="flex-1">
                        <img
                            src={coverUrl}
                            className="w-full rounded" />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-4 text-sm">
                            {description}
                        </p>
                        <p className="py-1">
                            <span className='text-slate-300'>Published Date:</span> {year}
                        </p>
                        <p className="py-1">
                            <span className='text-slate-300'>Genre:</span> {genre}
                        </p>
                        <p className="py-1">
                            <span className='text-slate-300'>Reviewer`s Name:</span> {name}
                        </p>
                        <p className="py-1">
                            <span className='text-slate-300'>Email:</span> {email}
                        </p>
                        <div className="flex items-center pb-5">
                            <p className='text-slate-300 flex-row mr-2'>Rating:</p>
                            <Rating style={{ maxWidth: 150 }} value={ratings} onChange={setRatings} />
                        </div>

                        {
                            user ? <button onClick={() => handleAddToWatchList(user.displayName, user.email, coverUrl, title, description, rating, year, genre)} className="py-2 font-bold rounded px-5 border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">Add to WatchList</button> : <Link to='/signIn' className="py-2 font-bold rounded px-5 border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;