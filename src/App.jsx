import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { routes } from "./routes/routing";
import MainLayout from "./components/layout/MainLayout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

   const notifyError = () => {
    toast.error('Invalid email and password', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    };

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <MainLayout>
            <Routes>
              {routes.map((route, i) => (
                <Route key={i} path={route.path} element={route.element} />
              ))}
            </Routes>
        </MainLayout>
      </BrowserRouter>

      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}

export default App;

