
import { createBrowserRouter } from "react-router-dom";
import Cards from "../components/Cards/Cards";
import { Home } from "../components/Home/home";
import Hotels from "../components/Hotels/Hotels";
import Restaurants from "../components/Restaurents/Restaurents";
import ThinksToDo from "../components/ThinksToDo/ThinksToDo";


import Layout from "../Layout/Layout";
import Blog from "../pages/blog";
import Contact from "../pages/Contact";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import { Signup } from "../pages/Signup";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
            path:"/",
            element: <LandingPage />,
            loader: ()=>fetch('/data.json')

        },
        {
            path: "/Home",
            element: <Home />,
        
        },
        {
            path:"/Signup",
            element: <Signup />
        },
        {
            path:"/Contact",
            element: <Contact />

        },
        {
            path:"/Blog",
            element: <Blog />
        },
        {
            path:"/Login",
            element: <Login />
        },
        {
            path:"/Cards",
            element: <Cards />,
            
        },
        {
            path:"/Hotels",
            element:<Hotels/>,
            loader: ()=>fetch('/hotel.json')
        }, 
        {
            path:"/ThinksToDo",
            element:<ThinksToDo/>
        }, 
        {
            path:"/Restaurants",
           element:<Restaurants/>
        }, 
        // {
        //     path: "/",
        //     element: 
        // }
      
      
       
       


      ]},
   


  ]);