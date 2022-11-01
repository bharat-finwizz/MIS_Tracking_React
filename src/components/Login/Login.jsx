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
      {/* <section class="vh-100">
  <div class="container py-5 h-100 justify-content-center align-items-center">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body d-flex justify-content-center">
              <form>
                  <p class="text-justify">Please login to your account</p>
                  
                  <div class="form-outline mb-4 justify-content-center align-items-center">
                  <label class="form-label" for="form2Example11">User id</label>
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="User id" />
                    
                  </div>

                  <div class="form-outline mb-4 justify-content-center align-items-center">
                  <label class="form-label" for="form2Example22">Password</label>
                    <input type="password" id="form2Example22" class="form-control" 
                    placeholder="Password"/>
                  </div>
                  
                  <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <button
      class="btn btn-primary"
      id="tab-login"
      data-mdb-toggle="pill"
      href="#pills-login"
      role="tab"
      aria-controls="pills-login"
      aria-selected="true"
      >Login</button>
    
  </li>
  <li class="nav-item" role="presentation">
    <button
      class="btn btn-primary"
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


<section class="vh-100" style={{marginTop: '-20px'}} >
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="card-body d-flex justify-content-center">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login into your account !</p>

                    <form class="mx-1 mx-md-4" >

                      <div class="d-flex flex-row align-items-center mb-4">
                        {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}
                        <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c">User Id</label>
                          {/* <input type="text" id="form3Example1c" class="form-control" placeholder="User Id" onChange={(e)=>setUserid(e.target.value)}  required/> */}
                          <input type="text" id="form3Example1c" class="form-control" placeholder="User Id"   required/>

                        </div>
                      </div>
                      <br/>
                      <div class="d-flex flex-row align-items-center mb-4">
                        {/* <i class="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                        <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c">Password</label>
                          <input type="text" id="form3Example3c" class="form-control" placeholder="Password"  required/>
                          {/* <input type="text" id="form3Example3c" class="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  required/> */}

                        </div>
                      </div>
                      <br/>
                      <div class="buttons">
                        <container class="text-center">
                          {/* <button class="btn btn-primary ms-1" onClick={Login}>Login</button> */}
                          <button class="btn btn-primary ms-1" >Login</button>

                          <button type="reset" class="btn btn-primary ms-3">Cancel</button>
                        </container>
                        </div>
                      <br/>
<div class="text-center">

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
