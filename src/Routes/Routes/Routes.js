import { createBrowserRouter } from "react-router-dom";
import Error from "../../components/Error/Error";
import Home from "../../components/Home/Home";
import LogIn from "../../components/LogIn/LogIn";
import Register from "../../components/LogIn/Register";
import Main from "../../layout/Main";



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
    //   {
    //     path: '/checkout/:id',
    //     element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
    //     loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
    //   },
    //   {
    //     path: '/orders',
    //     element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
    //   },
      {
        path: '/*',
        element: <Error></Error>
      },
    ]
  }
])

export default router;