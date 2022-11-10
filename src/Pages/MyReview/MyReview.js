import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
// import { HiPencilSquare } from "react-icons/hi2";
// import { HiOutlineTrash } from "react-icons/hi";
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable/ReviewTable';


const MyReview = () => {
    useTitle('My Review');
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review?')
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
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
            <div className='flex justify-center my-4 text-green-500 text-2xl '><p>My review is shown {reviews.length}</p></div>
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
                        <span className="sr-only">
                            {/* <HiPencilSquare /> */}
                        </span>
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
    );
};

export default MyReview;