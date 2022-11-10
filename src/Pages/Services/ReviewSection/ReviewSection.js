import { Card } from 'flowbite-react';
import React from 'react';


const ReviewSection = ({ reviews }) => {
    return (
        <div className="w-full">

            <Card>
                <div className="mb-4 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        Review About This Service
                    </h5>
                    <p
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                        Rating
                    </p>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {reviews && reviews.map(review => {
                            return (
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="shrink-0">
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                                alt="Neil"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                                Neil Sims
                                            </p>
                                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                                {review.review}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            {review.rating}
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Card>
        </div>
    );
};

export default ReviewSection;