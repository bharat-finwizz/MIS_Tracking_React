import React from "react";
import { useState, useEffect } from "react";

import { useNavigate} from 'react-router-dom';
const Login = () => {
  // let navigate=useNavigate();
  //     const [userid,setUserid]=useState("");
  //     const [password,setPassword]=useState("");


  //     useEffect(()=>{
  //       if(localStorage.getItem('user-info'))
  //       {
  //       navigate('/homepage');
  //     }

  //     },[])
  //    async function Login()
  //     {
  //       console.warn(userid,password)
  //       let item={userid,password};
  //       let result=await fetch("http://localhost:8020/login",{
  //         method:'GET',
  //         headers:{
  //           "Content-Type":"application/json",
  //           "Accept":"application/json"
  //         },
  //         body:JSON.stringify(item)



  //       });
  //       result=await result.json();
  //       localStorage.setItem("user-info",JSON.stringify(result))
  //       navigate('/homepage');
  //     }


  return (
    <>
      {/* <section className="vh-100">
  <div className="container py-5 h-100 justify-content-center align-items-center">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body d-flex justify-content-center">
              <form>
                  <p className="text-justify">Please login to your account</p>
                  
                  <div className="form-outline mb-4 justify-content-center align-items-center">
                  <label className="form-label" htmlFor="form2Example11">User id</label>
                    <input type="email" id="form2Example11" className="form-control"
                      placeholder="User id" />
                    
                  </div>

                  <div className="form-outline mb-4 justify-content-center align-items-center">
                  <label className="form-label" htmlFor="form2Example22">Password</label>
                    <input type="password" id="form2Example22" className="form-control" 
                    placeholder="Password"/>
                  </div>
                  
                  <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <button
      className="btn btn-primary"
      id="tab-login"
      data-mdb-toggle="pill"
      href="#pills-login"
      role="tab"
      aria-controls="pills-login"
      aria-selected="true"
      >Login</button>
    
  </li>
  <li className="nav-item" role="presentation">
    <button
      className="btn btn-primary"
      id="tab-register"
      data-mdb-toggle="pill"
      href="#pills-register"
      role="tab"
      aria-controls="pills-register"
      aria-selected="false"
      >Cancel</button>
    
  </li>
</ul>
  </form>
  </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section> */}


<section className="vh-100" style={{marginTop: '-20px'}} >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="card-body d-flex justify-content-center">

                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login into your account !</p>

                    <form className="mx-1 mx-md-4" >

                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-user fa-lg me-3 fa-fw"></i> */}
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example1c">User Id</label>
                          {/* <input type="text" id="form3Example1c" className="form-control" placeholder="User Id" onChange={(e)=>setUserid(e.target.value)}  required/> */}
                          <input type="text" id="form3Example1c" className="form-control" placeholder="User Id"   required/>

                        </div>
                      </div>
                      <br/>
                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example3c">Password</label>
                          <input type="text" id="form3Example3c" className="form-control" placeholder="Password"  required/>
                          {/* <input type="text" id="form3Example3c" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  required/> */}

                        </div>
                      </div>
                      <br/>
                      <div className="buttons">
                        <div className="text-center">
                          {/* <button className="btn btn-primary ms-1" onClick={Login}>Login</button> */}
                          <button className="btn btn-primary ms-1" >Login</button>

                          <button type="reset" className="btn btn-primary ms-3">Cancel</button>
                        </div>
                        </div>
                      <br/>
<div className="text-center">

        {/* <p>Not a member? <a href="#!" onClick={()=>{navigate("/register");}}>Register</a></p> */}
        <p>Not a member? <a href="#!">Register</a></p>
      </div>

                    </form>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    </>
  );
};
export default Login;
