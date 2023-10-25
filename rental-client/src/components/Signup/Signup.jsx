import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './signup.css';

import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';


function Signup() {
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('landlord','admin','tennant');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

   async function  handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users', {firstName:firstName,
        lastName:lastName,
        phone:phone,
        email:email,
        role:role,
        password:password});
    
        
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.log(error.response);
      
    }

  }
  return (
    <Form className='signup-form' onSubmit={handleSubmit} method='POST' action='/api/users'>
        
        <div className='signup-one'>
      <Form.Group className="mb-3" controlId="formBasicFirstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Firstname" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Lastname" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
      </Form.Group>
      </div>
      <div className='signup-two'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicRole">
        <Form.Label>Select Role</Form.Label>
        <Form.Select  value={role} onChange={(e)=> setRole(e.target.value)}>
         <option value="select">select</option>
         <option value="landlord">landlord</option>
         <option value="admin">admin</option>
         <option value="tennant">tennant</option>
       </Form.Select>
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" style={{width:'100%'}}>
        Signup
      </Button>
      <Link to='/'>Already have account? Login</Link>
      </div>
    </Form>

  );
}

export default Signup;