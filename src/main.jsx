import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Detailrecipe from './components/Detailrecipe.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
  path:"/detailrecipe/:id",
  element:<Detailrecipe/>
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
