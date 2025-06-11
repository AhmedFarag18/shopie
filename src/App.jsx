import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { routes } from "./routes/routing";
import MainLayout from "./components/layout/MainLayout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  const { user } = useAuth();
  return (
    <>
      <Toaster />
      <CartProvider userEmail={user?.email || "guest"}>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              {routes.map((route, i) => (
                <Route key={i} path={route.path} element={route.element} />
              ))}
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </CartProvider>

      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}

export default App;

