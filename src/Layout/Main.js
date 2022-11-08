import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterDetails from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <FooterDetails></FooterDetails>
        </div>
    );
};

export default Main;