import React from 'react';
import { NavLink } from 'react-router-dom';

const HighestRatedCard = ({ highestRated }) => {
    const { coverUrl, title, description, rating, year, genre, _id, } = highestRated;

    const handleHighestRatedDetails = (id) => {

    }
    return (
        <div className="card bg-base-100 backdrop-blur-md w-96 rounded-none">
            <figure className='h-64 border-2'>
                <img
                    src={coverUrl}
                    alt="Shoes" />
            </figure>
            <div className="card-body px-4 border-2">
                <h2 className="card-title hover:text-[#ff00dc] cursor-pointer">{title}</h2>
                <p>{description}</p>
                <p>Publishing Year: {year}</p>
                <div className="card-actions justify-between pt-4">

                    <NavLink onClick={() => handleHighestRatedDetails(_id)} to={`/explore-details/${_id}`} className="py-2 w-full font-bold text-center rounded px-5 border text-[#ff00dc] hover:bg-[#ff00dc] hover:text-white border-[#ff00dc] ">Explore Details</NavLink>

                </div>
            </div>
        </div>
    );
};

export default HighestRatedCard;