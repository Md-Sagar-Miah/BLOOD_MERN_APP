import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './Login.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate=useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [loginValues,setLoginValues]=useState({
    email:"",
    password:"",
  })

  const handleSubmission=async(event)=>{
    event.preventDefault();

    await axios.post(`${BASE_URL}/login`,loginValues)
    .then((res)=>{
      localStorage.setItem("access_token",`${res.data.access_token}`);
      localStorage.setItem("id",`${res.data.id}`);
      localStorage.setItem("profileImage",`${res.data.image}`);
      navigate("/donors");
    })
    .catch(()=>{
      alert("Wrong Email or Password!")
    })

    }
    
     

  

  return (
    <>
    <Header />
    <Form id='loginPage'className='loginPage'>
    <h3>LOGIN :</h3>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" 
      onChange={(event)=>{
        setLoginValues((prev)=>({...prev,email:event.target.value}))
      }}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" 
      onChange={(event)=>{
        setLoginValues((prev)=>({...prev,password:event.target.value}))
      }}
      />
    </Form.Group>
    <Button className='btn' variant="primary" type="submit" onClick={handleSubmission}>
      Submit
    </Button>
  </Form>
  </>
  )
}

export default Login;
