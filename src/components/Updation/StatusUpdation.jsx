import React from 'react'

const StatusUpdation = () => {
    const onEditHandled = () => {
        alert("Are you sure you want to edit?")
    }


    const onSearchHandled = () =>{
        alert("Searching in the Database...")
    }
  return (
     <>

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
                      <input type="text"  className="form-control noscroll" />
                     
                    </div>

                    </div>

                    <div className="col-sm-4">
                  <label className="control-label">DSCR/FOIR:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" />
                     
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
                      <input type="text"  className="form-control noscroll" />
                     
                    </div>

                    </div>
                    <div className="col-sm-4">
                  <label className="control-label">Average Bank Balance:</label>
                  <div className="input-group mb-3">
                      <input type="text"  className="form-control noscroll" />
                     
                    </div>

                    </div>


                    <div className="col-sm-4">
                  <label className="control-label">Processing Result:</label>
                  <select
                      name="sourcing"
                      className="form-control selectpicker"
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
                      name="message"
                    ></textarea>
                  </div>
                  </div>
                  </div>
  {/* Seventh Row */}

                  <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
<button type="button  " onClick={onEditHandled} className="btn btn-warning fourButtons w-50 py-2 "  >
            <i className="bi-pencil"></i> Update Processing Details
        </button>
</div>


<div className="col-sm-6">
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

export default StatusUpdation