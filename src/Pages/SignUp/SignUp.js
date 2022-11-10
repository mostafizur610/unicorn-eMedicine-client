import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('Sign Up');

    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }


    // if (loading) {
    //     return <div className='text-center flex justify-center m-48'><Button color="gray">
    //         <Spinner aria-label="Alternate spinner button example" />
    //         <span className="pl-3">
    //             Loading...
    //         </span>
    //     </Button></div>
    // }

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
                    <p>{error}</p>
                </div>
            </form>
            <p className='text-start ml-12 mb-6'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;