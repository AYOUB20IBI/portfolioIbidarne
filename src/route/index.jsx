import { createBrowserRouter } from "react-router-dom";
import Hero from './../app/hero/Hero';
import About from './../app/about/About';
import Portfolio from './../app/portfolio/Portfolio';
import Contact from './../app/contact/Contact';
import Blog from './../app/blog/Blog';
import Layout from "../layout/Layout";
import NotFound from "../app/404/NotFound";


export const Routerh = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Hero/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/portfolio',
                element:<Portfolio/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/blog',
                element:<NotFound/>
            },
            {
                path:'*',
                element:<NotFound/>
            }
        ]
    }
])


