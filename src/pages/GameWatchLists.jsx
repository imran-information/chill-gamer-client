import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProviders';

const GameWatchLists = () => {
    const allWatchLists = useLoaderData()
    const { user } = useContext(AuthContext)
    const [watchLists, setWatchLists] = useState([])


    useEffect(() => {
        const watchLists = allWatchLists.filter(watchList => watchList.email === user?.email);
        setWatchLists(watchLists)
    }, [])


    const handleDeleteReview = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://chill-gamer-server-gules.vercel.app/reviews/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const newMyReview = watchLists.filter(myReview => myReview._id != id);
                        setWatchLists(newMyReview)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })

            }
        });

    }
    return (
        <div className='w-10/12 mx-auto py-10'>
            <h2 className="mb-5 text-4xl text-center font-bold">Game <span className='text-[#ff00dc]'> Watch List</span> </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Title</th>
                            <th>Publish date</th>
                            <th>Rating</th>
                            <th>Genre</th>
                            <th>Description</th>
                            <th>CoverURL</th>
                        </tr>
                        {/* const { coverUrl, title, description, rating, year, genre, _id, name, email } = watchLists; */}
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {watchLists.map((review, index) => (

                            <tr key={review._id}>
                                <td>{index + 1}</td>
                                <td>{review.username}</td>
                                <td>{review.email}</td>
                                <td>{review.title}</td>
                                <td>{review.year}</td>
                                <td>{review.rating}</td>
                                <td>{review.genre}</td>
                                <td>{review.description}</td>
                                <td>{review.coverUrl}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GameWatchLists;