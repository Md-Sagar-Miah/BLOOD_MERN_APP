import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate=useNavigate()
  const id=localStorage.getItem("id");
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

      const token = localStorage.getItem("access_token");
  
      const config = {
      headers: { Authorization: `Bearer ${token}` }
      };
      useEffect(()=>{
        axios.get(`${BASE_URL}/${id}`,config)
        .then((res)=>{
            const data=res.data;
            setValues({...data,password:""});
          
        })
      },[])
      const handleInputValue=(event)=>{
        setValues((prev)=>({...prev,[event.target.name]:event.target.value}))
      }
      const handleInputImage=(event)=>{
        setValues((prev)=>({...prev,[event.target.name]:event.target.files[0]}))
      }
      
      const handleSubmission=async(event)=>{
        event.preventDefault();
        if(values.name.length<3){
          alert("Name should be more than 2 character");
        }
        if(values.number.length<11){
          alert("Number should be equal or grather than 11");
        }
        if(values.password.length<8 && values.password!==""){
          alert("Password should be equal or grather than 8");
        }
        if(values.age<"18"){
          alert("Age should be equal or grather than 18");
        }
        if(values.name.length>=3 && values.blood!=="" && values.email!==""&&values.number.length>=11 && (values.password.length>=8||values.password.length===0) && values.gender!==""&& values.age>="18"){
          
          // const formData = new FormData()
          // formData.append("name",values.name);
          // formData.append("blood",values.blood);
          // formData.append("email",values.email);
          // formData.append("number",values.number);
          // if(values.password.length!==0){formData.append("password",values.password);}
          // formData.append("district",values.district);
          // if(values.image.length>0){formData.append("image",values.image);}
          // formData.append("gender",values.gender);
          // formData.append("age",values.age);
          
          await axios.patch(`${BASE_URL}/${id}`,{...values},config).then(()=>{
            alert("Update Successful !");
           
     
          }).catch((error)=>{
            alert(error.message);
          })
          
        }
        
        
    
      }

      const handleDeleteProfile=async()=>{
        await axios.delete(`${BASE_URL}/${id}`,config)
        .then(()=>{
          alert("Profile deleted !");
          localStorage.clear();
          navigate("/");
        }).catch(()=>{
          alert("Somthing Wrong!");
        })
      }

  return (
    <div className='contain'>
      <Header />
    <Form id='profile'className='registrationPage'>  
            <h3>PROFILE INFORMATION :</h3>
        <Form.Group className="mb-3" controlId="formBasicName" >
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="Enter your Full-Name" required 
              onChange={handleInputValue} value={values.name}
            />
        </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicBlood" >
        <Form.Label >Blood Group</Form.Label>
        <Form.Select aria-label="Default select" name='blood'
        onChange={handleInputValue} value={values.blood}
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
      onChange={handleInputValue} value={values.email}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicNumber">
      <Form.Label>Number</Form.Label>
      <Form.Control type="number" placeholder="Enter Number" name='number' required
      onChange={handleInputValue} value={values.number}
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
      onChange={handleInputValue} value={values.district}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicImage" >
            <Form.Label>Profile Image</Form.Label>
            <Form.Control type="file" placeholder="Select your Picture" name='image' required 
            onChange={handleInputImage} disabled
            />
    </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicAge">
      <Form.Label>Age</Form.Label>
      <Form.Control type="text" placeholder="Age" name='age' required
      onChange={handleInputValue} value={values.age}
      />
      </Form.Group>

      
    
    <div className='profile-btn'>
            <Button className='btn logout' variant="primary" 
            onClick={()=>{
              localStorage.clear()
              navigate("/login");
            }}>Logout</Button>
            <Button className='btn' variant="primary" onClick={handleSubmission}>Update</Button>
            <Button className='btn' variant="primary" onClick={handleDeleteProfile}>Delete Profile</Button>
        </div>
  </Form>
  </div>
  )
}

export default Profile;
