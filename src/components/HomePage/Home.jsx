import React from 'react'
import LogoNavbar from '../Navbar/LogoNavbar'

import './HomePage.css'
const Home = () => {

//    const currentDate = new Date();
//    const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;
//    const userName = 'Swapnil'; 
  return (
    <>
   <LogoNavbar/>


<h3 className='d-flex justify-content-center'>Loan application Tracking and Disbursement MIS system</h3>




<div className="container h-auto mt-5">
  <div className="row vh-100">
  
    <div className="col-5 border border-dark " id='leftBox'>
        
    <div className="dropdown my-4 mx-4 ">
  <a className="btn btn-secondary  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Master Maintenance 
  </a>

  <ul className="dropdown-menu ">
    <li><a className="dropdown-item" href="#">Product Master  </a></li>
    <li><a className="dropdown-item" href="#">State Master</a></li>
    <li><a className="dropdown-item" href="#">Location Master</a></li>
    <li><a className="dropdown-item" href="#">Sales Team Maintenance</a></li>
    <li><a className="dropdown-item" href="#">Processing Steps</a></li>
  </ul>
</div>

<a className="btn btn-secondary mx-4 my-2" role="button">Create/Maintain Loan Application details </a>

<div className="dropdown my-4 mx-4">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Update Loan Application Processing Details 
  </a>

  <ul className="dropdown-menu ">
    <li><a className="dropdown-item" href="#">Update Credit Buereau  Details   </a></li>
    <li><a className="dropdown-item" href="#">Update Documentation Activity  Tracking   Details </a></li>
    <li><a className="dropdown-item" href="#">Update Sanction activity Details </a></li>
    <li><a className="dropdown-item" href="#">Update Disbursal  activity Details </a></li>
    <li><a className="dropdown-item" href="#">Update Loan Balancing  Details From LMS</a></li>
  </ul>
</div>


<div className="dropdown my-4 mx-4">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   Generate MIS
  </a>

  <ul className="dropdown-menu ">
   
    <li><a className="dropdown-item " href="#">Login MIS</a></li>
    <li><a className="dropdown-item" href="#">Dibursal MIS </a></li>
    <li><a className="dropdown-item" href="#">Performance MIS </a></li>
    <li><a className="dropdown-item" href="#">AUM MIS </a></li>
  </ul>
</div>


    </div>
    <div className="col border border-dark mx-my-ml-n5" id='rightBox'>
     This Space is to display data on base on Dropdown selected
    </div>
  
  </div>
</div>
</>

  )
}

export default Home