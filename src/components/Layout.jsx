import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'



export default function Layout({logindata,setLoginData}) {
  return <>
  
  <Navbar logindata={logindata} setLoginData={setLoginData}/>

  <Outlet></Outlet>
  
  
  <Footer />
  
  </>
}
