import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogoNavbar from "../Navbar/LogoNavbar";



const StatusUpdation = ({userName}) => {

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



  const[update,setUpdate]=useState([])
    const[res,setRes]=useState([])
const [value,setValue]=useState("")
const[status,setStatus]=useState({
    loan_application_number:"",
    loan_application_stage:"",
    loan_application_status:"",
    loan_application_processing_method:"",
    business_vintage:"",
    foir_dscr:"",
    check_bounces:"",
    average_bank_balance:"",
    processing_result:" ",
    processing_remark:" "   
})

const{loan_application_number,loan_application_processing_method,business_vintage,foir_dscr,check_bounces,average_bank_balance,processing_result,processing_remarks}=status

const onInputChange=(e)=>{
    setStatus({...status,[e.target.name]:e.target.value})
}

const [savedetails, setSavedetails] = useState({ status: "04-PD",entered_by:userName, last_modified_date: "" })


useEffect(() => {
onUpdate()
},[]);


const onSearching = async () => {
  try {
    return await axios.get(`http://localhost:8080/details/getdetails/${loan_application_number}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
          setUpdate(response.data)
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








   





  const onUpdate = async (e) => {
    
    e.preventDefault();
    try {
  return await axios.post(`http://localhost:8080/details/update/${loan_application_number}`,status)
  .then((response)=>
      {
        setValue(value);
        console.log("updated Successfully")
        updatetoast()
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds


       
        setSavedetails({
          ...savedetails, status: '04-PD',entered_by:userName,last_modified_date: date + '/' + month + '/' + year
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


    const onSearchHandled = async() =>{
        return await axios.get(`http://localhost:8080/details/get/${loan_application_number}`)
        .then((response)=>
        {
          console.log(response.data)
          setStatus(response.data)
          setRes(response.data)
          setValue(value)
      })
      .catch((err)=>console.log(err));
      }
        

      const onCancel = async () => {
        setStatus({
          loan_application_processing_method:res.loan_application_processing_method,
          business_vintage:res.business_vintage,
          foir_dscr:res.foir_dscr,
          check_bounces:res.check_bounces,
          processing_result:res.processing_result,
          processing_remarks:res.processing_remarks
          
        })
      }
    
  return (
     <>

<LogoNavbar data = {userName} />
<hr className="divider mt-0" />
<h3 className="d-flex justify-content-center">
        Loan Application Processing: Status Updation
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
                      <input type="text" className="form-control noscroll" name="loan_application_number" value={loan_application_number}  onChange={(e) => onInputChange(e)} />
                      <div className="input-group-append">
                        <button onClick={onSearching}  className="btn btn-primary" type="button" >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <label className="control-label">Application Date:</label>
                  <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll"  value={update.loan_application_date}/>
                     
                    </div>

                    </div>
                        
                    <div className="col-sm-4">
                  <label className="control-label">Entered by:</label>
                  <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" value={update.entered_by}/>
                     
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
                      <input type="text" disabled className="form-control noscroll" value={update.applicant_name}/>
                    
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <label className="control-label">Requested Loan Amount:</label>
                  <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" value={update.requested_loan_amount}/>
                     
                    </div>

                    </div>
                        
                    <div className="col-sm-4">
                  <label className="control-label">Tenure:</label>
                  <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" value={update.loan_tenure}/>
                     
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
                      <input type="text"  className="form-control noscroll" name="loan_application_stage" value={status.loan_application_stage} onChange={(e) => onInputChange(e)}/>
                    
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <label className="control-label">Application status:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" name="loan_application_status" value={status.loan_application_status} onChange={(e) => onInputChange(e)}/>
                     
                    </div>

                    </div>
                        
                    <div className="col-sm-4">
                  <label className="control-label">Application Processing Method:</label>
                  <div className="input-group mb-3">
                      
                      <select
                      name={"loan_application_processing_method"}
                      className="form-control selectpicker"
                      value={status.loan_application_processing_method}
                      onChange={(e) => onInputChange(e)} 
                    >
                      <option value="">Please select the method</option>
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
                      value={status.processing_activity} 
                      onChange={(e) => onInputChange(e)} 
                    >
                      <option value="">Select a Processing Activity</option>
                      <option value="Dedupe" >Dedupe</option>
                      <option value="Credit Bureau">Credit Bureau</option>
                      <option value="PD">PD</option>
                      <option value="FI">FI</option>
                      <option value="Profile type">Profile Type</option>
                      <option value="Preliminary">Preliminary</option>
                      <option value="Detailed">Detailed</option>
                      <option value="Sanction">Sanction</option>
                      <option value="Disbursal">Disbursal</option>
                    
                    </select>
                    </div>

                    </div>

                    <div className="col-sm-4">
                  <label className="control-label">Business vintage:</label>
                  <div className="input-group mb-3">
                      <input type="number"  name={"business_vintage"} value={status.business_vintage} className="form-control noscroll" onChange={(e) => onInputChange(e)}/>
                     
                    </div>

                    </div>

                    <div className="col-sm-4">
                  <label className="control-label">DSCR/FOIR:</label>
                  <div className="input-group mb-3">
                      <input type="text"  name={"foir_dscr"} value={status.foir_dscr}  className="form-control noscroll" onChange={(e) => onInputChange(e)}/>
                     
                    </div>

                    </div>

                    </div>
                    </div>


  {/* Fifth Row */}

                    <div className="form-group">
                <div className="row">
                <div className="col-sm-4">
                  <label className="control-label">No of EMI/Cheque Bounces:</label>
                  <div className="input-group mb-3">
                      <input type="text"  name={"check_bounces"} value={status.check_bounces}  className="form-control noscroll"  onChange={(e) => onInputChange(e)}/>
                     
                    </div>

                    </div>
                    <div className="col-sm-4">
                  <label className="control-label">Average Bank Balance:</label>
                  <div className="input-group mb-3">
                      <input type="text"  name={"average_bank_balance"} value={status.average_bank_balance}  className="form-control noscroll" onChange={(e) => onInputChange(e)}/>
                     
                    </div>

                    </div>


                    <div className="col-sm-4">
                  <label className="control-label">Processing Result:</label>
                  <select
                      
                      name="processing_result"
                        value={status.processing_result}
                        className="form-control selectpicker"
                        onChange={(e) => onInputChange(e)}
                    >
                      <option value="">Select a Processing Result</option>
                      <option value="Positive">Positive</option>
                      <option value="Negative">Negative</option>
                      
                   </select>



                    </div>
                </div>
                </div>


  {/* Sixth Row */}

                <div className="form-group">
                <div className="row">
                  <div className="col-sm-12">
                    <label className="control-label">Processing Remarks:</label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="5"
                      name={"processing_remark"}
                      value={status.processing_remark}
                      onChange={(e) => onInputChange(e)}
                    ></textarea>
                  </div>
                  </div>
                  </div>
  {/* Seventh Row */}

                  <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
<button type="button  "  className="btn btn-warning fourButtons w-50 py-2 " onClick={(e)=>onUpdate(e)} >
            <i className="bi-pencil"></i> Update Processing Details
        </button>
</div>


<div className="col-sm-6">
<button type="button" id="exitButton" onClick={onCancel} className="btn btn-secondary fourButtons"  >
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

export default StatusUpdation