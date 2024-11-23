import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from'axios'

export default function Login() {
    const [users,setUsers]=useState([]);
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const fetchData=async()=> {
        try {
            const response = await axios.get('http://localhost:5000/');
            setUsers(response.data)
            console.log(users.email)
        } catch (error) {
                console.error('Error:', error);
            }
        }



    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div >
        <form className='w-[300px] h-[300px] flex flex-col bg-slate-200 bg-gradient-to-t from-black to-black via-white rounded-lg m-auto'>
            <label className='mt-auto mx-auto mb-3 '>
                <input className='w-[200px] h-[50px] rounded-lg pl-3 border-red-500 border-2 shadow-xl shadow-gray-500' type='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </label>
            <label className=' mx-auto'>
                <input className='w-[200px] h-[50px] rounded-lg pl-3 border-red-500 border-2 shadow-xl shadow-gray-500' type='password' placeholder='Enter your password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
            </label>
            <button className='w-[100px] bg-black text-[25px] text-white rounded-lg mx-auto my-[10px]' >Login</button>
        <p className='mb-auto mx-auto mt-2 text-[14px] text-white'>
            Create new account ?<Link className='text-blue-800' to={"/register"}>Register</Link>
        </p>
        </form>
        <ul>
                {users.map(users => (
                    <li key={users._id}>{users.email}</li>
                ))}
            </ul>
    </div>
  )
}
