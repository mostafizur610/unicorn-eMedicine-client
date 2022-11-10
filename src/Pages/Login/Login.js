import { Button, Label, TextInput } from 'flowbite-react';
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
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });
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
        </div>
    );
};

export default Login;