import React from 'react'
import SanctionCondition from './SanctionCondition'

const SanctionDetails = () => {
    const onSearchHandled = () =>{
        alert("Searching in the Database...")
    }
  return (
    <>
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
                      <input type="number" className="form-control noscroll" />
                      <div className="input-group-append">
                        <button onClick={onSearchHandled} className="btn btn-primary" type="button">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <label className="control-label">Application Date:</label>
                  <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" />
                     
                    </div>

                    </div>
                        
                    <div className="col-sm-4">
                  <label className="control-label">Entered by:</label>
                  <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" />
                     
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
                      <input type="number" disabled className="form-control noscroll" />
                    
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <label className="control-label">Requested Loan Amount:</label>
                  <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" />
                     
                    </div>

                    </div>
                        
                    <div className="col-sm-4">
                  <label className="control-label">Tenure:</label>
                  <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" />
                     
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
                      <input type="text"  className="form-control noscroll" />
                    
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <label className="control-label">Application status:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" />
                     
                    </div>

                    </div>
                        
                    <div className="col-sm-4">
                  <label className="control-label">Application Processing Method:</label>
                  <div className="input-group mb-3">
                      
                      <select
                      name="sourcing"
                      className="form-control selectpicker"
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
                      name="sourcing"
                      className="form-control selectpicker"
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
                      name="sourcing"
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
                  <div className="input-group mb-3">
                      
                      <select
                      name="sourcing"
                      className="form-control selectpicker"
                    >
                      <option value="">Select a Sanction By:</option>
                      <option value="Sanction">XYZ</option>
                      <option value="Reject" >XYZ</option>
                      <option value="Put on Hold">XYZ</option>
                    
                     
                    
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
                      <input type="number" className="form-control noscroll" />
                      
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Sanction Amount:</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control noscroll" />
                      
                    </div>
                  </div>
                        
                  <div className="col-sm-4">
                    <label className="control-label">Sanction Tenure(in months):</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control noscroll" />
                      
                    </div>
                  </div>
                  </div>
                  </div>


                  <div className="form-group">
                <div className="row">
                

                  <div className="col-sm-4">
                    <label className="control-label">Sanction ROI:</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control noscroll" />
                      
                    </div>
                  </div>
                        
                  <div className="col-sm-4">
                    <label className="control-label">EMI Amount:</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control noscroll" />
                      
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Processing Fee:</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control noscroll" />
                      
                    </div>
                  </div>
                  </div>
                  </div>
<SanctionCondition/>
<div className="form-group">
                <div className="row">
                  <div className="col-sm-12">
                    <label className="control-label">Sanction Remarks:</label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="3"
                      name="message"
                    ></textarea>
                  </div>
                  </div>
                  </div>
               
  {/* Seventh Row */}

                  <div className="form-group">
                <div className="row">
                  <div className="col-sm-7">
<button type="button  "  className="btn btn-warning fourButtons w-50 py-2 "  >
            <i className="bi-pencil"></i> Update Sanction Details
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

    </>
  )
}

export default SanctionDetails