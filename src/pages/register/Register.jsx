import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  
  return (
    <div className='register'>
    <h1 className="title">Register</h1>
    <div className="rContainer">
        <input 
          type="text" 
          placeholder='Username' 
          id='username'
          className='rInput' />
        <input 
          type="email" 
          placeholder='Email' 
          id='email'
          className='rInput' />
        <input 
          type="password" 
          placeholder='Password' 
          id='password'
          className='rInput' />

        <button className='regButton'>Register</button>
        <span className='rError'></span>
        <span className='rspan'>
            Have an account? <Link to="/login" style={{ textDecoration: "none" }}>Login</Link>
        </span>
    </div>
</div>
  )
}

export default Register;