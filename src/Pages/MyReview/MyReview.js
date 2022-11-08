import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    useTitle('My Review')
    return (
        <div>
            <h3>My review</h3>
        </div>
    );
};

export default MyReview;