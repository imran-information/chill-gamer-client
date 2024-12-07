import React from 'react';
import banner1 from '../assets/banner1.png'
import banner3 from '../assets/banner3.avif'

import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {


    return (
        <div className=''>
            <div className="carousel h-[900px] w-full text-white">
                <div id="slide1" className="carousel-item relative w-full">
                    <div
                        className="hero "
                        style={{
                            backgroundImage: "url(https://img.freepik.com/free-vector/detailed-gamer-room-illustration_23-2148923561.jpg?t=st=1733256238~exp=1733259838~hmac=dc9be82cc01c5b743e0e56e87d85b6607987aa9c81c3f69d8e896f9d024ee344&w=1380)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center ">
                            <div className="">
                                <h1 className='mb-5 text-8xl font-bold'>
                                    Lets Your Mind <span className='text-[#ff00dc]'>Explore</span> {' '}
                                    {/* <h1 className="mb-5 text-8xl font-bold">Lets Your Mind <span className='text-[#ff00dc]'>Explore</span> New World {' '}</h1> */}
                                    <span className=''>
                                        {/* Style will be inherited from the parent element */}
                                        <Typewriter
                                            words={['New World', 'New World', 'New World', 'New World']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={90}
                                            deleteSpeed={50}
                                            delaySpeed={1000}

                                        />
                                    </span>
                                </h1>

                                <p className="mb-5 px-20 font-sans">
                                    Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a body
                                </p>
                                <button className="py-2 font-bold rounded px-5 border-0 bg-[#ff00dc] mr-5">BUY NOW</button>
                                <button className="py-2 font-bold rounded px-5 border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={banner1}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={banner3}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.freepik.com/free-psd/3d-rendering-gaming-sales-blank-banner-background_23-2151115041.jpg?uid=R154519964&ga=GA1.1.1636464796.1729528393&semt=ais_hybrid"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;