import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { routes } from "./routes/routing";
import MainLayout from "./components/layout/MainLayout";

function App() {
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

    </>
  );
}

export default App;
