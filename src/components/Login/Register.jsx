import axios from "axios";
import React from "react";
import { useState } from "react";

const Register=()=>
{

 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setrPassword] = useState("");
  
  async function handleSubmit(event)
  {
      event.preventDefault();
      try
        {
         await axios.post("http://localhost:8020/save",
        {
       
        name: name,
        email : email,
        password : password,
        rpassword: rpassword,
  
        });
          alert("User Registation Successfully");
         
          setName("");
          setEmail("");
          setPassword("");
          setrPassword("");
          
          
           
        
           
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
      }
   

 
   
  

  











    return(
        <>
        <section class="vh-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="card-body d-flex justify-content-center">
      
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register Yourself !</p>
                    
                      <form class="mx-1 mx-md-4" id="create-course-form" onSubmit={handleSubmit}>

                      
                      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">Your Name</label>
                            <input type="text" id="form3Example1c" class="form-control" onChange={(event)=>{setName(event.target.value)}}/>
                            
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example3c">Your Email</label>
                            <input type="email" id="form3Example3c" class="form-control" onChange={(event)=>{setEmail(event.target.value)}}/>
                           
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">Password</label>
                            <input type="password" id="form3Example4c" class="form-control" onChange={(event)=>{setPassword(event.target.value)}}/>
                            
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4cd">Repeat your password</label>
                            <input type="password" id="form3Example4cd" class="form-control" onChange={(event)=>{setrPassword(event.target.value)}}/>
                           
                          </div>
                        </div>
      
                        
                        <div class="buttons">
                        <container class="text-center">
                          <button class="btn btn-primary">Register</button>
                          <button  type="reset" class="btn btn-primary ms-5"  >Reset</button>
                        </container>
                        </div>
                      </form>
      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
    )
    
}
export default Register