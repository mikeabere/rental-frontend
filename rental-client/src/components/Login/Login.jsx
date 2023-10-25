import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';


function Login() {
  
  const navigate = useNavigate();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 async function handleLogin(e){
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/api/login', {email:email,
     
      password:password});
  
      
    console.log(response.data);
    navigate('/Dashboard');
  } catch (error) {
    console.log(error.response);
    
  }
 }

  return (
    <Form className='login-form' onSubmit={handleLogin} action='/api/login' method='POST'>
        <h2>Login form</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{width:'100%'}}>
        Login
      </Button>
      <Link to='/Signup'>Don't have an account? Register here.</Link>
    </Form>
  );
}

export default Login;