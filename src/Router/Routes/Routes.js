import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import AddReview from "../../Pages/Services/AddReview/AddReview";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path: '/myReview',
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
                // <MyReview></MyReview>
                // <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path: '/addServices',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
                // <AddServices></AddServices>
                // <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/addReview/:id',
                element: <AddReview></AddReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <div><h1 className='flex justify-center mt-48 text-red-900 text-5xl'>404 Not Found</h1><br /><h4 className='flex justify-center text-yellow-500 text-xl'>This route is not defined</h4></div>
    }

])

export default router;