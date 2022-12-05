import React from 'react'

const Update_Disbursment_Details = () => {
    const onSearchHandled = () =>{
        alert("Searching in the Database...")
    }
  return (
    <>
  
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
                  <div className="input-group mb-3" >
                  <input type="text" disabled className="form-control noscroll" />
                      
                      
                    </div>

                    </div>


                    </div>
                    </div>

                    <div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">Sanction Number:</label>
                    <div className="input-group mb-3">
                      <input type="number" disabled className="form-control noscroll" />
                      
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Sanction Amount:</label>
                    <div className="input-group mb-3">
                      <input type="number" disabled className="form-control noscroll" />
                      
                    </div>
                  </div>
                        
                  <div className="col-sm-4">
                    <label className="control-label">Sanction Tenure(in months):</label>
                    <div className="input-group mb-3">
                      <input type="number" disabled className="form-control noscroll" />
                      
                    </div>
                  </div>
                  </div>
                  </div>


                  <div className="form-group">
                <div className="row">
                

                  <div className="col-sm-4">
                    <label className="control-label">Sanction ROI:</label>
                    <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" />
                      
                    </div>
                  </div>
                        
                  <div className="col-sm-4">
                    <label className="control-label">EMI Amount:</label>
                    <div className="input-group mb-3">
                      <input type="number" disabled className="form-control noscroll" />
                      
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Processing Fee:</label>
                    <div className="input-group mb-3">
                      <input type="number" disabled className="form-control noscroll" />
                      
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
                      name="message"
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
                        <input type="text" className="form-control" />
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
                      <input type="number" disabled className="form-control noscroll" />
                      
                    </div>
                  </div>
                        
                  <div className="col-sm-4">
                    <label className="control-label">Tenure(in months):</label>
                    <div className="input-group mb-3">
                      <input type="number" disabled className="form-control noscroll" />
                      
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
                        <input type="text" className="form-control" />
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
                        <input type="text" disabled className="form-control" />
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
                    <label className="control-label">Customer Name:</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control noscroll" />
                    
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <label className="control-label">Loan Account Number:</label>
                  <div className="input-group mb-3">
                      <input type="number"  className="form-control noscroll" />
                     
                    </div>

                    </div>
                        
                    <div className="col-sm-4">
                  <label className="control-label">CGST Number:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" />
                     
                    </div>

                    </div>
                  </div>
                  </div>

                  <div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">Processing Fee:</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control noscroll" />
                    
                    </div>
                  </div>

                 
                        
                    <div className="col-sm-4">
                  <label className="control-label">CGST Number:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" />
                     
                    </div>

                    </div>

                    <div className="col-sm-4">
                  <label className="control-label"> Disbursment Mode:</label>
                  <div className="input-group mb-3">
                      
                      <select
                      name="sourcing"
                      className="form-control selectpicker"
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
                      name="sourcing"
                      className="form-control selectpicker"
                    >
                      <option value="">Please select a Loan Status</option>
                      <option value="Sanction"> xyz</option>
                      <option value="Documentation Submission" >xyz</option>
                     {/*  <option value="Follow up">Follow up</option>
                      <option value="Response from Sales Person">Response from Sales Person</option> */}
                     
                    
                    </select>
                    </div>

                    </div>
                    <div className="col-sm-4">
                    <label className="control-label">NACH Status:</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control noscroll" />
                    
                    </div>
                  </div>

                 
                        
                    <div className="col-sm-4">
                  <label className="control-label">UMRN Number:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" />
                     
                    </div>

                    </div>
                </div>
                  </div>

                  <div className="form-group">
                <div className="row">
                <div className="col-sm-4">
                  <label className="control-label">Payee Name:</label>
                  <div className="input-group mb-3">
                      
                  <input type="text" className="form-control noscroll" />
                    
                    </div>

                    </div>
                    <div className="col-sm-4">
                    <label className="control-label">IFSC Code:</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control noscroll" />
                    
                    </div>
                  </div>

                 
                        
                    <div className="col-sm-4">
                  <label className="control-label">MICR Code:</label>
                  <div className="input-group mb-3">
                      <input type="number"  className="form-control noscroll" />
                     
                    </div>

                    </div>
                </div>
                  </div>

                  <div className="form-group">
                <div className="row">
                <div className="col-sm-4">
                  <label className="control-label">Bank Account Number:</label>
                  <div className="input-group mb-3">
                      
                  <input type="number" className="form-control noscroll" />
                    
                    </div>

                    </div>
                    <div className="col-sm-4">
                    <label className="control-label">Bank Name:</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control noscroll" />
                    
                    </div>
                  </div>

                 
                        
                    <div className="col-sm-4">
                  <label className="control-label">Branch Name:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" />
                     
                    </div>

                    </div>
                </div>
                  </div>

                  <div className="form-group">
                <div className="row">
                  <div className="col-sm-7">
<button type="button  "  className="btn btn-warning fourButtons w-50 py-2 "  >
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
               </>
  )
}

export default Update_Disbursment_Details