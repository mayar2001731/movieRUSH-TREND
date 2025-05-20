import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import {toast} from 'react-hot-toast'
export default function Register() {
  






let navigate = useNavigate();
async function registerData ( values){
let {data}= await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp` ,values)
console.log(data)

toast.success("welcome to login page",{position:"top-center"})

navigate("/login");



}


  


    let validationn= Yup.object({
   name:Yup.string().max(15,"invalid name").required("name is required"),
    email:Yup.string().email('invalid email adress').required('email is required'),
    password:Yup.string().matches(/^[A-Z][a-z-0-9]{5,8}$/,'password should start with capital letter').required('password is required'),
    age:Yup.string().required('your age is required'),
    phone:Yup.string().matches(/^[01][0125][0-9]{8}$/,'invalid phone number').required('phone is required'),
    
    

    })


  let formik=useFormik({

 initialValues:{
name:"",
email:"",
password:"",
age:"",
phone:"",
 },
 validationSchema:validationn,
 onSubmit:(values)=>registerData(values),
 
  })
    
  return <>
  
  <div className="container">
  <form className=" ms-2 text-white" onSubmit={formik.handleSubmit}>

 
  <div className="form-group row my-5">
    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-6">
      <input
        type="text"
       name="name"
        className="form-control "
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.errors.name&&formik.touched.name?<div className='alert alert-danger'>{formik.errors.name}</div>:""}
    </div>
  </div>
 
 
  <div className="form-group row my-5">
    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-6">
      <input
        type="email"
       name="email"
        className="form-control "
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email&&formik.touched.email?<div className='alert alert-danger'>{formik.errors.email}</div>:""}
    </div>
  </div>

  <div className="form-group row my-5">
    <label htmlFor="password" className="col-sm-2 col-form-label ">Password</label>
    <div className="col-sm-6">
      <input
        type="password"
        name='password'
        className="form-control"
        value={formik.values.password}
        onChange={formik.handleChange}
       
      />
      {formik.errors.password&&formik.touched.password?<div className='alert alert-danger'>{formik.errors.password}</div>:""}
    </div>
  </div>



  <div className="form-group row my-5">
    <label htmlFor="age" className="col-sm-2 col-form-label ">age</label>
    <div className="col-sm-6">
      <input
        type="number"
        name='age'
        className="form-control"
        value={formik.values.age}
        onChange={formik.handleChange}
       
      />
      {formik.errors.age&&formik.touched.age?<div className='alert alert-danger'>{formik.errors.age}</div>:""}
    </div>
  </div>





  <div className="form-group row my-5">
    <label htmlFor="password" className="col-sm-2 col-form-label ">Phone</label>
    <div className="col-sm-6">
      <input
        type="number"
        name='phone'
        className="form-control"
       value={formik.values.phone}
       onChange={formik.handleChange}
      />
      {formik.errors.phone&&formik.touched.phone?<div className='alert alert-danger'>{formik.errors.phone}</div>:""}
    </div>
  </div>



<div className='d-flex justify-content-center mb-5'>
  <button type="submit" className="btn btn-primary ">Register</button> </div>
</form>
</div>

    


  
  </>
}
