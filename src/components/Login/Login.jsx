import { useState, useEffect } from "react";
// import "./Login.css";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoNavbar from "../Navbar/LogoNavbar";
import LoanApplicationDetailsService from "../../Services/LoanApplicationDetails.service";
import { useMemo } from "react";


const Login = ({setUserName}) =>{

const [usernamewhenloggedIn, setUsernamewhenloggedIn] = useState('')
  // console.log("inital value: " + UserName);



 const [isLoggedIn, setisLoggedIn] = useState(false);


  let navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  // const[LoggedIn,setLoggedIn]= useState("no")
  // let navigate=useNavigate();
  function failedtoast() {
    toast.error(" User not found !", {
      position: "top-center",
    });
  }

  function successtoast() {
    toast.success("Login Successful !", {
      position: "top-center",
    });
  }

  const { username, password } = login;

  const handleInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  useEffect(() => {}, []);

  const Login = async (e) => {
    e.preventDefault();
    // console.log(e);
// try {
//   LoanApplicationDetailsService.userLogin(login).then((res) =>{
// if(res.status==200){
//     console.log("Login successful");
//      navigate("/home");
  
// }
//   }).catch((err) => { console.log(err);})
// } catch (error) {
  
// }

    // try{
    //   console.log(login);
    //   return await axios.post(`http://localhost:8080/login`,login , {
        
    //   })
    //   .then((response) => {
    //    console.log("login successful")
    //     // successtoast()
    //   // setLoggedIn("yes")
    //   navigate("/home");
    //   //  console.log(LoggedIn)
    //   })
    // }
    //   catch(error){
    //     console.log(error);
    //       failedtoast()
    //   }

    try {
      // console.log(login);
      return await LoanApplicationDetailsService.executeBasicAuthenticationService(
        login.username,
        login.password
        

      )
        .then((response) => {
          console.log("basic auth serive response" +response);
          setUsernamewhenloggedIn(response.data);
// console.log(usernamewhenloggedIn);
successtoast();
          LoanApplicationDetailsService.registerSuccessfulLogin(
            login.username,
            login.password
          )
          setisLoggedIn(true);
     
         
          
        })
        .catch((error) => {
          console.log(error);
          failedtoast();
        });
    } catch (error) {
      console.log(error);
      failedtoast();
    }
  };

  // console.log(sessionStorage.getItem("authenticatedUser"));



  // console.log(usernamewhenloggedIn);

  // const usermemo = useMemo( () =>(
  //   {
  
  //      userName : usernamewhenloggedIn
  // }), [usernamewhenloggedIn]  );
  useEffect(() => {

  // console.log("I am logged in useffect");
  // console.log(  sessionStorage.getItem('authenticatedUser'));
  // setUserName(usernamewhenloggedIn)
  setUserName(sessionStorage.getItem('authenticatedUser'));
    
  }, [usernamewhenloggedIn]);
 

  useEffect(() =>{
    if(isLoggedIn===true)
    {
   
      navigate("/home")
    
    }else{
      navigate("/");
    }
  }, [isLoggedIn,navigate]);
  




  return (
    <>
      <LogoNavbar />
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="card-body d-flex justify-content-center">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login into your account !
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={Login}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example1c">
                              User Id
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="username"
                              value={username}
                              placeholder="User Id"
                              onChange={(e) => handleInputChange(e)}
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">
                              Password
                            </label>
                            <input
                              type="text"
                              id="form3Example3c"
                              className="form-control"
                              name="password"
                              value={password}
                              placeholder="Password"
                              onChange={(e) => handleInputChange(e)}
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div className="buttons">
                          <container  is="x3d" className="text-center">
                            <button className="btn btn-primary ms-1">Login</button>

                            <button type="reset" className="btn btn-primary ms-3">
                              Cancel
                            </button>
                          </container>
                        </div>
                        <br />
                        <div className="text-center">
                          <p>
                            Not a member?{" "}
                            <a
                              href="#!" /*onClick={()=>/*{navigate("/register");}}*/
                            >
                              Register
                            </a>
                          </p>
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
      <ToastContainer />
    </>
  );
}
export default Login;
