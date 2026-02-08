import React , {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {registerWithEmailAndPassword} from '../firebase'

const Register = () => {
  const navigate = useNavigate() ;
  const [email , setEmail] = useState('')
  return (
    <div>
      <h1 className='text-3xl my-4' >Register</h1>
    </div>
  )
}

export default Register
