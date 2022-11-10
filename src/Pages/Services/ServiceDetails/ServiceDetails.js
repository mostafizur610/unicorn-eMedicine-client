import { Button } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ReviewSection from '../ReviewSection/ReviewSection';

const ServiceDetails = () => {
    const { name, image, details, rating, price } = useLoaderData();
    let { id } = useParams();
    // console.log(id);
    useTitle('Details Service');

    // serviceDetails
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 m-5'>
            {/* details */}
            <div className='bg-gray-200 border p-4 rounded shadow-lg '>

                <h1 className='flex justify-center text-3xl text-red-900 mb-4'>{name}</h1>
                <div>
                    <img className='w-full mb-4' src={image} alt="" />
                </div>
                <p>{details}</p>
                <div className='flex justify-between mt-8'>
                    <Link to='/addServices'>
                        <Button gradientDuoTone="purpleToBlue">
                            Add Service
                        </Button>
                    </Link>
                    <p>Rating: {rating}</p>
                    <p>Price: ${price}</p>
                    <Link to={`/addReview/${id}`}>
                        <Button gradientDuoTone="purpleToBlue">
                            Add Review
                        </Button>
                    </Link>
                </div>
            </div>

            {/* review */}
            <div>
                <ReviewSection></ReviewSection>
            </div>
        </div>
    );
};

export default ServiceDetails;