import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';

const MyReviews = () => {
    const { user } = useContext(AuthContext)

    const reviewsData = useLoaderData()
    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        const myReview = reviewsData.filter(myReview => myReview.email === user?.email);
        setMyReviews(myReview)
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
                        const newMyReview = myReviews.filter(myReview => myReview._id != id);
                        setMyReviews(newMyReview)
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
            <h2 className="mb-5 text-4xl text-center font-bold">My <span className='text-[#ff00dc]'> Reviews</span> </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Reviewer</th>
                            <th>Publish date</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {myReviews.map((review, index) => (
                            <tr key={review._id}>
                                <td>{index + 1}</td>
                                <td>{review.title}</td>
                                <td>{review.year}</td>
                                <td>{review.rating}</td>
                                <td className="flex gap-2">
                                    <NavLink to={`/update-review/${review._id}`}
                                        className="btn btn-sm btn-info"
                                    // onClick={() => onUpdate(review.id)}
                                    >
                                        Update
                                    </NavLink>
                                    <button
                                        onClick={() => handleDeleteReview(review._id)}
                                        className="btn btn-sm btn-error"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;