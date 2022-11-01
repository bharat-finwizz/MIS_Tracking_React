import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import '../HomePage/HomePage.css';

const LogoNavbar = () => {
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;
    const userName = 'Swapnil'; 
  return (
   
  
    <>
    <div className="header-topbar"  >
    <div className="container " >
      <div className="row">
        <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6 col-6 d-none d-xl-block d-lg-block">
          <p className="mail-text"  style={{color: 'white'}}>Finwizz Retail Finance Pvt. Ltd.</p>
        </div>
        <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12 text-end" >
          <div className="top-nav top" > <span className="top-text"><a href="https://saralloan.com/view-location">View Locations</a> </span> 
		   <span className="top-text"><a href="https://saralloan.com/emi-calculator">EMI calculator</a></span>
		   <span className="top-text"><a href="tel:+1800 258 8333"><strong>
            <img src="https://saralloan.com/wp-content/themes/saralloan/images/call.png" alt='Call PNG'
            style={{height: '20px'}}/>&nbsp;&nbsp;+1800 258 8333</strong></a></span> </div>
        </div>
      </div>
    </div>
  </div>

<nav className="navbar navbar-expand-lg navbar-light bg-white py-3 top-shadow">
<div className="container"> <a href="https://saralloan.com" className="navbar-brand mx-4">
    <img src="https://saralloan.com/wp-content/themes/saralloan/images/logo.png"
     alt= "Borrow - Loan Company Website Template" /></a>
  <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="icon-bar top-bar mt-0"></span> <span className="icon-bar middle-bar"></span> <span className="icon-bar bottom-bar"></span> </button>
    
</div>

<div className='d-flex align-items-center'>


<span className="currentDate"><CalendarTodayIcon/> Todays Date:- {date}</span>
<span className='userName'><AccountCircleIcon/> userName:-{userName}</span>
<span className='notification'>Notifications<NotificationsIcon/></span>
<span className='LogOut'>Log out<LogoutIcon/></span>

</div>

</nav>
<hr className="divider mt-0" />
</>
  )
};

export default LogoNavbar