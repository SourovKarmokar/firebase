import React, {useState} from 'react'
import { loginWithEmailAndPassword } from '../firebase'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try{
      const response = await loginWithEmailAndPassword(email , password)  ;
    console.log(response);
    navigate("/home")
    }catch (err){
      console.log(err);
      
    }
    
  }

  return (
    <div>
      <h1>
        Login
      </h1>
      <form>
        <div className='my-1'>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Email address'
            className='mx-2 my-2 p-1 border border-gray-100 rounded-sm'
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password'
            className='mx-2 my-2 p-1 border border-gray-100 rounded-sm'
          />
        </div>
        <div>
          <button onClick={handleLogin} >Login</button>
        </div>
      </form>
      <p>
        No Account ? {' '}
        <NavLink to="/register">
          Register
        </NavLink>
      </p>
    </div>
  )
}

export default Login
