import { Button, Card, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AddReview = () => {
    useTitle('Add Review');
    return (
        <div className="w-full flex justify-center my-12">
            <Card className='p-8'
                horizontal={true}
                imgSrc="https://deorwine.b-cdn.net/images/solutions/medicine/medicine-delivery-vector.webp"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Add review: Service Name dynamic
                </h5>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="email"
                        readOnly
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="rating1"
                            value="Rating"
                        />
                    </div>
                    <TextInput
                        id="rating1"
                        type="text"
                        placeholder='rating'
                    />
                </div >
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Your review"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        placeholder="Leave a comment..."
                        required={true}
                        rows={4}
                    />
                </div>
                <div>
                    <Link to='/myReview'>
                        <Button size="xs">
                            Proceed to Add
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default AddReview;