import Home from "./components/HomePage/Home";
import Login from "./components/Login/Login";

import TopBar from "./components/Navbar/TopBar";
import LoanApplicationDetails from "./components/Pages/LoanApplicationDetails";
import Activity_Remark from "./components/Updation/Activity_Remark";
import Credit_Bearau_Details from "./components/Updation/Credit_Bearau_Details";
import SanctionDetails from "./components/Updation/SanctionDetails";
import StatusUpdation from "./components/Updation/StatusUpdation";
import Update_Disbursment_Details from "./components/Updation/Update_Disbursment_Details";


import React, { useEffect, useState  ,useMemo} from "react";
import Alert from "./components/Updation/Alert";
import LogoNavbar from "./components/Navbar/LogoNavbar";
import CheckDedupe from "./components/Modals/CheckDedupe";
import EditLoanApplicationDetails from "./components/Pages/EditLoanApplicationDetails";
import { Route, Router, Routes } from "react-router-dom";





function App() {


const [userName , setUserName] = useState('');


useEffect(() => {

// console.log("In App js useeffect");
  // console.log(  sessionStorage.getItem('authenticatedUser'));
  setUserName(sessionStorage.getItem('authenticatedUser'));
    
  }, [userName]);
  return (
    <>




  {/* <TopBar/> */}
  {/* <LogoNavbar /> */}
 

  
{/* <h3>This will be our Home page After User logged in </h3>
<Home/>

<h3>MIS Login Page</h3> */} 

 
 
{/* <Credit_Bearau_Details/>
    <StatusUpdation/>
     <Activity_Remark/>

    <SanctionDetails/>

    <Update_Disbursment_Details/> */}

    {/* <EditLoanApplicationDetails/> */}
    
<Routes>
  <Route exact path="/" element={<Login setUserName={setUserName }  />}/>
  <Route exact path="/home" element={<Home userName={userName} />}/>
  <Route exact path="/addnewuser" element={<LoanApplicationDetails userName={userName} />}/>
  <Route exact path="/edituser" element={<EditLoanApplicationDetails userName={userName}/>}/>
  <Route exact path="/updatedocactivity" element={<Activity_Remark userName={userName}/> }/>
  <Route exact path="/sanctiondetails" element={<SanctionDetails userName={userName} />}/>
  <Route exact path="/creditdetails" element={<Credit_Bearau_Details userName={userName}/>}/>
  <Route exact path="/updatestatus" element={<StatusUpdation userName={userName}/>}/>
  <Route exact path="/disbursment" element={<Update_Disbursment_Details  userName={userName}/>}/>
</Routes>

  
</>
  



  );
}

export default App;
