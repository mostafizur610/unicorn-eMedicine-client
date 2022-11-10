import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const ServiceCard = ({ service }) => {
    const { _id, image, name, details, rating, price } = service;

    return (
        <Card>
            <PhotoProvider>
                <PhotoView src={image}>
                    <img className='rounded' src={image} alt="" />
                </PhotoView>
            </PhotoProvider>

            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {name}
            </h5>

            <p>
                {
                    details?.length > 100 ? <p>{details.slice(0, 100) + '...'}</p> : <p>{details}</p>
                }
            </p>

            <div className="flex items-center justify-between">

                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${price}
                </span>
                <span className="font-bold text-gray-900 dark:text-white">
                    Rating: {rating}
                </span>


                <Link to={`/serviceDetails/${_id}`}
                    className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Details
                </Link>

            </div>
        </Card>
    );
};

export default ServiceCard;