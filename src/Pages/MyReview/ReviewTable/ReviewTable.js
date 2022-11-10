import { Table } from 'flowbite-react';
import React from 'react';
import { HiOutlineTrash, HiPencilSquare } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const ReviewTable = ({ rev, handleDelete }) => {
    const { _id, rating, review, service } = rev;

    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4">
                <button onClick={() => handleDelete(_id)}><HiOutlineTrash /></button>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {service.name}
            </Table.Cell>
            <Table.Cell>
                {rating}
            </Table.Cell>
            <Table.Cell>
                {review}
            </Table.Cell>
            <Table.Cell>
                <Link
                    to={`/editReview/${_id}`}
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                    <HiPencilSquare />
                </Link>
            </Table.Cell>
        </Table.Row>

    );
};

export default ReviewTable;