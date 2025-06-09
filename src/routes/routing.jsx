import AboutUs from "../pages/AboutUs";
import Error404 from "../pages/Error404";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const routes = [
  { path: '/', element: <h2>Home</h2> },
  { path: '/login', element: <Login/> },
  { path: '/SignUp', element: <SignUp/> },
  { path: '/about', element: <h2>About</h2> },
  { path: '/cart', element: <h2>Cart</h2> },
  { path: '/', element: <Home /> },
  { path: '/products', element: <ProductsPage /> },
  { path: '/products/:id', element: <ProductDetails /> },

  // make Not Found Last
  { path: '/*', element: <Error404 /> },
];
