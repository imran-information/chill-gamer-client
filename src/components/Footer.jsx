import React from 'react';
import NewsLetter from './NewsLetter';
import FooterLinks from './FooterLinks';

const Footer = () => {
    return (
        <div className="">
            <NewsLetter></NewsLetter>
            <FooterLinks></FooterLinks>

            <footer className=" bg-[#111111] text-white p-10 flex justify-around">
                <div className="">
                    <h4>ABOUT US</h4>
                    <nav className='list-none text-sm'>
                        <li className='my-2'><a className="link link-hover">About us</a></li>
                        <li className='my-2'><a className="link link-hover">Contact</a></li>
                        <li className='my-2'><a className="link link-hover">Jobs</a></li>
                        <li className='my-2'><a className="link link-hover">Press kit</a></li>
                    </nav>
                </div>
                <div className="">
                    <h4>LATEST NEWS</h4>
                    <div className="">
                        <div className="flex">
                            <img className='w-40' src="https://img.freepik.com/free-psd/gaming-blank-banner-background_23-2150390433.jpg?uid=R154519964&ga=GA1.1.1636464796.1729528393&semt=ais_hybrid" alt="" />
                            <div className="">
                                <h5>About Space and World</h5>
                                <p>January 2, 2018</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img className='w-40' src="https://img.freepik.com/free-psd/gaming-blank-banner-background_23-2150390427.jpg?uid=R154519964&ga=GA1.1.1636464796.1729528393&semt=ais_hybrid" alt="" />
                            <div className="">
                                <h5>About Space and World</h5>
                                <p>January 2, 2018</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img className='w-40' src="https://img.freepik.com/free-psd/3d-view-character-dj_23-2150857259.jpg?uid=R154519964&ga=GA1.1.1636464796.1729528393&semt=ais_hybrid" alt="" />
                            <div className="">
                                <h5>About Space and World</h5>
                                <p>January 2, 2018</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h4>APPS $ PLATFORMS</h4>
                </div>
            </footer>
        </div>

    );
};

export default Footer;