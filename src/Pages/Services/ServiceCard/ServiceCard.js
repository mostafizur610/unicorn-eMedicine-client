import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/services/s1.jpg'


const ServiceCard = () => {
    return (

        <div className="max-w-sm">
            <Card
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc={img}
            >

                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>

                <p>HI csdhfsvknsdvsn os sdhdhshnsdsod hjosdhofhfsofh sdhfosdhfsd dfhsdufhsd hu</p>


                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        $599
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white">
                        Rating: 4.5
                    </span>


                    <Link to='/serviceDetails'
                        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Details
                    </Link>

                </div>
            </Card>
        </div>
    );
};

export default ServiceCard;