import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./home/Home";
import Product from "./product/Product";
import About from "./about/About";
import Contect from "./contectus/Contect";
import Errorpage from "./Errorpage";
import CartContext from "./cart/CartContext";
import Cart from "./cart/Cart";
import Login from "./form/Login";
import Register from "./form/Register";

const routing = createBrowserRouter([
    {
        path: "/", element: <CartContext><App></App></CartContext>, children: [
            { path: '', element: <Home></Home> },
            { path: 'about', element: <About></About> },
            { path: 'products', element: <Product></Product> },
            { path: 'contect', element: <Contect></Contect> },
            { path: 'cart', element: <Cart></Cart> },
            { path: 'login', element: <Login></Login> },
            { path: 'register', element: <Register></Register> },
        ]
    },
    { path: '*', element: <Errorpage></Errorpage> }
])
export default routing
