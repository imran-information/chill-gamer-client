import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

const AllReviews = () => {
    const allReviewsData = useLoaderData()

    return (
        <div className='bg-hero-pattern h-full text-white pb-20 pt-10'>
            <h2 className="mb-5 text-4xl text-center font-bold">All <span className='text-[#ff00dc]'>Review</span> </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 text-black mt-7 w-10/12 mx-auto">
                {
                    allReviewsData.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;