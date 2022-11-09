import { Button } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

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