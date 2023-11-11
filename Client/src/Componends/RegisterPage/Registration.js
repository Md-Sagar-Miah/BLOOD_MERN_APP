import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './../LoginPage/Login.css';
import './Registration.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';


function Registration() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate=useNavigate();

  const [values,setValues]=useState({
    name:"",
    blood:"",
    email:"",
    number:"",
    password:"",
    district:"",
    image:"",
    gender:"",
    age:"",
  })
  const handleInputValue=(event)=>{
    setValues((prev)=>({...prev,[event.target.name]:event.target.value}))
  }
  const handleInputImage=(event)=>{
    setValues((prev)=>({...prev,[event.target.name]:event.target.files[0]}))
  }
  
  const handleSubmission=async(event)=>{
    event.preventDefault();
    if(values.name.length>=3 && values.blood!=="" && values.email!==""&&values.number.length>=11 && values.password.length>=8 && values.image!==""&& values.gender!==""&& values.age>="18"){
      
      const formData = new FormData()
      formData.append("name",values.name);
      formData.append("blood",values.blood);
      formData.append("email",values.email);
      formData.append("number",values.number);
      formData.append("password",values.password);
      formData.append("district",values.district);
      formData.append("image",values.image);
      formData.append("gender",values.gender);
      formData.append("age",values.age);
      
      await axios.post(`${BASE_URL}`,formData).then(()=>{
        alert("Regitration Successful !");
        navigate("/login");
        
      }).catch(()=>{
        alert("Email is already used !");
      })
      
    }
    if(values.name.length<3){
      alert("Name should be more than 2 character");
    }
    if(values.number.length<11){
      alert("Number should be equal or grather than 11");
    }
    if(values.password.length<8){
      alert("Password should be equal or grather than 8");
    }
    if(values.age<"18"){
      alert("Age should be equal or grather than 18");
    }
    

  }


  return (
    <div className='contain'>
      <Header />
    <Form id='registrationPage'className='registrationPage'>
        <h3>REGISTRATION :</h3>
        <Form.Group className="mb-3" controlId="formBasicName" >
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="Enter your Full-Name" required 
              onChange={handleInputValue}
            />
        </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicBlood" >
        <Form.Label >Blood Group</Form.Label>
        <Form.Select aria-label="Default select" name='blood'
        onChange={handleInputValue}
        >
        <option  >Select your blood group</option>
        <option value="A(+ve)">A(+ve)</option>
        <option value="A(-ve)">A(-ve)</option>
        <option value="B(+ve)">B(+ve)</option>
        <option value="B(-ve)">B(-ve)</option>
        <option value="AB(+ve)">AB(+ve)</option>
        <option value="AB(-ve)">AB(-ve)</option>
        <option value="O(+ve)">O(+ve)</option>
        <option value="O(-ve)">O(-ve)</option>
        
        </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name='email' required
      onChange={handleInputValue}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicNumber">
      <Form.Label>Number</Form.Label>
      <Form.Control type="number" placeholder="Enter Number" name='number' required
      onChange={handleInputValue}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name='password' required
      onChange={handleInputValue}
      />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicDistrict">
      <Form.Label>District</Form.Label>
      <Form.Control type="text" placeholder="District" name='district' required
      onChange={handleInputValue}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicImage" >
            <Form.Label>Profile Image</Form.Label>
            <Form.Control type="file" placeholder="Select your Picture" name='image' required 
            onChange={handleInputImage}
            />
    </Form.Group>
    <Form.Group className="mb-3">
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                    inline
                    label="Men"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    onChange={(event)=>{
                      setValues((prev)=>({...prev,gender:"male"}))
                    }}
                />
                <Form.Check
                    inline
                    label="Women"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    onChange={(event)=>{
                      setValues((prev)=>({...prev,gender:"female"}))
                    }}
                />
                <Form.Check
                    inline
                    label="Other"
                    type={type}
                    name="group1"
                    id={`inline-${type}-3`}
                    onChange={(event)=>{
                      setValues((prev)=>({...prev,gender:"other"}))
                    }}
                />
                </div>
            ))}
            
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
      <Form.Label>Age</Form.Label>
      <Form.Control type="text" placeholder="Age" name='age' required
      onChange={handleInputValue}
      />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      
    <Button className='btn' variant="primary" type="submit" onClick={handleSubmission}>
      Submit
    </Button>
  </Form>
  </div>
  )
}

export default Registration;
