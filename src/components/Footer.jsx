import React from 'react';
import NewsLetter from './NewsLetter';
import FooterLinks from './FooterLinks';
import apple from '../assets/footer-logo/apple.svg'
import googlePlay from '../assets/footer-logo/google-play.svg'
import rocket from '../assets/footer-logo/rocket.gif'
import windows from '../assets/footer-logo/windows.svg'
import paypal from '../assets/footer-logo/paypal.svg'
import amazon from '../assets/footer-logo/amazon.svg'

const Footer = () => {
    return (
        <div className="">
            <NewsLetter></NewsLetter>
            <FooterLinks></FooterLinks>

            <footer className=" bg-[#111111] text-white p-10 flex gap-3 justify-around">
                <div className="">
                    <h4 className='text-2xl font-bold'>ABOUT <span className='text-[#ff00dc]'>US</span></h4>
                    <nav className='list-none text-xs'>
                        <li className='my-2'><a className="link link-hover">About us</a></li>
                        <li className='my-2'><a className="link link-hover">Contact</a></li>
                        <li className='my-2'><a className="link link-hover">Jobs</a></li>
                        <li className='my-2'><a className="link link-hover">Press kit</a></li>
                    </nav>
                </div>
                <div className="text-xs">
                    <h4 className='text-2xl font-bold'>LATEST <span className='text-[#ff00dc]'>NEWS</span></h4>
                    <div className="">
                        <div className="flex gap-3 mt-5 mb-3">
                            <img className='w-40' src="https://img.freepik.com/free-psd/gaming-blank-banner-background_23-2150390433.jpg?uid=R154519964&ga=GA1.1.1636464796.1729528393&semt=ais_hybrid" alt="" />
                            <div className="">
                                <h5 className='text-base'>About Space and World</h5>
                                <p className='my-2'>January 2, 2018</p>
                            </div>
                        </div>
                        <div className="flex gap-3 mb-3">
                            <img className='w-40' src="https://img.freepik.com/free-psd/gaming-blank-banner-background_23-2150390427.jpg?uid=R154519964&ga=GA1.1.1636464796.1729528393&semt=ais_hybrid" alt="" />
                            <div className="">
                                <h5 className='text-base'>About Space and World</h5>
                                <p className='my-2'>January 2, 2018</p>
                            </div>
                        </div>
                        <div className="flex gap-3 mb-3">
                            <img className='w-40' src="https://img.freepik.com/free-psd/3d-view-character-dj_23-2150857259.jpg?uid=R154519964&ga=GA1.1.1636464796.1729528393&semt=ais_hybrid" alt="" />
                            <div className="">
                                <h5 className='text-base'>About Space and World</h5>
                                <p className='my-2'>January 2, 2018</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-xs">
                    <h4 className='text-2xl font-bold'>APPS <span className='text-[#ff00dc]'>$ PLATFORMS</span></h4>
                    <div className="grid grid-cols-2 gap-5">
                        <button className="py-3 font-bold rounded px-5 w-full  border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">
                            <img className='' src={apple} alt="" />
                            Apple Store</button>
                        <button className="py-3 flex items-center  font-bold rounded px-5 w-full  border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">
                            <img src={googlePlay} alt="" />
                            SUBMIT</button>
                        <button className="py-3  flex items-center font-bold rounded px-5 w-full  border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">
                            <img src={rocket} alt="" />
                            SUBMIT</button>
                        <button className="py-3 flex items-center  font-bold rounded px-5 w-full  border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">
                            <img src={windows} alt="" />
                            SUBMIT</button>
                        <button className="py-3 flex items-center  font-bold rounded px-5 w-full  border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">
                            <img src={amazon} alt="" />
                            SUBMIT</button>
                        <button className="py-3 flex items-center  font-bold rounded px-5 w-full  border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">
                            <img className='text-white' src={paypal} alt="" />
                            SUBMIT</button>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;