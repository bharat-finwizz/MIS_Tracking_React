import React from 'react'
import { Link } from 'react-router-dom'
import LogoNavbar from '../Navbar/LogoNavbar'

import './HomePage.css'
const Home = ({userName}) => {
  // console.log(sessionStorage.getItem("authenticatedUser"));

//    const currentDate = new Date();
//    const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;
//    const userName = 'Swapnil'; 
  return (
    <>
   <LogoNavbar data = {userName} />




{/* <h1> Logged In User Name is: {userName}</h1> */}
<h3 className='d-flex justify-content-center'>SARALLOAN DATALAKE</h3>




<div className="container h-auto mt-5">
  <div className="row vh-100">
  
    <div className="col-5 border border-dark " id='leftBox'>
        
    <div className="dropdown my-4 mx-4 ">
  <a className="btn btn-secondary  dropdown-toggle homebtn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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

<Link to={`/addnewuser`} className="btn btn-secondary mx-4 my-2 homebtn" role="button">Create/Maintain Loan Application details </Link>

<div className="dropdown my-4 mx-4">
  <a className="btn btn-secondary dropdown-toggle homebtn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Update Loan Application Processing Details 
  </a>

  <ul className="dropdown-menu ">
    <li><Link to={`/creditdetails`} className="dropdown-item" href="#">Update Credit Buereau  Details   </Link></li>
    <li><Link to={`/updatestatus`} className="dropdown-item" href="#">Update Loan Application Status Details </Link></li>
    <li><Link to={`/updatedocactivity`} className="dropdown-item" href="#">Update Documentation Activity  Tracking   Details </Link></li>
    <li><Link to={`/sanctionDetails`} className="dropdown-item" href="#">Update Sanction activity Details </Link></li>
    <li><Link to = {`/disbursment`} className="dropdown-item" href="#">Update Disbursal  activity Details </Link></li>
    <li><a className="dropdown-item" href="#">Update Loan Balancing  Details From LMS</a></li>
  </ul>
</div>


<div className="dropdown my-4 mx-4">
  <a className="btn btn-secondary dropdown-toggle homebtn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
     
    </div>
  
  </div>
</div>
</>

  )
}

export default Home