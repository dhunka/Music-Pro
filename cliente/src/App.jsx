import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Productos from "./pages/Productos/Productos";
import Producto from "./pages/Producto/Producto";
import Login from "./pages/Login/Login";

const Layout = () => {
  return (
   <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
   </div>
  );
};


const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Layout/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "/productos/:id", element: <Productos/> },
      { path: "/producto/:id", element: <Producto/> },
      { path: "/login", element: <Login/> },
    ] 
  },
 
]);

function App() {

  return (
   <RouterProvider router={router}/> 
  );
}

export default App
