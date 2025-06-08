import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import ProductDetails from "../pages/productDetails/ProductDetails";

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <h2>Login</h2> },
  { path: '/register', element: <h2>Register</h2> },
  { path: '/about', element: <h2>About</h2> },
  { path: '/cart', element: <h2>Cart</h2> },
  { path: '/', element: <Home /> },
  { path: '/products/:id', element: <ProductDetails /> },

  // make Not Found Last
  { path: '/*', element: <Error404 /> },
];
