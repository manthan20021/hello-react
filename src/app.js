import ReactDOM from "react-dom/client"
import Hedder from "./componts/Hedder";
import Body from "./componts/Body";
// import { data } from "browserslist";
// import { release } from "process";
import { createBrowserRouter, RouterProvider, Outlet,  } from "react-router-dom";
import About from "./componts/About";
import Error from "./componts/Error";
import Contact from "./componts/Contact";
import Cart from "./componts/Cart";
import Manu from "./componts/Manu";
import { lazy, Suspense } from "react";

const Mart = lazy(() => import("./componts/SwiggytoMart")) 

const AppLeout = () => {

    return(
        <div className="appLeout">
          <Hedder/>
          <Outlet/>
          
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLeout/>,

    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      
      {
        path: "/contact",
        element: <Contact/>
      },
    
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/manu/:resid",
        element: <Manu/>
      },
      {
        path: "/swiggytomart",
        element: <Suspense fallback={<h1>Loding...</h1>}><Mart/></Suspense>
      }
    ],
    errorElement: <Error/>,
  },

  
])  



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)