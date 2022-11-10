import { Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../../assets/logo/logo01.png'
import img2 from '../../assets/logo/logo02.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.error(error))
    }

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
                >
                </Dropdown>
                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <Navbar.Link active={true}>
                    <Link to='/'>Home</Link>
                </Navbar.Link>



                <Navbar.Link active={true}>
                    <Link to='/blogs'>Blogs</Link>
                </Navbar.Link>

                {
                    user?.uid ?
                        <>
                            <Navbar.Link active={true} >
                                <Link to='/myReview'>My Review</Link>
                            </Navbar.Link>

                            <Navbar.Link active={true} >
                                <Link to='/addServices'>Add Services</Link>
                            </Navbar.Link>

                            <Navbar.Link active={true} >

                                <div className='flex gap-4'>

                                    <p className='text-lg text-white'>{user?.displayName}</p>

                                    <span className='mr-4'> {
                                        user?.photoURL ?
                                            <img className='h-12 rounded-3xl' src={user?.photoURL} alt='' /> : <FaUser />
                                    }</span>

                                    <Link> <Button
                                        onClick={handleLogout}
                                        color="info"
                                        pill={true}
                                        outline={true}
                                    >
                                        Sign Out
                                    </Button></Link>
                                </div>


                            </Navbar.Link>
                        </>
                        :
                        <Navbar.Link active={true}>
                            <Link to='/login'>Login</Link>
                        </Navbar.Link>
                }

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