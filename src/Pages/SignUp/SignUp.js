import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('Sign Up');
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='m-12 bg-white border shadow-xl'>
            <h1 className='text-4xl text-center py-4 bg-orange-100'>Sign Up!!</h1>
            <form onSubmit={handleSignUp} className="flex flex-col gap-4 p-12 ">
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