import AboutUs from "../pages/AboutUs";
import Error404 from "../pages/Error404";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home";
import ProductDetails from "../pages/productDetails/ProductDetails";
import ProductsPage from "../pages/products/ProductsPage";
import Cart from "../pages/cart/Cart";
import { ProtectedRoute } from "../guard/ProtectedRoute";
import Categories from "../pages/categories/Categories";
import CategoryProducts from "../pages/categories/CategoryProducts";
import Checkout from "../pages/Checkout";

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/SignUp', element: <SignUp /> },
  { path: '/about', element: <AboutUs /> },
  { path: '/products', element: <ProductsPage /> },
  { path: '/products/:id', element: <ProductDetails /> },
  { path: '/categories', element: <Categories /> },
  { path: '/category/:categoryId', element: <CategoryProducts /> },
  { path: '/checkout', element: <Checkout /> },
  // protected Route
  { path: '/cart', element: (<ProtectedRoute><Cart /></ProtectedRoute>) },
  // make Not Found Last
  { path: '/*', element: <Error404 /> },
];
