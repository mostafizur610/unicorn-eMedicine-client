import { Button, Label, TextInput, Toast } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Login = () => {
    useTitle('Login');
    const [error, setError] = useState('');
    const { logIn } = useContext(AuthContext);

    // redirect
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // const user = result.user;

        //         const currentUser = {
        //             email: user.email
        //         }
        //         console.log(currentUser);

        //         // get jwt token
        //         fetch('https://genius-car-server-gold-tau.vercel.app/jwt', {
        //             method: 'POST',
        //             headers: {
        //                 'content-type': 'application/json'
        //             },
        //             body: JSON.stringify(currentUser)
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 console.log(data);
        //                 localStorage.setItem('geniusToken', data.token);
        //                 navigate(from, { replace: true });
        //             });

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');

                const currentUser = {
                    email: user.email
                }

                fetch('https://unicorn-emedicine-service-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('unicornToken', data.token);
                        navigate(from, { replace: true });
                    });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });
    }

    return (
        <div>
            {
                location.state?.from?.pathname?.match('addReview') && (
                    <Toast>
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
                            {/* <HiExclamation className="h-5 w-5" /> */}
                        </div>
                        <div className="ml-3 text-sm font-normal">
                            Improve password difficulty.
                        </div>
                        <Toast.Toggle />
                    </Toast >
                )
            }

            <div div className='m-12 bg-white border shadow-xl' >
                <h1 className='text-4xl text-center py-4 bg-orange-100'>Login!!</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-4 p-12 ">
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

                    <div className='flex mt-4'>
                        <Button type="submit" className='mr-2'>
                            Login
                        </Button>
                        <SocialLogin />
                    </div>
                    <p>{error}</p>
                </form>
                <p className='text-start ml-12 mb-6'>New to Unicorn eMedicine? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
            </div >
        </div >
    );
};

export default Login;