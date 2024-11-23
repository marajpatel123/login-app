import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    // const  btnevnt=()=>{
    //     document.querySelector('.evnt');
    //     .addEventListener(onclick,()=>{
    //         alert("Hello")
    //     })
    // }
  return (
    <div className='w-100 h-[80px] shadow-xl'>
        <Link to={'/login'}><button className='w-[80px] h-[30px] rounded-lg  shadow-lg shadow-red-500 bg-red-600'>Login</button></Link>
    </div>
  )
}
