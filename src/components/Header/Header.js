import React from 'react';
import './Header.css';
import user_img from '../../images/user_img.png';
const Header = () => {
    return (
        <nav style={{marginTop:"10px",backgroundColor: "#e3f2fd",borderRadius:'10px'}}  class="navbar navbar-expand-lg  container ">
        <div class="container-fluid" >
          <a class="navbar-brand" href="#">Knowledge Academy</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cources</a>
              </li>
            </ul>
            {/* <span class="navbar-text">
              Navbar text with an inline element
            </span> */}
           {/* <img  style={{borderRadius:"10%",height:"50px",width:"50px"}}src={user_img}></img> */}
           <img style={{borderRadius:"50%",height:"50px",width:"50px"}} src='https://i.ibb.co/2h0d61b/rifat.jpg'></img>
          </div>
        </div>
      </nav>
    );
};

export default Header;