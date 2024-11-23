import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import axios from 'axios';
import users from './Login'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css'

export default function Register() {
    const [formData,setformData]=useState({
        name:'',
        email:'',
        phoneNumber:'',
        password:'',
        conPassword:'',
    });

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        for (let i in formData) {
            if (formData[i] === '') {
                    toast.error("Enter Values")
                return;
            }
        }
        
        if (formData.password !== formData.conPassword) {
            toast.warning('Password not match')
            return;
        }
        axios.post('http://localhost:5000/',formData)
        .then(response=> toast.success("Success"))
        .catch(error=>toast.error('Error',error))
    }      



  return (
        <div >
        <form className='w-[400px] h-[400px] flex flex-col bg-slate-200 bg-slate-200 bg-gradient-to-t from-zinc to-zinc via-white rounded-lg m-auto' onSubmit={handleSubmit}>
            <label className='mt-auto mx-auto mb-3 '>
                <input className='w-[200px] h-[50px] rounded-lg pl-3 border-red-500 border-2 shadow-xl shadow-gray-500' type='text' placeholder='Enter name' name="name" value={formData.name} onChange={handleChange}></input>
            </label>
            <label className=' mx-auto mb-3'>
                <input className='w-[200px] h-[50px] rounded-lg pl-3 border-red-500 border-2 shadow-xl shadow-gray-500' type='email' placeholder='email' name="email" value={formData.email} onChange={handleChange}/>
            </label>
            <label className=' mx-auto mb-3'>
                <input className='w-[200px] h-[50px] rounded-lg pl-3 border-red-500 border-2 shadow-xl shadow-gray-500' type='text' placeholder='Phone Number' name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
            </label>
            <label className=' mx-auto mb-3'>
                <input className='w-[200px] h-[50px] rounded-lg pl-3 border-red-500 border-2 shadow-xl shadow-gray-500' type='password' placeholder='Enter password' name="password" value={formData.password} onChange={handleChange}/>
            </label>
            <label className=' mx-auto mb-3'>
                <input className='w-[200px] h-[50px] rounded-lg pl-3 border-red-500 border-2 shadow-xl shadow-gray-500' type='password' placeholder='Confirm password' name="conPassword" value={formData.conPassword} onChange={handleChange}/>
            </label>
            <button type='submit' className='w-[100px] bg-black text-[25px] text-white mx-auto my-[10px] rounded'>Submit</button>
        
        <p className='mb-auto mx-auto mt-2 text-[14px] text-black'>
            Already have account? <Link className='text-blue-800' to={"/login"}>Login</Link>
        </p>
        </form>
        <ToastContainer/>
    </div>
  )
}
