import { Table } from 'flowbite-react';
import React from 'react';
import { HiPencilSquare } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi";
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    useTitle('My Review')
    return (
        <div className='m-12'>
            <div className='flex justify-center my-4 text-green-500 text-2xl '><p>My review is shown</p></div>
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
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="!p-4">
                            <HiOutlineTrash />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Apple MacBook Pro 17"
                        </Table.Cell>
                        <Table.Cell>
                            Sliver
                        </Table.Cell>
                        <Table.Cell>
                            Laptop
                        </Table.Cell>

                        <Table.Cell>
                            <a
                                href="/tables"
                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                <HiPencilSquare />
                            </a>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
};

export default MyReview;