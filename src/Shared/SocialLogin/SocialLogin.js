import { Button } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    // redirect
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
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
        <div>
            <Button
                onClick={handleGoogleSignIn}
                outline={true}
                gradientDuoTone="greenToBlue"
            >
                Continue With <FaGoogle className='ml-1.5' />
            </Button>
        </div>
    );
};

export default SocialLogin;