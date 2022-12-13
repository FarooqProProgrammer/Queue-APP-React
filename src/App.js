import './App.css';
import Home from './pages/Home'
import Admin from './pages/Admin';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";





function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/Admin",
    element:<Admin/>
  },
]);
  return (
    <>
    
    <RouterProvider router={router} />


    </>
  );
}

export default App;
