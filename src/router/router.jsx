import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Category from "../components/Category";
import Error from "../components/Error";
import HomeLayout from "../components/Layout/HomeLayout";
import NewsLayout from "../components/Layout/NewsLayout";
import Login from "../components/Login";
import News from "../components/News";
import PrivateRoute from "../components/PrivateRoute";
import Reg from "../components/Reg";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Category></Category>,
                loader:()=> fetch('https://server-programmingherorubel.vercel.app/news')
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader:({params})=> fetch(`https://server-programmingherorubel.vercel.app/category/${params.id}`)
            },
        ]
    },
    {
        path:'/news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:'/news/:id',
                element:<News></News>,
                loader:({params})=>fetch(`https://server-programmingherorubel.vercel.app/news/${params.id}`)
            },
        ]
    },
    {
        path:'/about',
        element:<PrivateRoute><About /></PrivateRoute>,
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/reg',
        element:<Reg></Reg>
    },
    
])

export default router