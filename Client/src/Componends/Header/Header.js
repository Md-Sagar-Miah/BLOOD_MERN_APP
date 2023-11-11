
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect} from 'react';
import axios from 'axios';


function Header(){
  const BASE_URL_IMAGE = process.env.REACT_APP_BASE_URL_IMAGE;
  const navigate = useNavigate();
  const profileImg=localStorage.getItem("profileImage");
  const token=localStorage.getItem("access_token");

  const visitPofile=(event)=>{
    if(token){
    navigate("/profile");
    }
  }

  return ( 
  <div className='head'>
    <Navbar className='nav-bg' expand="lg">
    <Container >
      <Navbar.Brand className='brand' id='brand' href="#">Blood</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0 me-0 ms-auto "
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <NavLink className='nav' to="/">Home</NavLink>
          <NavLink className='nav' to="/donors">Donors</NavLink> 
          {token?<></>:<><NavLink className='nav' to="/login" >Login</NavLink>
          <NavLink className='nav' to="/registration" >Registration</NavLink></>} 
          
          <NavLink className='nav' to="/about" >
            About Us
          </NavLink>
          {token?<NavLink  to="/profile" ><img onClick={visitPofile} src={`${BASE_URL_IMAGE}/${profileImg}`} alt="Profile" /></NavLink>:<></>}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header;
