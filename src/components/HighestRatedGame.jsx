import React, { useEffect, useState } from 'react';
import HighestRatedCard from './HighestRatedCard';

const HighestRatedGame = () => {
    const [highestRatedData, setHighestRatedData] = useState([])

    useEffect(() => {
        fetch('https://chill-gamer-server-gules.vercel.app/explore-details')
            .then(res => res.json())
            .then(data => {
                const shorted = data.sort((a, b) => b.rating - a.rating)
                setHighestRatedData(shorted)
            })

    }, [])

    return (

        <div className="md:bg-highest-rated-game bg-no-repeat bg-contain">
            <div className='w-10/12 mx-auto py-20 '>

                <h2 className="mb-5 text-4xl text-center text-white font-bold">Highest Rated <span className='text-[#ff00dc]'> Game</span> </h2>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                    {
                        highestRatedData.map(highestRated => <HighestRatedCard key={highestRated._id} highestRated={highestRated}></HighestRatedCard>)
                    }
                </div>
            </div>

        </div>

    );
};

export default HighestRatedGame;