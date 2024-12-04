import React from 'react';

const NewsLetter = () => {
    return (
        <div className='mb-10 text-white'>
            <div
                className="hero bg-slate-500"
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?t=st=1733265055~exp=1733268655~hmac=4f1b0f9f35c402c8d493b52f9e2b8e836948d3e376b0612e76ac98c656669ccd&w=1480)",
                }}>

                <div className="w-10/12 mx-auto  text-white">
                    <div className="md:flex justify-between  items-center gap-2">
                        <div className="">
                            <h1 className="text-4xl font-bold py-20">NEWSLEATER:</h1>
                        </div>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="input input-bordered border-[#ff00dc] w-full max-w-xs" />

                        <input
                            type="text"
                            placeholder="First Name"
                            className="input input-bordered border-[#ff00dc] w-full max-w-xs" />

                        <input
                            type="text"
                            placeholder="Last Name"
                            className="input input-bordered border-[#ff00dc]  w-full max-w-xs " />
                        <div className="w-60 ">
                            <button className="py-3 font-bold rounded px-5 w-full  border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;