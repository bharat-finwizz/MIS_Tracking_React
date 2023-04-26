// import React from 'react'

// const Update_Disbursment_Details = () => {
//     const onSearchHandled = () =>{
//         alert("Searching in the Database...")
//     }
//   return (
//     <>
  
// <h3 className="d-flex justify-content-center">
//        Update Disbursment Details
//       </h3>


//       <div className="Form-Box">
//         <div className="container" id="form-Container">
//           <div className="row">
//             <div className="col-sm-12">
//               <form role="form"  />






// {/* Search Bar First row form Group */}
// <div className="form-group">
//                 <div className="row">
//                   <div className="col-sm-4">
//                     <label className="control-label">Loan Application Number:</label>
//                     <div className="input-group mb-3">
//                       <input type="number" className="form-control noscroll" />
//                       <div className="input-group-append">
//                         <button onClick={onSearchHandled} className="btn btn-primary" type="button">
//                           Search
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-sm-4">
//                   <label className="control-label">Application Date:</label>
//                   <div className="input-group mb-3">
//                       <input type="text" disabled className="form-control noscroll" />
                     
//                     </div>

//                     </div>
                        
//                     <div className="col-sm-4">
//                   <label className="control-label">Entered by:</label>
//                   <div className="input-group mb-3">
//                       <input type="text" disabled className="form-control noscroll" />
                     
//                     </div>

//                     </div>
//                   </div>
//                   </div>

// {/* Second Row */}
//                   <div className="form-group">
//                 <div className="row">
//                   <div className="col-sm-4">
//                     <label className="control-label">Loan Applicant Name:</label>
//                     <div className="input-group mb-3">
//                       <input type="number" disabled className="form-control noscroll" />
                    
//                     </div>
//                   </div>

//                   <div className="col-sm-4">
//                   <label className="control-label">Requested Loan Amount:</label>
//                   <div className="input-group mb-3">
//                       <input type="text" disabled className="form-control noscroll" />
                     
//                     </div>

//                     </div>
                        
//                     <div className="col-sm-4">
//                   <label className="control-label">Tenure:</label>
//                   <div className="input-group mb-3">
//                       <input type="text" disabled className="form-control noscroll" />
                     
//                     </div>

//                     </div>
//                   </div>
//                   </div>

// {/* Third Row */}
// <div className="form-group">
//                 <div className="row">
//                   <div className="col-sm-4">
//                     <label className="control-label">Application stage:</label>
//                     <div className="input-group mb-3">
//                       <input type="text"  className="form-control noscroll" />
                    
//                     </div>
//                   </div>

//                   <div className="col-sm-4">
//                   <label className="control-label">Application status:</label>
//                   <div className="input-group mb-3">
//                       <input type="text"  className="form-control noscroll" />
                     
//                     </div>

//                     </div>
                        
//                     <div className="col-sm-4">
//                   <label className="control-label">Application Processing Method:</label>
//                   <div className="input-group mb-3">
                      
//                       <select
//                       name="sourcing"
//                       className="form-control selectpicker"
//                     >
//                       <option value="">Please select a method</option>
//                       <option>Income Surrogate</option>
//                       <option>Banking Surrogate</option>
//                       <option>GST Surrogate</option>
                    
//                     </select>
//                     </div>

//                     </div>
//                   </div>
//                   </div>
//   {/* Fourth Row */}
//   <div className="form-group">
//                 <div className="row">
//                 <div className="col-sm-4">
//                   <label className="control-label">Application Processing Activity:</label>
//                   <div className="input-group mb-3">
                      
//                       <select
//                       name="sourcing"
//                       className="form-control selectpicker"
//                     >
//                       <option value="Sanction">Sanction</option>
//                       {/* <option value="">Select a Processing Activity</option>
//                       <option value="Documentation Submission" >Documentation Submission</option>
//                       <option value="Follow up">Follow up</option>
//                       <option value="Response from Sales Person">Response from Sales Person</option> */}
                     
                    
//                     </select>
//                     </div>

//                     </div>

//                     <div className="col-sm-4">
//                   <label className="control-label">Sanction:</label>
//                   <div className="input-group mb-3">
                      
//                       <select
//                       name="sourcing"
//                       className="form-control selectpicker"
//                     >
//                       <option value="">Select a Processing Activity</option>
//                       <option value="Sanction">Sanction</option>
//                       <option value="Reject" >Reject</option>
//                       <option value="Put on Hold">Put on Hold</option>
                    
                     
                    
//                     </select>
//                     </div>

//                     </div>
//                     <div className="col-sm-4">
//                   <label className="control-label">Sanction By:</label>
//                   <div className="input-group mb-3" >
//                   <input type="text" disabled className="form-control noscroll" />
                      
                      
//                     </div>

//                     </div>


//                     </div>
//                     </div>

//                     <div className="form-group">
//                 <div className="row">
//                   <div className="col-sm-4">
//                     <label className="control-label">Sanction Number:</label>
//                     <div className="input-group mb-3">
//                       <input type="number" disabled className="form-control noscroll" />
                      
//                     </div>
//                   </div>

//                   <div className="col-sm-4">
//                     <label className="control-label">Sanction Amount:</label>
//                     <div className="input-group mb-3">
//                       <input type="number" disabled className="form-control noscroll" />
                      
//                     </div>
//                   </div>
                        
//                   <div className="col-sm-4">
//                     <label className="control-label">Sanction Tenure(in months):</label>
//                     <div className="input-group mb-3">
//                       <input type="number" disabled className="form-control noscroll" />
                      
//                     </div>
//                   </div>
//                   </div>
//                   </div>


//                   <div className="form-group">
//                 <div className="row">
                

//                   <div className="col-sm-4">
//                     <label className="control-label">Sanction ROI:</label>
//                     <div className="input-group mb-3">
//                       <input type="text" disabled className="form-control noscroll" />
                      
//                     </div>
//                   </div>
                        
//                   <div className="col-sm-4">
//                     <label className="control-label">EMI Amount:</label>
//                     <div className="input-group mb-3">
//                       <input type="number" disabled className="form-control noscroll" />
                      
//                     </div>
//                   </div>

//                   <div className="col-sm-4">
//                     <label className="control-label">Processing Fee:</label>
//                     <div className="input-group mb-3">
//                       <input type="number" disabled className="form-control noscroll" />
                      
//                     </div>
//                   </div>
//                   </div>
//                   </div>

// <div className="form-group">
//                 <div className="row">
//                   <div className="col-sm-12">
//                     <label className="control-label">Sanction Remarks:</label>
//                     <textarea
//                     disabled
//                       id="message"
//                       className="form-control"
//                       rows="3"
//                       name="message"
//                     ></textarea>
//                   </div>
//                   </div>
//                   </div>

//                   <div className="form-group">
//                 <div className="row">

//                 <div className="col-sm-4">
//                     <label className="control-label">
//                       Select Disbursment Date:
//                     </label>
//                     <div className="col-sm-10">
//                       <div className="input-group date" id="datepicker">
//                         <input type="text" className="form-control" />
//                         <span className="input-group-append">
//                           <span className="input-group-text bg-white d-block">
//                             <i className="fa fa-calendar"></i>
//                           </span>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                         <div className="col-sm-4">
//                     <label className="control-label">Disbursment Amount:</label>
//                     <div className="input-group mb-3">
//                       <input type="number" disabled className="form-control noscroll" />
                      
//                     </div>
//                   </div>
                        
//                   <div className="col-sm-4">
//                     <label className="control-label">Tenure(in months):</label>
//                     <div className="input-group mb-3">
//                       <input type="number" disabled className="form-control noscroll" />
                      
//                     </div>
//                   </div>
//                     </div>
//                     </div>

//                     <div className="form-group">
//                 <div className="row">

//                 <div className="col-sm-4">
//                     <label className="control-label">
//                       Select EMI Start Date:
//                     </label>
//                     <div className="col-sm-10">
//                       <div className="input-group date" id="datepicker">
//                         <input type="text" className="form-control" />
//                         <span className="input-group-append">
//                           <span className="input-group-text bg-white d-block">
//                             <i className="fa fa-calendar"></i>
//                           </span>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-sm-4">
//                     <label className="control-label">
//                       Select EMI End Date:
//                     </label>
//                     <div className="col-sm-10">
//                       <div className="input-group date" id="datepicker">
//                         <input type="text" disabled className="form-control" />
//                         <span className="input-group-append">
//                           <span className="input-group-text bg-white d-block">
//                             <i className="fa fa-calendar"></i>
//                           </span>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   </div>
//                   </div>


//                   <div className="form-group">
//                 <div className="row">
//                   <div className="col-sm-4">
//                     <label className="control-label">Customer Number:</label>
//                     <div className="input-group mb-3">
//                       <input type="number" className="form-control noscroll" />
                    
//                     </div>
//                   </div>

//                   <div className="col-sm-4">
//                   <label className="control-label">Loan Account Number:</label>
//                   <div className="input-group mb-3">
//                       <input type="number"  className="form-control noscroll" />
                     
//                     </div>

//                     </div>
                        
//                     <div className="col-sm-4">
//                   <label className="control-label">CGST Amount:</label>
//                   <div className="input-group mb-3">
//                       <input type="text"  className="form-control noscroll" />
                     
//                     </div>

//                     </div>
//                   </div>
//                   </div>

//                   <div className="form-group">
//                 <div className="row">
//                   <div className="col-sm-4">
//                     <label className="control-label">Processing Fee:</label>
//                     <div className="input-group mb-3">
//                       <input type="number" className="form-control noscroll" />
                    
//                     </div>
//                   </div>

                 
                        
//                     <div className="col-sm-4">
//                   <label className="control-label">SGST Amount:</label>
//                   <div className="input-group mb-3">
//                       <input type="text"  className="form-control noscroll" />
                     
//                     </div>

//                     </div>

//                     <div className="col-sm-4">
//                   <label className="control-label"> Disbursment Mode:</label>
//                   <div className="input-group mb-3">
                      
//                       <select
//                       name="sourcing"
//                       className="form-control selectpicker"
//                     >
//                       <option value="">Please select a Disbursment Mode</option>
//                       <option value="Cheque">Cheque</option>
//                       <option value="Bank Transfer-NACH" >Bank Transfer-NACH</option>
//                      {/*  <option value="Follow up">Follow up</option>
//                       <option value="Response from Sales Person">Response from Sales Person</option> */}
                     
                    
//                     </select>
//                     </div>

//                     </div>
//                   </div>
//                   </div>

//                   <div className="form-group">
//                 <div className="row">
//                 <div className="col-sm-4">
//                   <label className="control-label"> Loan Status:</label>
//                   <div className="input-group mb-3">
                      
//                       <select
//                       name="sourcing"
//                       className="form-control selectpicker"
//                     >
//                       <option value="">Please select a Loan Status</option>
//                       <option value="Sanction"> xyz</option>
//                       <option value="Documentation Submission" >xyz</option>
//                      {/*  <option value="Follow up">Follow up</option>
//                       <option value="Response from Sales Person">Response from Sales Person</option> */}
                     
                    
//                     </select>
//                     </div>

//                     </div>
//                     <div className="col-sm-4">
//                     <label className="control-label">NACH Status:</label>
//                     <div className="input-group mb-3">
//                       <input type="number" className="form-control noscroll" />
                    
//                     </div>
//                   </div>

                 
                        
//                     <div className="col-sm-4">
//                   <label className="control-label">UMRN Number:</label>
//                   <div className="input-group mb-3">
//                       <input type="text"  className="form-control noscroll" />
                     
//                     </div>

//                     </div>
//                 </div>
//                   </div>

//                   <div className="form-group">
//                 <div className="row">
//                 <div className="col-sm-4">
//                   <label className="control-label">Payee Name:</label>
//                   <div className="input-group mb-3">
                      
//                   <input type="text" className="form-control noscroll" />
                    
//                     </div>

//                     </div>
//                     <div className="col-sm-4">
//                     <label className="control-label">IFSC Code:</label>
//                     <div className="input-group mb-3">
//                       <input type="text" className="form-control noscroll" />
                    
//                     </div>
//                   </div>

                 
                        
//                     <div className="col-sm-4">
//                   <label className="control-label">MICR Code:</label>
//                   <div className="input-group mb-3">
//                       <input type="number"  className="form-control noscroll" />
                     
//                     </div>

//                     </div>
//                 </div>
//                   </div>

//                   <div className="form-group">
//                 <div className="row">
//                 <div className="col-sm-4">
//                   <label className="control-label">Bank Account Number:</label>
//                   <div className="input-group mb-3">
                      
//                   <input type="number" className="form-control noscroll" />
                    
//                     </div>

//                     </div>
//                     <div className="col-sm-4">
//                     <label className="control-label">Bank Name:</label>
//                     <div className="input-group mb-3">
//                       <input type="text" className="form-control noscroll" />
                    
//                     </div>
//                   </div>

                 
                        
//                     <div className="col-sm-4">
//                   <label className="control-label">Branch Name:</label>
//                   <div className="input-group mb-3">
//                       <input type="text"  className="form-control noscroll" />
                     
//                     </div>

//                     </div>
//                 </div>
//                   </div>

//                   <div className="form-group">
//                 <div className="row">
//                   <div className="col-sm-7">
// <button type="button  "  className="btn btn-warning fourButtons w-50 py-2 "  >
//             <i className="bi-pencil"></i> Update Disbursment Details
//         </button>
// </div>


// <div className="col-sm-5">
// <button type="button" id="exitButton" className="btn btn-secondary fourButtons"  >
//             <i className="bi bi-x-circle"></i> Cancel
//         </button>
// </div>
// </div>
// </div>


//                   <form/>
// </div>
// </div>
// </div>
// </div>
//                </>
//   )
// }

// export default Update_Disbursment_Details





import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogoNavbar from "../Navbar/LogoNavbar";

const Update_Disbursment_Details = ({userName}) => {
console.log(userName + "  is using this current Session");



  const [disbursmentDetails, setdisbursmentDetails] = useState([])

  const [disb, setDisb] = useState([])


  const [disbursment, setDisbursment] = useState({ status: "09-DISB",entered_by:userName ,last_modified_date:"" })

  const [details, setDetails] = useState({
    loan_application_number: "",
    loan_application_stage: "",
    loan_application_status: "",
    loan_application_processing_method: "",
    emi_amount: "",
    customer_number: "",
    cgst_amount: "",
    sgst_amount: "",
    loan_account_number: "",
    processing_fee: "",
    disbursement_amount: "",
    disbursment_date: "",
    disbursment_mode: "",
    disbursment_roi: "",
    disbursment_emi_amount: "",
    disbursment_tenure: "",
    disbursment_start_date: "",
    disbursment_installment_frequency: "",
    disbursment_loan_due_date: "",
    payee_name: "",
    payee_bank_name: "",
    payee_branch_name: "",
    ifsc_code: "",
    micr_code: "",
    payee_bank_account_number: "",
    nach_status: "",
    umrn_number: "",
    entered_by:userName,
    entered_on: "",
    last_modified_date: "",
    emi_start_date: "",
    emi_end_date: ""

  })



  useEffect(() => {
setDetails({...details,entered_by:userName})

setDisbursment({...disbursment,entered_by:userName})



  }, []);

 console.log(details)

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


  



  const {loan_application_number, loan_application_stage, loan_application_status, loan_application_processing_method, emi_amount, customer_number, cgst_amount,
    sgst_amount, loan_account_number, processing_fee, disbursement_amount, disbursment_date, disbursment_mode, disbursment_roi, disbursment_emi_amount,
    disbursment_tenure, disbursment_start_date, disbursment_installment_frequency, disbursment_loan_due_date, payee_name, payee_bank_name, payee_branch_name,
    ifsc_code, micr_code, payee_bank_account_number, nach_status, umrn_number, entered_by, entered_on, emi_start_date, emi_end_dater} = details








  const onInputChange = (e) => {

    setDetails({ ...details, [e.target.name]: e.target.value })

  }

  useEffect(() => {


    onUpdate();


  }, []);


  // console.log(loan_application_number)
  const onSearching = async () => {
    try {
      return await axios.get(`http://localhost:8080/disb/getdetails/${loan_application_number}`)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data)
            setdisbursmentDetails(response.data)
            console.log("record found !")
          }

          onSearchHandled();


        })
    }
    catch
    {
       recordtoast()
    }


  }

  
  

  const onSearchHandled = async () => {
    return await axios.get(`http://localhost:8080/disbursement/get/${loan_application_number}`)
      .then((response) => {
        console.log(response.data)
        setDetails(response.data)


      })
      .catch((err) => console.log(err));

  }







  const onUpdate = async (e) => {

    e.preventDefault();
    try {
          // console.log("value");
          // console.log(entered_by);
        console.log("sending data to processing table ");
console.log(details);
      return await axios.post(`http://localhost:8080/disbursement/post/${loan_application_number}`, details)
        .then((response) => {
        
        
            console.log("updated successfully");
          updatetoast()



          var date = new Date().getDate();
          var month = new Date().getMonth();
          var year = new Date().getFullYear();
          var hours = new Date().getHours();
          var min = new Date().getMinutes();
          var sec = new Date().getSeconds();

          setDisbursment({
            ...disbursment, status: '09-DISB',entered_by:userName ,last_modified_date: date + '/' + month + '/' + year
              + ' ' + hours + ':' + min + ':' + sec
         })
         
         
          statusupdate();
          
            // setDetails({
            //   loan_application_number: "",
            //   loan_application_stage: "",
            //   loan_application_status: "",
            //   loan_application_processing_method: "",
            //   emi_amount: "",
            //   customer_number: "",
            //   cgst_amount: "",
            //   sgst_amount: "",
            //   loan_account_number: "",
            //   processing_fee: "",
            //   disbursement_amount: "",
            //   disbursment_date: "",
            //   disbursment_mode: "",
            //   disbursment_roi: "",
            //   disbursment_emi_amount: "",
            //   disbursment_tenure: "",
            //   disbursment_start_date: "",
            //   disbursment_installment_frequency: "",
            //   disbursment_loan_due_date: "",
            //   payee_name: "",
            //   payee_bank_name: "",
            //   payee_branch_name: "",
            //   ifsc_code: "",
            //   micr_code: "",
            //   payee_bank_account_number: "",
            //   nach_status: "",
            //   umrn_number: "",
            //   entered_by:userName,
            //   entered_on: "",
            //   last_modified_date: "",
            //   emi_start_date: "",
            //   emi_end_date: ""
            // })



        })
    }
    catch
    {
      updatefailedtoast()
    }
  }

  const statusupdate = async () => {
   
    return await axios.post(`http://localhost:8080/details/savedetails/${loan_application_number}`, disbursment)

      .then((response) => {
        console.log("added successfully");
      })
      .catch((err) => console.log(err));
  }



  return (
    <>
<LogoNavbar data = {userName} />
<h3 className="d-flex justify-content-center">
       Update Disbursment Details
      </h3>


      <div className="Form-Box">
        <div className="container" id="form-Container">
          <div className="row">
            <div className="col-sm-12">
              <form role="form"  />






{/* Search Bar First row form Group */}
<div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">Loan Application Number:</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control noscroll" id="lan2" name="loan_application_number" value={loan_application_number} onChange={(e) => onInputChange(e)} />
                      <div className="input-group-append">
                        <button onClick={onSearching} className="btn btn-primary" type="button">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <label className="control-label">Application Date:</label>
                  <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" value={disbursmentDetails.loan_application_date} />

                    </div>

                    </div>

                    <div className="col-sm-4">
                  <label className="control-label">Entered by:</label>
                  <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" value={disbursmentDetails.entered_by} />

                    </div>

                    </div>
                  </div>
                  </div>

{/* Second Row */}
                  <div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">Loan Applicant Name:</label>
                    <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" value={disbursmentDetails.applicant_name} />

                    </div>
                  </div>

                  <div className="col-sm-4">
                  <label className="control-label">Requested Loan Amount:</label>
                  <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" value={disbursmentDetails.requested_loan_amount} />

                    </div>

                    </div>

                    <div className="col-sm-4">
                  <label className="control-label">Tenure:</label>
                  <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" value={disbursmentDetails.loan_tenure} />

                    </div>

                    </div>
                  </div>
                  </div>

{/* Third Row */}
<div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">Application stage:</label>
                    <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" name="loan_application_stage" value={details.loan_application_stage} onChange={(e) => onInputChange(e)}/>

                    </div>
                  </div>

                  <div className="col-sm-4">
                  <label className="control-label">Application status:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" name={"loan_application_status"} value={details.loan_application_status} onChange={(e) => onInputChange(e)} />

                    </div>

                    </div>

                    <div className="col-sm-4">
                  <label className="control-label">Application Processing Method:</label>
                  <div className="input-group mb-3">

                      <select
                      name="loan_application_processing_method"
                      className="form-control selectpicker"
                      value={details.loan_application_processing_method}
                      onChange={(e) => onInputChange(e)}
                    >
                      <option value="">Please select a method</option>
                      <option>Income Surrogate</option>
                      <option>Banking Surrogate</option>
                      <option>GST Surrogate</option>

                    </select>
                    </div>

                    </div>
                  </div>
                  </div>
  {/* Fourth Row */}
  <div className="form-group">
                <div className="row">
                <div className="col-sm-4">
                  <label className="control-label">Application Processing Activity:</label>
                  <div className="input-group mb-3">

                      <select
                      name="processing_activity"
                      className="form-control selectpicker"
                      value={details.processing_activity}
                      onChange={(e) => onInputChange(e)}

                    >
                      <option value="Sanction">Sanction</option>
                      {/* <option value="">Select a Processing Activity</option>
                      <option value="Documentation Submission" >Documentation Submission</option>
                      <option value="Follow up">Follow up</option>
                      <option value="Response from Sales Person">Response from Sales Person</option> */}


                    </select>
                    </div>

                    </div>

                    <div className="col-sm-4">
                  <label className="control-label">Sanction:</label>
                  <div className="input-group mb-3">

                      <select
                      name="sanction_result"
                      value={details.sanction_result}
                      className="form-control selectpicker"
                    >
                      <option value="">Select a Processing Activity</option>
                      <option value="Sanction">Sanction</option>
                      <option value="Reject" >Reject</option>
                      <option value="Put on Hold">Put on Hold</option>



                    </select>
                    </div>

                    </div>
                    <div className="col-sm-4">
                  <label className="control-label">Sanction By:</label>
                  <div className="input-group mb-3" >
                  <select className="form-control noscroll" 
                  name={"sanction_by"} 
                  value={details.sanction_by}  
                  onChange={(e) => onInputChange(e)} >

                      <option value="">Select a Sanction By:</option>
                      <option value="Makarand Sir">Makarand Sir</option>
                      <option value="Rajeev Sir" >Rajeev Sir</option>
                      <option value="Anil Sir">Anil Sir</option>
                      </select>

                    </div>

                    </div>


                    </div>
                    </div>

                    <div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">Sanction Number:</label>
                    <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" name={"sanction_number"} value={details.sanction_number} onChange={(e) => onInputChange(e)} />

                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Sanction Amount:</label>
                    <div className="input-group mb-3">
                      <input type="number" disabled className="form-control noscroll" name={"sanction_amount"} value={details.sanction_amount} onChange={(e) => onInputChange(e)}/>

                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Sanction Tenure(in months):</label>
                    <div className="input-group mb-3">
                      <input type="number" disabled className="form-control noscroll" name={"sanction_tenure"} value={details.sanction_tenure}  onChange={(e) => onInputChange(e)}/>

                    </div>
                  </div>
                  </div>
                  </div>


                  <div className="form-group">
                <div className="row">


                  <div className="col-sm-4">
                    <label className="control-label">Sanction ROI:</label>
                    <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" name={"sanction_roi"} value={details.sanction_roi}  onChange={(e) => onInputChange(e)}/>

                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">EMI Amount:</label>
                    <div className="input-group mb-3">
                      <input type="number" disabled className="form-control noscroll" name={"emi_amount"} value={details.emi_amount} onChange={(e) => onInputChange(e)} />

                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Processing Fee:</label>
                    <div className="input-group mb-3">
                      <input type="number" disabled className="form-control noscroll" name={"processing_fee"} value={details.processing_fee} onChange={(e) => onInputChange(e)} />

                    </div>
                  </div>
                  </div>
                  </div>

<div className="form-group">
                <div className="row">
                  <div className="col-sm-12">
                    <label className="control-label">Sanction Remarks:</label>
                    <textarea
                    disabled
                      id="message"
                      className="form-control"
                      rows="3"
                      name="sanction_remark" value={details.sanction_remark}  onChange={(e) => onInputChange(e)}
                    ></textarea>
                  </div>
                  </div>
                  </div>

                  <div className="form-group">
                <div className="row">

                <div className="col-sm-4">
                    <label className="control-label">
                      Select Disbursment Date:
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group date" id="datepicker">
                        <input type="text" className="form-control" name="disbursment_date" value={details.disbursment_date} onChange={(e) => onInputChange(e)} />
                        <span className="input-group-append">
                          <span className="input-group-text bg-white d-block">
                            <i className="fa fa-calendar"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                        <div className="col-sm-4">
                    <label className="control-label">Disbursment Amount:</label>
                    <div className="input-group mb-3">
                      <input type="number"  className="form-control noscroll" name={"disbursement_amount"} value={details.disbursement_amount} onChange={(e) => onInputChange(e)} />

                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Tenure(in months):</label>
                    <div className="input-group mb-3">
                      <input type="number"  className="form-control noscroll" name={"disbursment_tenure"} value={details.disbursment_tenure} onChange={(e) => onInputChange(e)}/>

                    </div>
                  </div>
                    </div>
                    </div>

                    <div className="form-group">
                <div className="row">

                <div className="col-sm-4">
                    <label className="control-label">
                      Select EMI Start Date:
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group date" id="datepicker">
                        <input type="text" className="form-control" name={"emi_start_date"} value={details.emi_start_date} onChange={(e) => onInputChange(e)}/>
                        <span className="input-group-append">
                          <span className="input-group-text bg-white d-block">
                            <i className="fa fa-calendar"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <label className="control-label">
                      Select EMI End Date:
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group date" id="datepicker">
                        <input type="text" className="form-control" name={"emi_end_date"} value={details.emi_end_date} onChange={(e) => onInputChange(e)} />
                        <span className="input-group-append">
                          <span className="input-group-text bg-white d-block">
                            <i className="fa fa-calendar"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>


                  <div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">Customer Number:</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control noscroll" name="customer_number" value={details.customer_number}  onChange={(e) => onInputChange(e)} />

                    </div>
                  </div>

                  <div className="col-sm-4">
                  <label className="control-label">Loan Account Number:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" name="loan_account_number" value={details.loan_account_number}  onChange={(e) => onInputChange(e)} />

                    </div>

                    </div>

                    <div className="col-sm-4">
                  <label className="control-label">CGST Amount:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" name="cgst_amount" value={details.cgst_amount} onChange={(e) => onInputChange(e)} />

                    </div>

                    </div>
                  </div>
                  </div>

                  <div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">Processing Fee:</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control noscroll" name="processing_fee" value={details.processing_fee} onChange={(e) => onInputChange(e)} />

                    </div>
                  </div>



                    <div className="col-sm-4">
                  <label className="control-label">SGST Amont:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" name="sgst_amount" value={details.sgst_amount} onChange={(e) => onInputChange(e)}/>

                    </div>

                    </div>

                    <div className="col-sm-4">
                  <label className="control-label"> Disbursment Mode:</label>
                  <div className="input-group mb-3">

                      <select
                      name="disbursment_mode"
                      className="form-control selectpicker"
                      value={details.disbursment_mode}
                      onChange={(e) => onInputChange(e)}

                    >
                      <option value="">Please select a Disbursment Mode</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Bank Transfer-NACH" >Bank Transfer-NACH</option>
                     {/*  <option value="Follow up">Follow up</option>
                      <option value="Response from Sales Person">Response from Sales Person</option> */}


                    </select>
                    </div>

                    </div>
                  </div>
                  </div>

                  <div className="form-group">
                <div className="row">
                <div className="col-sm-4">
                  <label className="control-label"> Loan Status:</label>
                  <div className="input-group mb-3">

                      <select
                      name="loan_application_status"
                      className="form-control selectpicker"
                      value={details.loan_application_status}
                      onChange={(e) => onInputChange(e)}

                    >
                      <option value="">Please select a Loan Status</option>
                      <option value="xyz"> xyz</option>
                      <option value="xyz" >xyz</option>
                     {/*  <option value="Follow up">Follow up</option>
                      <option value="Response from Sales Person">Response from Sales Person</option> */}


                    </select>
                    </div>

                    </div>
                    <div className="col-sm-4">
                    <label className="control-label">NACH Status:</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control noscroll" name="nach_status" value={details.nach_status} onChange={(e) => onInputChange(e)} />

                    </div>
                  </div>



                    <div className="col-sm-4">
                  <label className="control-label">UMRN Number:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" name="umrn_number" value={details.umrn_number}  onChange={(e) => onInputChange(e)}/>

                    </div>

                    </div>
                </div>
                  </div>

                  <div className="form-group">
                <div className="row">
                <div className="col-sm-4">
                  <label className="control-label">Payee Name:</label>
                  <div className="input-group mb-3">

                  <input type="text" className="form-control noscroll" name="payee_name" value={details.payee_name} onChange={(e) => onInputChange(e)} />

                    </div>

                    </div>
                    <div className="col-sm-4">
                    <label className="control-label">IFSC Code:</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control noscroll" name="ifsc_code" value={details.ifsc_code}  onChange={(e) => onInputChange(e)} />

                    </div>
                  </div>



                    <div className="col-sm-4">
                  <label className="control-label">MICR Code:</label>
                  <div className="input-group mb-3">
                      <input type="number"  className="form-control noscroll" name="micr_code" value={details.micr_code} onChange={(e) => onInputChange(e)}
 />

                    </div>

                    </div>
                </div>
                  </div>

                  <div className="form-group">
                <div className="row">
                <div className="col-sm-4">
                  <label className="control-label">Bank Account Number:</label>
                  <div className="input-group mb-3">

                  <input type="number" className="form-control noscroll" name="payee_bank_account_number" value={details.payee_bank_account_number} onChange={(e) => onInputChange(e)}  />

                    </div>

                    </div>
                    <div className="col-sm-4">
                    <label className="control-label">Bank Name:</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control noscroll" name="payee_bank_name" value={details.payee_bank_name} onChange={(e) => onInputChange(e)}  />

                    </div>
                  </div>



                    <div className="col-sm-4">
                  <label className="control-label">Branch Name:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" name="payee_branch_name" value={details.payee_branch_name} onChange={(e) => onInputChange(e)}/>

                    </div>

                    </div>
                </div>
                  </div>

                  <div className="form-group">
                <div className="row">
                  <div className="col-sm-7">
<button type="button  "  className="btn btn-warning fourButtons w-50 py-2 "  onClick={(e) => onUpdate(e)}  >
            <i className="bi-pencil"></i> Update Disbursment Details
        </button>
</div>


<div className="col-sm-5">
<button type="button" id="exitButton" className="btn btn-secondary fourButtons"  >
            <i className="bi bi-x-circle"></i> Cancel
        </button>
</div>
</div>
</div>


                  <form/>
</div>
</div>
</div>
</div>
<ToastContainer/>
               </>
  )
}

export default Update_Disbursment_Details