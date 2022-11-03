import Home from "./components/HomePage/Home";
import Login from "./components/Login/Login";

import TopBar from "./components/Navbar/TopBar";
import LoanApplicationDetails from "./components/Pages/LoanApplicationDetails";
import StatusUpdation from "./components/Updation/StatusUpdation";







function App() {

  return (
    <>
   <TopBar/>
   
  {/* <Login/>

<h3>This will be our Home page After User logged in </h3>
<Home/>

<h3>MIS Login Page</h3> */}

{/* <LoanApplicationDetails/> */}

    <StatusUpdation/>
</>
  



  );
}

export default App;
