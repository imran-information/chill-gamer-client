import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const MyReviews = () => {
    const { user } = useContext(AuthContext)

    const reviewsData = useLoaderData()
    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        const myReview = reviewsData.filter(myReview => myReview.email === user?.email);
        setMyReviews(myReview)
    }, [])


    // const { coverUrl, title, description, rating, year, genre, _id, name, email } = myReviews;
    return (
        <div>
            My Reviews
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Reviewer</th>
                            <th>Review</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {myReviews.map((review, index) => (
                            <tr key={review.id}>
                                <td>{index + 1}</td>
                                <td>{review.title}</td>
                                <td>{review.year}</td>
                                <td>{review.rating}</td>
                                <td className="flex gap-2">
                                    <button
                                        className="btn btn-sm btn-info"
                                        onClick={() => onUpdate(review.id)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-sm btn-error"
                                        onClick={() => onDelete(review.id)}
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