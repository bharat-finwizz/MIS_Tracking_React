import Home from "./components/HomePage/Home";
import Login from "./components/Login/Login";

import TopBar from "./components/Navbar/TopBar";
import LoanApplicationDetails from "./components/Pages/LoanApplicationDetails";
import Activity_Remark from "./components/Updation/Activity_Remark";
import Credit_Bearau_Details from "./components/Updation/Credit_Bearau_Details";
import SanctionDetails from "./components/Updation/SanctionDetails";
import StatusUpdation from "./components/Updation/StatusUpdation";
import Update_Disbursment_Details from "./components/Updation/Update_Disbursment_Details";


import React, { useEffect, useState  } from "react";
import Alert from "./components/Updation/Alert";
import LogoNavbar from "./components/Navbar/LogoNavbar";
import CheckDedupe from "./components/Modals/CheckDedupe";





function App() {
  // Message Alert Handlers
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 3500);
}


  return (
    <>
  {/* <TopBar/> */}
  <LogoNavbar />
 

   {/* <Login/> */}

{/* <h3>This will be our Home page After User logged in </h3>
<Home/>

<h3>MIS Login Page</h3> */} 
 <Alert  alert={alert}  />
 
<LoanApplicationDetails   />
{/* <Credit_Bearau_Details/>
    <StatusUpdation/>
     <Activity_Remark/>

    <SanctionDetails/>

    <Update_Disbursment_Details/> */}

    
</>
  



  );
}

export default App;
