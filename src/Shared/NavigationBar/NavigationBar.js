import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/logo/logo01.png'
import img2 from '../../assets/logo/logo02.png'

const NavigationBar = () => {
    return (
        <Navbar className='bg-slate-300'
            fluid={true}
            rounded={true}
        >
            <Link to='/'>
                <Navbar.Brand>
                    <img
                        src={img1}
                        className="mx-4 h-20"
                        alt=""
                    />
                    <span>
                        <img className="h-20" src={img2} alt="" />
                    </span>
                </Navbar.Brand>
            </Link>

            <div className="flex md:order-2 mr-4">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                </Dropdown>
                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <Navbar.Link active={true}>
                    <Link to='/'>Home</Link>
                </Navbar.Link>

                <Navbar.Link active={true} >
                    <Link to='/myreview'>My Review</Link>
                </Navbar.Link>

                <Navbar.Link active={true} >
                    <Link to='/addservices'>Add Services</Link>
                </Navbar.Link>

                <Navbar.Link active={true}>
                    <Link to='/blogs'>Blogs</Link>
                </Navbar.Link>

                <Navbar.Link active={true}>
                    <Link to='/login'>Login</Link>
                </Navbar.Link>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default NavigationBar;




// <Navbar.Link
// href="/navbars"
// active={true}
// >
// Home
// </Navbar.Link>
// <Navbar.Link href="/navbars">
// My Review
// </Navbar.Link>
// <Navbar.Link href="/navbars">
// Add Services
// </Navbar.Link>
// <Navbar.Link href="/navbars">
// Blogs
// </Navbar.Link>
// <Navbar.Link href="/navbars">
// Login
// </Navbar.Link>