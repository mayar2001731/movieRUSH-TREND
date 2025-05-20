

import React, { useEffect, useState } from 'react';
  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
  import Home from './components/Home/Home';
  import Child from './components/Child';
  import Navbar from './components/Navbar/Navbar';
  import Layout from './components/Layout';
  import Parent from './components/Parent';
import Login from './components/Login/Login';
import './index.css';
import Register from './components/Register/Register';
import  {Toaster} from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import Movie from './components/Movie/Movie';


  
  
  export default function App() {
 
 
 let [logindata,setLoginData]=useState(null)

  function SaveLoginData() {
    let encodedToken=localStorage.getItem('token')
    let decodedToken=jwtDecode(encodedToken)
    console.log(decodedToken);
    console.log(logindata);
    setLoginData(decodedToken)}



   
       



useEffect(() => {
if (localStorage.getItem('token')) {
  SaveLoginData()
}
}, [])

    let routers = createBrowserRouter([



      { path: '', element: <Layout logindata={logindata} setLoginData={setLoginData
      } />, children: [
        
        
        { path:'home',element: <Home />},
        { path: 'child',element: <Child />},
        { index:true , element:<Parent/>},
        { path:'parent' , element:<Parent/>},
        { path:'movie/:id' , element:<Movie/>},
         {path:'login',element:<Login SaveLoginData={SaveLoginData}/>},
         {path:'register',element:<Register SaveLoginData={SaveLoginData}/>}
      ]}
    
    
    
    
      ]);
    return<>
    <Toaster/>
    <RouterProvider router={routers}   />
    
    
    
    </>}