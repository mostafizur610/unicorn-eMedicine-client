import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    return (
        <div className='m-12 bg-white border shadow-xl'>
            <h1 className='text-4xl text-center py-4 bg-orange-100'>Login!!</h1>
            <form className="flex flex-col gap-4 p-12 ">
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
                            name='password'
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        placeholder="password"
                        required={true}
                    />
                </div>
                {/* <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div> */}
                <div className='flex mt-4'>
                    <Button type="submit" className='mr-2'>
                        Login
                    </Button>
                    <Button
                        outline={true}
                        gradientDuoTone="greenToBlue"
                    >
                        Login With Google
                    </Button>
                </div>
            </form>
            <p className='text-start ml-12 mb-6'>New to Unicorn eMedicine? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
        </div>
    );
};

export default Login;