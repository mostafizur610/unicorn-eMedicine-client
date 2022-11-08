import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='m-12 bg-white border shadow-xl'>
            <h1 className='text-4xl text-center py-4 bg-orange-300'>Sign Up!!</h1>
            <form className="flex flex-col gap-4 p-12 ">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name1"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        id="name1"
                        name='name'
                        type="text"
                        placeholder="name"
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoURL1"
                            value="photoURL"
                        />
                    </div>
                    <TextInput
                        id="photoURL1"
                        name='photoURL'
                        type="text"
                        placeholder="photoURL"
                    />
                </div>

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
                        name='email'
                        placeholder="email"
                        required={true}
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        name='password'
                        placeholder="password"
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <div className='flex'>
                    <Button type="submit" className='mr-2'>
                        Sign Up
                    </Button>
                </div>
            </form>
            <p className='text-start ml-12 mb-6'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;