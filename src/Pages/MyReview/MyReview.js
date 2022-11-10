import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable/ReviewTable';


const MyReview = () => {
    useTitle('My Review');
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        fetch(`https://unicorn-emedicine-service-server.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('unicornToken')}`
            }

        })
            .then(res => {
                console.log(res);
                if (res.status === 401) {
                    setErrorMessage(res.statusText);
                } else if (res.status === 403) {
                    setErrorMessage(res.statusText);
                }
                return res.json();
            })
            .then(data => {

                setReviews(data)
            })
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review?')
        if (proceed) {
            fetch(`https://unicorn-emedicine-service-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = reviews.filter(riv => riv._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div className='m-12'>
            {
                reviews.length > 0 ? (
                    <div>
                        <div className='flex justify-center my-4 text-green-500 text-2xl '>
                            <p>My Review</p>
                        </div>
                        <Table hoverable={true}>
                            <Table.Head className='border-y-4'>
                                <Table.HeadCell className="!p-4">
                                    Delete
                                    {/* <HiOutlineTrash /> */}
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Service Name
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Ratings
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Comments
                                </Table.HeadCell>

                                <Table.HeadCell>
                                    Edit
                                </Table.HeadCell>
                            </Table.Head>

                            <Table.Body className="divide-y">

                                {
                                    reviews.map(rev => <ReviewTable
                                        key={rev._id}
                                        rev={rev}
                                        handleDelete={handleDelete}
                                    ></ReviewTable>)
                                }

                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <div className='flex justify-center my-4 text-green-500 text-2xl'>
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                        <div>
                            <p className='flex flex-wrap'>No Reviews were added</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyReview;