import { Button, Spinner } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { FaLocationArrow, FaPhone, FaVoicemail } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    useTitle('Services');
    const { loading } = useContext(AuthContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://unicorn-emedicine-service-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // delete
    // const handleDelete = id => {
    //     const proceed = window.confirm('Are you sure, you want to delete this service?')
    //     if (proceed) {
    //         fetch('https://unicorn-emedicine-service-server.vercel.app/services/', {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     alert('Deleted successfully');
    //                     const remaining = services.filter(service => service._id !== id);
    //                     setServices(remaining);
    //                 }
    //             })
    //     }

    // }



    if (loading) {
        return <div className='text-center flex justify-center m-48'><Button color="gray">
            <Spinner aria-label="Alternate spinner button example" />
            <span className="pl-3">
                Loading...
            </span>
        </Button></div>
    }


    return (
        <div>
            <form className='mt-4 mx-12 mb-12'>
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here, services..." required="true" />

                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-16'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    // handleDelete={handleDelete}
                    ></ServiceCard>)
                }

            </div>

            <div className='my-12 gap-4 bg-blue-900 h-40 flex justify-around p-5 rounded'>
                <div className='text-white'>
                    <div className='flex gap-2 text-amber-400'><FaLocationArrow /><p>Location</p></div>
                    <p>Mirpur-2, Dhaka</p>
                    <p>Bangladesh</p>
                </div>

                <div className='text-white'>
                    <div className='flex gap-2 text-amber-400'><FaPhone /><p>Contacts</p></div>
                    <p>01-090909</p>
                    <p>01-060959</p>

                </div>
                <div className='text-white'>
                    <div className='flex gap-2 text-amber-400'><FaVoicemail /><p>Voicemail</p></div>
                    <p>talk2us@lecom.co.za</p>
                    <p>support@lecom.co.za</p>
                    <p>speak2vox@lecom.co.za</p>
                </div>
            </div>


        </div>
    );
};

export default Services;