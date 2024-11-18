import React from 'react'
import Navbar from './assets/navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={true}
        newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false}
        draggable pauseOnHover={false} theme="colored" />
      <Navbar />
      <Outlet></Outlet>
    </>

  )
}

export default App
