import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import Error from "../../components/Error/Error";
import Home from "../../components/Home/Home";
import LogIn from "../../components/LogIn/LogIn";
import Register from "../../components/LogIn/Register";
import AddServices from "../../components/Services/AddServices/AddServices";
import MyReviews from "../../components/Services/Review/MyReviews";
import Review from "../../components/Services/Review/Review";
import Services from "../../components/Services/Services/Services";
import ServicesDetails from "../../components/Services/ServicesDetails/ServicesDetails";
import Main from "../../layout/Main";
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
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/services',
        element: <Services></Services>,
        // loader: ()=> fetch('http://localhost:5000/services')
      },
      {
        path: '/addservices',
        element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
      },
      {
        path: '/services/:id',
        element: <PrivateRoutes><ServicesDetails></ServicesDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/myreview',
        element: <MyReviews></MyReviews>
        
      },
      {
        path: '/review',
        element: <Review></Review>

      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>

      },
      {
        path: '/*',
        element: <Error></Error>
      },
    ]
  }
])

export default router;