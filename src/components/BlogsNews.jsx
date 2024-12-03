import React from 'react';

import newsCardsImg from '../assets/news-card-img/news-img.jpg'
import newsCardsImg2 from '../assets/news-card-img/news-img-2.jpg'
import newsCardsImg3 from '../assets/news-card-img/news-img-3.jpg'
import newsCardsImg4 from '../assets/news-card-img/news-img-4.avif'

const BlogsNews = () => {
    return (
        <div className='bg-gradient-to-r from-purple-500 to-white pt-10 pb-20 text-white'>
            <div className='w-10/12 mx-auto'>
                <h3 className='text-4xl font-semibold text-center'> BLOG <span className='text-[#ff00dc]'>& NEWS</span></h3>

                <div className="grid md:grid-cols-4 gap-5 text-black mt-7">
                    <div className="card bg-base-100 w-96 rounded-none">
                        <figure className='h-64'>
                            <img
                                src={newsCardsImg}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body px-2">
                            <h2 className="card-title hover:text-[#ff00dc] cursor-pointer">About Space and World</h2>
                            <p>Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus</p>
                            <div className="card-actions justify-between pt-4">
                                <button className=" hover:text-[#ff00dc] hover:underline">Cloud Doe</button>
                                <button className=" hover:text-[#ff00dc] hover:underline">News</button>
                                <button className="cursor-text">January 2, 2018</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 rounded-none">
                        <figure className='h-64'>
                            <img
                                src={newsCardsImg2}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body px-2">
                            <h2 className="card-title hover:text-[#ff00dc] cursor-pointer">New Trailer is Released!</h2>
                            <p>Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus</p>
                            <div className="card-actions justify-between pt-4">
                                <button className=" hover:text-[#ff00dc] hover:underline">Cloud Doe</button>
                                <button className=" hover:text-[#ff00dc] hover:underline">News</button>
                                <button className="cursor-text">January 2, 2018</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 rounded-none">
                        <figure className='h-64'>
                            <img
                                src={newsCardsImg3}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body px-2">
                            <h2 className="card-title hover:text-[#ff00dc] cursor-pointer">Price List of the Games</h2>
                            <p>Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus</p>
                            <div className="card-actions justify-between pt-4">
                                <button className=" hover:text-[#ff00dc] hover:underline">Cloud Doe</button>
                                <button className=" hover:text-[#ff00dc] hover:underline">News</button>
                                <button className="cursor-text">January 2, 2018</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 rounded-none">
                        <figure className='h-64'>
                            <img
                                src={newsCardsImg4}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body px-2">
                            <h2 className="card-title hover:text-[#ff00dc] cursor-pointer">Earth Wars: History</h2>
                            <p>Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa sapien faucibus</p>
                            <div className="card-actions justify-between pt-4 ">
                                <button className=" hover:text-[#ff00dc] hover:underline">Cloud Doe</button>
                                <button className=" hover:text-[#ff00dc] hover:underline">News</button>
                                <button className="cursor-text">January 2, 2018</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogsNews;