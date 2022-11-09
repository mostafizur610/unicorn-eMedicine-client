import { Button } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ReviewSection from '../ReviewSection/ReviewSection';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    let { id } = useParams();
    console.log(id);
    useTitle('Details Service');

    return (
        <div className='grid grid-cols-2 gap-10 m-5'>
            {/* details */}
            <div className='bg-gray-200 border p-4 rounded shadow-lg '>

                <h1>service name</h1>
                <div>
                    <img src="" alt="" />
                </div>
                <p>details</p>
                <p>Rating</p>
                <p>Price</p>
                <div>
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