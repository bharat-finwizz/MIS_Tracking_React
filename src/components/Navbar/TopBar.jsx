import React from 'react'
import './Topbar.css'
const TopBar = () => {

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit clicked");
}
 



  return (
    <>

    {/* <!-- top-bar --> */}
<div className="header-topbar"  >
    <div className="container" >
      <div className="row">
        <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6 col-6 d-none d-xl-block d-lg-block">
          <p className="mail-text"  style={{color: 'white'}}>Finwizz Retail Finance Pvt. Ltd.</p>
        </div>
        <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12 text-end" >
          <div className="top-nav top" > <span className="top-text"><a href="https://saralloan.com/view-location">View Locations</a> </span> 
		   <span className="top-text"><a href="https://saralloan.com/emi-calculator">EMI calculator</a></span>
		   <span className="top-text"><a href="tel:+1800 258 8333"><strong>
            <img src="https://saralloan.com/wp-content/themes/saralloan/images/call.png" 
            style={{height: '20px'}}/>&nbsp;&nbsp;+1800 258 8333</strong></a></span> </div>
        </div>
      </div>
    </div>
  </div>

{/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 top-shadow">
    <div className="container"> <a href="https://saralloan.com" className="navbar-brand">
        <img src="https://saralloan.com/wp-content/themes/saralloan/images/logo.png"
         alt="Borrow - Loan Company Website Template"/></a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="icon-bar top-bar mt-0"></span> <span className="icon-bar middle-bar"></span> <span className="icon-bar bottom-bar"></span> </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        
			  
	    
		<ul className="navbar-nav ml-auto">
          <li className="nav-item"> <a className="nav-link " href="https://saralloan.com"> HOME </a> </li>
          <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#!" id="navbarBlog" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> ABOUT US </a>
            <div className="dropdown-menu" aria-labelledby="navbarBlog"> <a className="dropdown-item" href="https://saralloan.com/about-saral-loan/">ABOUT SARAL LOAN</a> <a className="dropdown-item" href="https://saralloan.com/board-of-director/">BOARD OF DIRECTORS</a> </div>
          </li>
          <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#!" id="navbarBlog" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> PRODUCTS </a>
            <div className="dropdown-menu" aria-labelledby="navbarBlog"> <a className="dropdown-item" href="https://saralloan.com/personal-loan/">PERSONAL LOAN</a> <a className="dropdown-item" href="https://saralloan.com/business-loan/">BUSINESS LOAN</a> <a className="dropdown-item" href="https://saralloan.com/loan-against-property/">LOAN AGAINST PROPERTY</a> <a className="dropdown-item" href="https://saralloan.com/used-car-loan/">USED CAR LOAN</a> </div>
          </li>
          <li className="nav-item"> <a className="nav-link " href="https://saralloan.com/contact-us/"> CONTACT US </a> </li>
        </ul>
		 
      </div>
    </div>
  </nav>


  <div className="justify-content-center d-flex align-items-center mt-5">
    <h1>This Page is Only for Internal staff of Saral Loan</h1>
   
  </div>
  <h3 className='mt-5 justify-content-center d-flex align-items-center'>
 
        Mis User Login System
     
    </h3>
    <div className="col-12 ">
    <button type="submit" className="btn btn-primary ml-5" onClick={ handleSubmit}>
      Sign in
      </button>
      
  </div>

</>
  )
}

export default TopBar