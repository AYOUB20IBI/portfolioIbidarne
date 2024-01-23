
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import { Routerh } from './route/index';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App (){
  return (
    <>
    <RouterProvider router={Routerh}/>
    <ToastContainer />
    </>
  )
}

export default App
