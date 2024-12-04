import React from 'react';
import { NavLink } from 'react-router-dom';
import fb from "../assets/links-logos/fb.svg"
import twitter from "../assets/links-logos/twitter.svg"
import google from "../assets/links-logos/google.svg"
import youtube from "../assets/links-logos/youtube.svg"
import instagram from "../assets/links-logos/instagram.svg"
import linkedin from "../assets/links-logos/linkedin.svg"

const FooterLinks = () => {
    return (
        <div className='w-10/12 mx-auto flex justify-around mb-10'>
            <NavLink className="flex flex-col items-center hover:text-[#ff00dc] ">
                <img className='w-12' src={fb} alt="" />
                <h4 className='py-2 text-xl font-bold '>FACEBOOK</h4>
            </NavLink>
            <NavLink className="flex flex-col items-center hover:text-[#ff00dc] ">
                <img className='w-12' src={twitter} alt="" />
                <h4 className='py-2 text-xl font-bold '>TWITTER</h4>
            </NavLink>
            <NavLink className="flex flex-col items-center hover:text-[#ff00dc] ">
                <img className='w-12' src={google} alt="" />
                <h4 className='py-2 text-xl font-bold '>GOOGLE</h4>
            </NavLink>
            <NavLink className="flex flex-col items-center hover:text-[#ff00dc] ">
                <img className='w-12' src={youtube} alt="" />
                <h4 className='py-2 text-xl font-bold '>YOUTUBE</h4>
            </NavLink>
            <NavLink className="flex flex-col items-center hover:text-[#ff00dc] ">
                <img className='w-12' src={instagram} alt="" />
                <h4 className='py-2 text-xl font-bold '>INSTAGRAM</h4>
            </NavLink>
            <NavLink className="flex flex-col items-center hover:text-[#ff00dc] ">
                <img className='w-12' src={linkedin} alt="" />
                <h4 className='py-2 text-xl font-bold '>LINKEDIN</h4>
            </NavLink>
        </div>
    );
};

export default FooterLinks;