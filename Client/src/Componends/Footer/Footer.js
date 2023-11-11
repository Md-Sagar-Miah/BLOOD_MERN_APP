import React from 'react';
import "./Footer.css";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate=useNavigate()
  return (
    <footer className="page-footer bg-danger font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Create Blood Relation</h5>
                <p>Here we provide the sevice of finding blood donors and dontating blood free to the people.You can donate blood to save one's life.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Help</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" onClick={()=>navigate("/about")}>Support</a></li>
                    <li><a href="#!" onClick={()=>navigate("/login")}>Sign In</a></li>
                    <li><a href="#!" onClick={()=>navigate("/registration")}>Registration</a></li>
                    
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" onClick={()=>navigate("/about")} >About us</a></li>
                    <li><a href="#!" onClick={()=>navigate("/about")}>Why Us</a></li>
                    <li><a href="#!"onClick={()=>navigate("/")}>Bloog</a></li>
                    
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© Created By:
        <a target='_blank' href="https://www.facebook.com/sagar.sa2065"> Sagar</a>
    </div>

</footer>
  )
}

export default Footer;
