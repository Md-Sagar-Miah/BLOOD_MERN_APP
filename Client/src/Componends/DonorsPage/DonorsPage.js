import React, { useEffect, useState } from 'react';
import "./DonorsPage.css";
import Card from 'react-bootstrap/Card';
import Header from './../Header/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DonorsPage() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const BASE_URL_IMAGE = process.env.REACT_APP_BASE_URL_IMAGE;
  const navigate=useNavigate();
  const token = localStorage.getItem("access_token");
  
  const config = {
  headers: { Authorization: `Bearer ${token}` }
  };

  const [donors, setDonors]=useState([]);
  const [sblood,setBlood]=useState("");
  const [sDonors,setSearchDonors]=useState([]);
  
  var D=[];
  useEffect(()=>{
        if(token===null){
          navigate("/login")
        }
        axios.get(`${BASE_URL}`,config)
      .then((res)=>{
        setDonors(res.data)
        setSearchDonors(res.data);
        
      })
      .catch((error)=>{
        console.log(error);
      })
      
  },[]);

  const refressFun=()=>{
    if(token===null){
      navigate("/login")
    }
    axios.get(`${BASE_URL}`,config)
  .then((res)=>{
    setDonors(res.data)
    setSearchDonors(res.data);
  })
  .catch((error)=>{
    console.log(error);
  })

  }


  const handleSearch=(event)=>{
      setSearchDonors(donors);
      setBlood(event.target.value);
      
  }
  
  useEffect(()=>{
    if(sblood==="null"){
      refressFun();
    }
    if(sblood!==""){
      sDonors.map((result)=>{
        if(sblood===result.blood){
          D.push(result);
        
        }
        
      })
    }
    
    setSearchDonors(D);
    
  },[sblood])
  


  return (
  
  <>
    <Header />
    <div className="searchBar">
      <label htmlFor="sblood">Search Blood :</label>
      <select name="sblood" id="sblood" value={sblood} onChange={handleSearch}>
        <option value="null" >Select your blood group</option>
        <option value="A(+ve)">A(+ve)</option>
        <option value="A(-ve)">A(-ve)</option>
        <option value="B(+ve)">B(+ve)</option>
        <option value="B(-ve)">B(-ve)</option>
        <option value="AB(+ve)">AB(+ve)</option>
        <option value="AB(-ve)">AB(-ve)</option>
        <option value="O(+ve)">O(+ve)</option>
        <option value="O(-ve)">O(-ve)</option>
      </select>
    </div>
    <span className='cards'>
         
         
          {sDonors.map((data)=>{
            return(
              
              <Card className='card' id={data._id} key={data._id} >
              <Card.Img className='image' variant="top" src={`${BASE_URL_IMAGE}/${data.image}`} />
                <Card.Body>
                  <Card.Title className='title' >{data.name }</Card.Title>
                  <Card.Text>
                    <label>Blood Group : </label> {data.blood}
                  </Card.Text>
                  <Card.Text>
                    Age : {data.age}
                  </Card.Text>
                  <Card.Text>
                    Number : {data.number}
                  </Card.Text>
                  <Card.Text>
                    Email : {data.email}
                  </Card.Text>
                  
                  
                </Card.Body>
              </Card>
    
            
            );
          })
          }
       </span>
    </>
  )
}

export default DonorsPage;
