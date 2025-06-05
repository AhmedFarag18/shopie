import Error404 from "../pages/Error404";

export const routes = [
  { path: '/', element: <h2>Home</h2> },
  { path: '/login', element: <h2>Login</h2> },
  { path: '/register', element: <h2>Register</h2> },
  { path: '/about', element: <h2>About</h2> },
  { path: '/cart', element: <h2>Cart</h2> },

  // make Not Found Last
  { path: '/*', element: <Error404 /> },
];
