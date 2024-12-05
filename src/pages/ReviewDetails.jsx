import React from 'react';

const ReviewDetails = () => {
    return (
        <div className='bg-hero-pattern  h-full text-white pb-20 pt-10'>
            <h2 className="mb-5 text-4xl text-center font-bold">All <span className='text-[#ff00dc]'>Review</span> </h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="flex-1">
                        <img
                            src="https://i.ibb.co.com/S6Wk2QP/3d-rendering-little-boy-military-uniform-with-binoculars-1142-36767.jpg"
                            className="w-full rounded" />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;