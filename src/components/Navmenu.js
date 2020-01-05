import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export class NavMenu extends Component{
    //static displayName = Home.name;
  
    render () {
        return (
            
<nav class="navbar navbar-area navbar-expand-lg nav-style-01">
<div class="container nav-container">
    <div class="responsive-mobile-menu">
        <div class="logo-wrapper mobile-logo">
            <a href="index.html" class="logo">
                <img src="assets/img/logo.png" alt="logo" style={{height:"70px !important;"}} />
</a>
</div>
            <div class="nav-right-content">
                <ul>
                    <li class="search">
                        <i class="ti-search"></i>
                    </li>
       
                        
</ul>
</div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Riyaqas_main_menu"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggle-icon">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </span>
                    </button>
</div>
                <div class="collapse navbar-collapse" id="Riyaqas_main_menu">
                    <div class="logo-wrapper desktop-logo">
                        <a href="index.html" class="logo">
                            <img src="assets/img/logo.png" alt="logo" style={{height:"70px !important;"}} />
                        </a>
                    </div>
                    <ul class="navbar-nav">
                   
                        <li class="active">
                        <Router>
                        <Link to="/" >Home</Link>
      </Router>
                           
                        </li>
                        <li>
                        <Router>
                        <Link to="/About" >About Us</Link>
      </Router>
                       
                          
                        </li>
                        <li>
                        <Router>
                        <Link to="/Services" >Our Companies</Link>
      </Router>
                       
                          
                        </li>
                        <li>
                        <Router>
                        <Link to="/Career" >Career</Link>
      </Router>
                       
                          
                        </li>
                        <li>
                        <Router>
                        <Link to="/Contact" >Contact Us</Link>
      </Router>
                       
                          
                        </li>
                    </ul>
                </div>
                <div class="nav-right-content">
                    <ul>
                        <li class="search">
                            <i class="ti-search"></i>
                        </li>
                       
                               
</ul>
</div>
</div>
</nav>
 );
}
}