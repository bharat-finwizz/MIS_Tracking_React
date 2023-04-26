import React, { useEffect, useState  } from "react";

import LogoNavbar from "../Navbar/LogoNavbar";
import "./Credit_Bearau_Details.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import { useParams } from "react-router-dom";





const Credit_Bearau_Details = ({userName}) => {
  //all  states

 const [creditDetails,setCreditDetails]=useState({ 
  loan_application_number:"",
  loan_application_stage:"",
  loan_application_status:"",
  loan_application_processing_method:"",
  processing_activity:"",
  cibil_score:" ",
 crif_score:" ",
 processing_result:" ",
 processing_remark:" "
});

const [savedetails, setSavedetails] = useState({ status: "03-CRDT",entered_by:userName, last_modified_date: "" })


console.log(userName)
function recordtoast() {
  toast.error("Loan application number not found!", {
    position: "top-center"
  })
}

function updatetoast() {
  toast.success(" Applicant data updated successfully!", {
    position: "top-center"
  })
}

function updatefailedtoast() {
  toast.error("data updation failed!", {
    position: "top-center"
  })
}


const[data,setData]=useState([])
  



const{loan_application_number,loan_application_stage,loan_application_status,loan_application_processing_method,processing_activity,cibil_score,crif_score,processing_result,processing_remark}=creditDetails

const[value,setValue]=useState([]);
const[res,setRes]=useState([])



 const onInputChange=(e)=>{
          setCreditDetails({...creditDetails,[e.target.name]:e.target.value})
 }

 useEffect(() => {

  
  
  
  
    
  },[]);

  savedetails.user=userName
 
 const submit = async (e) => {
  e.preventDefault();
  try{  
   
  return await axios.post(`http://localhost:8080/credit/post/${loan_application_number}`,creditDetails)
  .then((response)=>
      {
       console.log("updated Successfully")
        updatetoast()
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds


       
        setSavedetails({
          ...savedetails, status: '03-CRDT',entered_by:userName,last_modified_date: date + '/' + month + '/' + year
            + ' ' + hours + ':' + min + ':' + sec
        })
        console.log(savedetails)
        
        statusupdate();
})
    }
catch{
        updatefailedtoast()
  }
    }

    const statusupdate = async () => {
      return await axios.post(`http://localhost:8080/details/savedetails/${loan_application_number}`, savedetails)
  
        .then((response) => {
          console.log("added successfully");
        })
        .catch((err) => console.log(err));
    }


  
    const onSearching = async () => {
      try {
        return await axios.get(`http://localhost:8080/details/getdetails/${loan_application_number}`)
          .then((response) => {
            if (response.status === 200) {
              console.log(response.data)
              setData(response.data)
              console.log("record found !")
            }
            handleSearch();
    
          })
      }
      catch
      {
         recordtoast()
      }
    
    
    }
 
   
  

    const handleSearch = async () => {
      
    
      return await axios.get(`http://localhost:8080/credit/get/${loan_application_number}`)
      .then((response)=>
      {
        
        setCreditDetails(response.data)
        setRes(response.data)
        
    })
    .catch((err)=>console.log(err));
    }
      
    
    
   

    const cancel = async () => {
      setCreditDetails({
        loan_application_stage:res.loan_application_stage,
        loan_application_status:res.loan_application_status,
        loan_application_processing_method:res.loan_application_processing_method,
        processing_activity:res.processing_activity,
        cibil_score:res.cibil_score,
        crif_score:res.crif_score,
        processing_result:res.processing_result,
        processing_remark:res.processing_remark
        
      })
    }
    

  return (
    <>
    
      <LogoNavbar data = {userName} />
      
     


         
        <div className="Form-Box">
          <div className="container" id="form-Container">
            <div className="row">
              <div className="col-sm-12">


                
                <form role="form"  />
                <div className="row mt-1 text-black">
                  <h3 className="d-flex justify-content-center">
                    Update Credit Bureau Details
                  </h3>
                </div>
               

                <div className="mb-3"></div>

               
                <div className="form-group" >
                  <div className="row">
                    <div className="col-sm-6">
                    <label className="control-label">Loan Application Number:</label>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control noscroll" name="loan_application_number" value={loan_application_number} onChange={(e) => onInputChange(e)} />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button" onClick={onSearching}>
                            Search
                          </button>
                        </div>
                      </div>
                    </div>

                  
                    
          
                
                    
                    <div className="col-sm-6">
                      <label className="control-label">
                        Application Date:
                      </label>
                      <input type="text" className="form-control noscroll" name="ad" value={data.loan_application_date} />
                    </div>
                  </div>
                </div>
                  
                 

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="control-label">
                        Entered By:
                      </label>
                      <input type="text" className="form-control noscroll" name="enter" value={data.entered_by} />
                    </div>
                    <div className="col-sm-6">
                      <label className="control-label">
                        Loan Applicant Name:
                      </label>

                      <input type="text" className="form-control noscroll" name="lapname" value={data.applicant_name}  />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="control-label">
                        Requested Loan Amount:
                      </label>
                      <input type="number" className="form-control noscroll" name="amt" value={data.requested_loan_amount} />
                    </div>
                    <div className="col-sm-6">
                      <label className="control-label">
                        Tenure:
                      </label>
                      <input type="number" className="form-control noscroll" name="tenure" value={data.loan_tenure} />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="control-label">
                        Application Stage:
                      </label>
                      <input type="text" className="form-control noscroll" name="loan_application_stage" value={creditDetails.loan_application_stage} onChange={(e) => onInputChange(e)}/>
                    </div>
                    <div className="col-sm-6">
                      <label className="control-label">
                        Application Status:
                      </label>
                      <input type="text" name="loan_application_status" className="form-control noscroll" value={creditDetails.loan_application_status}  onChange={(e) => onInputChange(e)}/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="control-label">
                        Application Processing Method:
                        </label>
                      <select
                        name="loan_application_processing_method"
                        className="form-control selectpicker" 
                         value={creditDetails.loan_application_processing_method} 
                         onChange={(e) => onInputChange(e)}
                      >
                        <option value="">Please select a Method</option>
                        <option>Income Surrogate</option>
                        <option>Banking Surrogate</option>
                        <option>GST Surrogate</option>

                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="control-label">
                        Processing Activity:
                      </label>
                      <select
                        name="processing_activity"
                        className="form-control selectpicker"
                        value={creditDetails.processing_activity}
                        >
                        <option value="">Credit Bureau Details</option>
                        
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="control-label">
                        CIBIL Score:
                      </label>
                      <input type="number" className="form-control noscroll" name="cibil_score" value={creditDetails.cibil_score} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="col-sm-6">
                      <label className="control-label">
                        CRIF Score:
                      </label>
                      <input type={"text"} className="form-control noscroll" name="crif_score" value={creditDetails.crif_score} onChange={(e) => onInputChange(e)} />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label className="control-label">
                        Processing Result:
                      </label>
                      <select
                        name={"processing_result"}
                        value={creditDetails.processing_result}
                        onChange={(e) => onInputChange(e)}
                    >
                      <option value="">Select a Processing Result</option>
                      <option value="Positive">Positive</option>
                      <option value="Negative">Negative</option>
                    
                   </select>
                    </div>

                  </div>
                </div>

             
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-12">
                      <label className="control-label">Processing Remarks:</label>
                      <textarea
                        id="message"
                        className="form-control"
                        rows="5"
                        name="processing_remark"
                         value={creditDetails.processing_remark}
                         onChange={(e) => onInputChange(e)}
                      ></textarea>
                    </div>

                   
                 
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <button type="button" className="btn btn-primary ms-1" onClick={(e)=>submit(e)}>
                            <i className="bi-pencil"></i> Update
                          </button>

                          <button type="reset" className="btn btn-primary ms-3" onClick={cancel}>
                            <i className="bi-trash"></i> Cancel
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              


                <form />


              </div>
            </div>
          </div>
        </div>
         
       
        <ToastContainer/>
       
    </>
  );
};
export default Credit_Bearau_Details;