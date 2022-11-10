import { Card } from 'flowbite-react';
import React from 'react';


const ReviewSection = () => {
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
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                        alt="Neil image"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                        Neil Sims
                                    </p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    1
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                        alt="Bonnie image"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                        Bonnie Green
                                    </p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    4
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                        alt="Michael image"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                        Michael Gough
                                    </p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    3
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                        alt="Lana image"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                        Lana Byrd
                                    </p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    3
                                </div>
                            </div>
                        </li>
                        <li className="pt-3 pb-0 sm:pt-4">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        alt="Thomas image"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                        Thomes Lean
                                    </p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                        email@windster.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    2
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Card>
        </div>
    );
};

export default ReviewSection;