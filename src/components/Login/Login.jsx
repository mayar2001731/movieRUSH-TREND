import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import * as Yup from'yup'
export default function Login({SaveLoginData}) {



  let navigate= useNavigate();
  async function loginDataa ( values){
  let {data}= await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn` ,values)
  console.log(data);
  localStorage.setItem("token",data.token)
  SaveLoginData;
  toast.success('welcome to home page', {position:"top-center"})
  navigate("/home")}
  









 let validationn= Yup.object({
email:Yup.string().email('invalid email adress').required('email is required'),
password:Yup.string().matches(/^[A-Z][a-z-0-9]{5,8}$/,'password should start with capital letter').required('password is required')



 })










 let formik= useFormik({

initialValues:{
 email:"",
 password:"",
},
validationSchema:validationn,
onSubmit:(values)=>loginDataa(values),


 })
 
 
 
 
 
 
 
 
 return<>
  
<div className="container">
  <form className=" ms-2 text-white" onSubmit={formik.handleSubmit}>
  <div className="form-group row my-5">
    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-6">
      <input
        type="email"
        name="email"
        className="form-control "
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email&&formik.touched.email?<div className='alert alert-danger'>{formik.errors.email}</div>:""}
    </div>
  </div>

  <div className="form-group row my-5">
    <label htmlFor="password" className="col-sm-2 col-form-label ">Password</label>
    <div className="col-sm-6">
      <input
        type="password"
        name="password"
        className="form-control"
        value={formik.values.password}
        onChange={formik.handleChange}
        
      />

     {formik.errors.password&&formik.touched.password?<div className='alert alert-danger'>{formik.errors.password}</div>:""}

    </div>
  </div>
<div className='d-flex justify-content-center mb-5'>
  <button type="submit" className="btn btn-primary ">Login</button> </div>
</form>
</div>
  </>
    
}
