import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const form = event.target;

        const formData = {
            serviceName: form.serviceName.value,
            imageUrl: form.imageUrl.value,
            rating: form.rating.value,
            price: form.price.value,
            details: form.details.value,
        }

        const response = await fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (data.insertedId) {
            alert('Data added successfully')
        }
        form.reset();
    }
    useTitle('Add Services')
    return (
        <div>
            <form className="flex flex-col gap-4 m-12 bg-rose-100 p-4 rounded" onSubmit={formSubmitHandler}>
                <h1 className='text-center pb-4 text-3xl text-blue-900'>You can add any new service you want</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name1"
                                value="Service Name"
                            />
                        </div>
                        <TextInput
                            id="name1"
                            name="serviceName"
                            type="text"
                            placeholder="name"
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="image1"
                                value="Image URL"
                            />
                        </div>
                        <TextInput
                            id="image1"
                            type="text"
                            name="imageUrl"
                            placeholder="imageURL"
                        />
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
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
                            placeholder="rating"
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="price1"
                                value="Price"
                            />
                        </div>
                        <TextInput
                            id="price1"
                            type="text"
                            name="price"
                            placeholder="price"
                        />
                    </div>
                </div>



                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="details"
                            value="Details about this service"
                        />
                    </div>
                    <Textarea
                        id="details"
                        name="details"
                        placeholder="input short details..."
                        rows={4}
                    />
                </div>
                <div className='flex justify-center'>
                    <Button type="submit">
                        Proceed to Add This Service
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddServices;