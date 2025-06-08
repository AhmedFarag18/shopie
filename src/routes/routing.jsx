import AboutUs from "../pages/AboutUs";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import ProductDetails from "../pages/productDetails/ProductDetails";
import ProductsPage from "../pages/products/ProductsPage";

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <h2>Login</h2> },
  { path: '/register', element: <h2>Register</h2> },
  { path: '/about', element: <AboutUs /> },
  { path: '/cart', element: <h2>Cart</h2> },
  { path: '/', element: <Home /> },
  { path: '/products', element: <ProductsPage /> },
  { path: '/products/:id', element: <ProductDetails /> },

  // make Not Found Last
  { path: '/*', element: <Error404 /> },
];
