import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogoNavbar from "../Navbar/LogoNavbar";

const SanctionDetails = ({userName}) => {

 

 

const[sanDetails,setSanDetails]= useState([])

const[details,setDetails]=useState([])

const[master,setMaster]=useState([])

const[sanctions,setSanctions]= useState({
loan_application_number:"",
loan_application_stage:"",
loan_application_status:"",
loan_application_processing_method:"",
processing_activity:"",
sanction_result:"",
sanction_by:"",
sanction_number:"",
sanction_amount:"",
sanction_tenure:"",
sanction_roi:"",
emi_amount:"",
processing_fee:"",
sanction_remark:""
})

const [savedetails, setSavedetails] = useState({ status: "08-SNCT",entered_by:userName ,last_modified_date:"" })
//let deselected="deselected";
const[code,setCode]=useState("");

var today = new Date()

 var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate()+1);
  var tdate=new Date(date)
  console.log(tdate)


const[check,setCheck]=useState({
loan_sanction_condition_selected_deselected:"selected ",
loan_sanction_condition_application_date:"" ,
loan_sanction_condition_sanction_date:"",
loan_sanction_condition_date:"",
loan_sanction_condition_entered_by:userName,
loan_application_number:"",
loan_sanction_condition_number:[]
})

const{loan_sanction_condition_number}=check

const onSearching = async () => {
try {
  return await axios.get(`http://localhost:8080/details/getdetails/${loan_application_number}`)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data)
        setDetails(response.data)
     //   console.log(details.data)
        console.log("record found !")
      }
      onSearchHandled();

    })
}
catch
{
  sanctiontoast()
}


}



const onInputChange = (e) => {
var value= e.target;


let array=[...loan_sanction_condition_number,e.target.value]
console.log(array)

check.loan_sanction_condition_number=array

check.loan_application_number=loan_application_number;
setCheck({ loan_sanction_condition_selected_deselected:"selected ",loan_sanction_condition_entered_by:userName,loan_sanction_condition_number:check.loan_sanction_condition_number,loan_sanction_condition_application_date:details.loan_application_date,loan_sanction_condition_sanction_date:tdate,loan_sanction_condition_date:tdate,loan_application_number:check.loan_application_number})
// console.log(e.target.value)



let tempcode = master.map((ms)=>  
  ms.sanction_code === value ? {...ms, isSelected : "selected" }: ms);
  
  
  


  
// setCode(tempcode);
console.log(tempcode);

console.log(check)
}




const{loan_application_number,loan_application_stage,loan_application_status,loan_application_processing_method,processing_activity,sanction_result,sanction_by,sanction_number,sanction_amount,sanction_tenure,sanction_roi,emi_amount,processing_fee,sanction_remark}= sanctions

const onhandleInputChange = (e) => {
  setSanctions({ ...sanctions, [e.target.name]: e.target.value })
}

function sanctiontoast() {
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

function conditionfailedtoast() {
  toast.error("Conditions not added successfully!", {
    position: "top-center"
  })
}

function addconditionstoast() {
  toast.success("Conditions added successfully!", {
    position: "top-center"
  })
}

function deletefailedtoast() {
  toast.error("Conditions not deleted successfully!", {
    position: "top-center"
  })
}

function deletesuccesstoast() {
  toast.success("Conditions deleted successfully!", {
    position: "top-center"
  })
}

useEffect(() => {
onUpdate();
statusupdate();
let res=axios.get(`http://localhost:8080/sanction/condition/get/${lan}`)
setCode(res.data)


  }, []);



const onUpdate = async (e) => {
  e.preventDefault();
try {
    return await axios.post(`http://localhost:8080/sanction/details/post/${loan_application_number}`, sanctions)
      .then((response) => 
      {
          console.log("data updated successfully");
          updatetoast()

          var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        setSavedetails({
          ...savedetails, status: '08-SNCT',entered_by:userName,last_modified_date: date + '/' + month + '/' + year
           + ' ' + hours + ':' + min + ':' + sec
        })
        console.log(savedetails)

        statusupdate();
          })
              }
  catch
  {
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



let lan = loan_application_number.substring(0, 2);

const onLoad = async () => {

  const result = await axios.get(`http://localhost:8080/sanction/condition/get/${lan}`)
  console.log(result.data);
  setMaster(result.data);
  
 // console.log(master)


};

const Add = async () => {
try{
    return await axios.post(`http://localhost:8080/sanction/condition/save`,check)

      .then((response) => {
        console.log("conditions added ");
        addconditionstoast()
      })
    }
      catch{
              conditionfailedtoast()
      }
  }

  const onDelete = async () => {
    try{
        return await axios.get(`http://localhost:8080/sanction/condition/delete/${loan_application_number}`)
    
          .then((response) => {

            deletesuccesstoast()
          })
        }
          catch{
                deletefailedtoast()
          }
      }
  



  const onSearchHandled = async () => {
      return await axios.get(`http://localhost:8080/sanction/details/get/${loan_application_number}`)
        .then((response) => {
          console.log(response.data)
          setSanctions(response.data)
          setSanDetails(response.data)
         
  
        })
        .catch((err) => console.log(err));
  
    }


    const onCancel = async () => {
      setSanctions({
          loan_application_stage:sanDetails.loan_application_stage,
          loan_application_status:sanDetails.loan_application_status,
          loan_application_processing_method:sanDetails. loan_application_processing_method,
          processing_activity:sanDetails.processing_activity,
          sanction_result:sanDetails.sanction_result,
          sanction_by:sanDetails.sanction_by,
          sanction_number:sanDetails.sanction_number,
          sanction_amount:sanDetails.sanction_amount,
          sanction_tenure:sanDetails.sanction_tenure,
          sanction_roi:sanDetails.sanction_roi,
          emi_amount:sanDetails.emi_amount,
          processing_fee:sanDetails.processing_fee,
          sanction_remark:sanDetails.sanction_remark
      })
    }





return (
  <>
   <LogoNavbar data = {userName} />


  {/* <hr className="divider mt-0" /> */}
<h3 className="d-flex justify-content-center">
     Update Sanction Details
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
                    <input type="text" className="form-control noscroll" name="loan_application_number" value={loan_application_number} onChange={(e) => onhandleInputChange(e)} onKeyUp={onLoad} />
                    <div className="input-group-append">
                      <button onClick={onSearching} className="btn btn-primary" type="button" data-bs-toggle="modal"  data-bs-target="#my-modal">
                        Search
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                <label className="control-label">Application Date:</label>
                <div className="input-group mb-3">
                    <input type="text" disabled className="form-control noscroll" value={details.loan_application_date}/>
                   
                  </div>

                  </div>
                      
                  <div className="col-sm-4">
                <label className="control-label">Entered by:</label>
                <div className="input-group mb-3">
                    <input type="text" disabled className="form-control noscroll" value={details.entered_by}/>
                   
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
                    <input type="text" disabled className="form-control noscroll" value={details.applicant_name}/>
                  
                  </div>
                </div>

                <div className="col-sm-4">
                <label className="control-label">Requested Loan Amount:</label>
                <div className="input-group mb-3">
                    <input type="text" disabled className="form-control noscroll" value={details.requested_loan_amount}/>
                   
                  </div>

                  </div>
                      
                  <div className="col-sm-4">
                <label className="control-label">Tenure:</label>
                <div className="input-group mb-3">
                    <input type="text" disabled className="form-control noscroll" value={details.loan_tenure}/>
                   
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
                    <input type="text"  className="form-control noscroll" name="loan_application_stage"     value={sanctions.loan_application_stage}  onChange={(e) => onhandleInputChange(e)} />
                  
                  </div>
                </div>

                <div className="col-sm-4">
                <label className="control-label">Application status:</label>
                <div className="input-group mb-3">
                    <input type="text"  className="form-control noscroll" name="loan_application_status" value={sanctions.loan_application_status}  onChange={(e) => onhandleInputChange(e)} />
                   
                  </div>

                  </div>
                      
                  <div className="col-sm-4">
                <label className="control-label">Application Processing Method:</label>
                <div className="input-group mb-3">
                    
                    <select
                    name="loan_application_processing_method"
                    className="form-control selectpicker"
                    value={sanctions.loan_application_processing_method}
                    onChange={(e) => onhandleInputChange(e)}
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
                    value={sanctions.processing_activity}
                    onChange={(e) => onhandleInputChange(e)}
                  >
                    <option value="">Processing Activity</option>
                    <option value="Sanction">Sanction</option>
                   
                   
                  
                  </select>
                  </div>

                  </div>

                  <div className="col-sm-4">
                <label className="control-label">Sanction Result:</label>
                <div className="input-group mb-3">
                    
                    <select
                    name="sanction_result"
                    className="form-control selectpicker"
                    value={sanctions.sanction_result}
                    onChange={(e) => onhandleInputChange(e)}
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
                <div className="input-group mb-3">
                    
                    <select
                    name="sanction_by"
                    className="form-control selectpicker"
                    value={sanctions.sanction_by}
                    onChange={(e) => onhandleInputChange(e)}
                  >
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
                  <label className="control-label">Enter Sanction Number:</label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control noscroll" name="sanction_number" value={sanctions.sanction_number}  onChange={(e) => onhandleInputChange(e)} />
                    
                  </div>
                </div>

                <div className="col-sm-4">
                  <label className="control-label">Sanction Amount:</label>
                  <div className="input-group mb-3">
                    <input type="number" className="form-control noscroll" name="sanction_amount" min="0" value={sanctions.sanction_amount}  onChange={(e) => onhandleInputChange(e)}/>
                    
                  </div>
                </div>
                      
                <div className="col-sm-4">
                  <label className="control-label">Sanction Tenure(in months):</label>
                  <div className="input-group mb-3">
                    <input type="number" className="form-control noscroll" name="sanction_tenure" min="0" value={sanctions.sanction_tenure}  onChange={(e) => onhandleInputChange(e)}/>
                    
                  </div>
                </div>
                </div>
                </div>


                <div className="form-group">
              <div className="row">
              

                <div className="col-sm-4">
                  <label className="control-label">Sanction ROI:</label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control noscroll" name="sanction_roi"  value={sanctions.sanction_roi}  onChange={(e) => onhandleInputChange(e)} />
                    
                  </div>
                </div>
                      
                <div className="col-sm-4">
                  <label className="control-label">EMI Amount:</label>
                  <div className="input-group mb-3">
                    <input type="number" className="form-control noscroll"   name="emi_amount" min="0" value={sanctions.emi_amount}  onChange={(e) => onhandleInputChange(e)} />
                    
                  </div>
                </div>

                <div className="col-sm-4">
                  <label className="control-label">Processing Fee:</label>
                  <div className="input-group mb-3">
                    <input type="number" className="form-control noscroll" name="processing_fee" min="0" value={sanctions.processing_fee}  onChange={(e) => onhandleInputChange(e)} />
                    
                  </div>
                </div>
                </div>
                </div>
                 
               



                <div class="container-lg">
  <div class="table-responsive">
      <div class="table-wrapper">
          <div class="table-title">
              <div class="row">
                  <div class="col-sm-8"><h2><b> Standard Sanction Conditions</b></h2></div>
                  <div class="col-sm-4">
                     
                  </div>
              </div>
          </div>
          <table class="table table-bordered">
              <thead>
                  <tr>
                  <th class="col-sm-3"><span class="custom-checkbox">
<input type="checkbox" id="selectAll"/>
<label for="selectAll"></label>
</span></th>
                      <th class="col-sm-4">Condition No</th>
                      <th class="col-sm-4">Condition Description</th>
                      <th class="col-sm-4">Actions
                      <div class="buttons">
                      <container class="text-center">
                      <button type="button" className="btn btn-primary ms-1" onClick={Add}> Add</button>
                      <button type="button" className="btn btn-danger ms-3" onClick={onDelete}>Delete </button>
                      <div>

                      </div>
                      </container>
                      </div></th>
                  </tr>
              </thead>
              <tbody>
                
    
    
   
     
              
              {master.map((ms,index) => {
                    return(
                  <tr key={index}>
                      <td><span class="custom-checkbox">
<input type="checkbox"  value={ms.sanction_code}    selected={ms.isSelected} onChange={onInputChange}/>
<label for="checkbox1" ></label>
</span></td>
<td>{ms.sanction_code}</td>  
<td>{ms.sanction_description}</td> 

                      <td class="col-sm-3">
                        </td>
                       
                     
                  </tr>
                        );
                      })}  

                     
              </tbody>
          </table>
      </div>
  </div>
</div>     


<div className="form-group">
              <div className="row">
                <div className="col-sm-12">
                  <label className="control-label">Sanction Remarks:</label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="3"
                    name="sanction_remark" value={sanctions.sanction_remark}  onChange={(e) => onhandleInputChange(e)}
                  ></textarea>
                </div>
                </div>
                </div>
             
{/* Seventh Row */}

                <div className="form-group">
              <div className="row">
                <div className="col-sm-7">
<button type="button  "  className="btn btn-warning fourButtons w-50 py-2 "  onClick={(e) => onUpdate(e)}>
          <i className="bi-pencil"></i> Update Sanction Details
      </button>
</div>


<div className="col-sm-5">
<button type="button" id="exitButton" className="btn btn-secondary fourButtons" onClick={onCancel} >
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
<ToastContainer />
  </>
)
}

export default SanctionDetails

