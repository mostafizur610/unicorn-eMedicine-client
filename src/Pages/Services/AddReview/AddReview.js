import { Button, Card, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const AddReview = () => {
    useTitle('Add Review');
    let { id } = useParams();
    // console.log(id);
    const { name } = useLoaderData();
    const { user } = useContext(AuthContext);

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';

        const formData = {
            // email: form.email.value,
            rating: form.rating.value,
            review: form.review.value,
            email,
            serviceId: id
        }


        const response = await fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data);
        if (data.insertedId) {
            alert('Data added successfully')
        }
        form.reset();
    }
    return (
        <div className="w-full flex justify-center my-12">
            <Card className='p-8'
                horizontal={true}
                imgSrc="https://deorwine.b-cdn.net/images/solutions/medicine/medicine-delivery-vector.webp"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Add review about {name}
                </h5>
                <form onSubmit={formSubmitHandler}>
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
                            name="email"
                            placeholder="email"
                            defaultValue={user?.email}
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
                            name="rating"
                            required={true}
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
                            name="review"
                            required={true}
                            rows={4}
                        />
                    </div>
                    <div>
                        <Button type="submit" size="xs">
                            Proceed to Add
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddReview;