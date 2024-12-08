import React from 'react';

const AboutCloux = () => {
    return (
        <div className='mt-20 text-white'>
            <div
                className="hero h-[700px]"
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?t=st=1733265055~exp=1733268655~hmac=4f1b0f9f35c402c8d493b52f9e2b8e836948d3e376b0612e76ac98c656669ccd&w=1480)",
                }}>

                <div className="hero-content ">
                    <div className="lg:flex justify-around items-center gap-10">
                        <div className="hero-overlay bg-opacity-60 flex-1 ">
                            <img className='rounded-sm md:h-96' src="https://img.freepik.com/free-photo/caucasian-woman-celebrating-winning-first-place-action-game-online-multiplayer-competition-from-home-gamer-girl-playing-space-shooter-simulation-professional-pc-setup-with-gaming-keyboard_482257-43584.jpg?uid=R154519964&ga=GA1.1.1636464796.1729528393&semt=ais_hybrid" alt="" />
                        </div>
                        <div className="flex-1">
                            <h1 className="mb-5 md:text-5xl text-4xl font-bold md:text-start text-center">ABOUT THE <br />
                                <span className='text-[#ff00dc]'> CLOUX</span></h1>
                            <p className="mb-5 font-sans text-justify">
                                Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a body
                            </p>
                            <button className="py-2 font-bold rounded  px-5 border-0 bg-[#ff00dc] mr-5">READ MORE</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCloux;