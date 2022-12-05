import React, {  useState  } from "react";
import LogoNavbar from "../Navbar/LogoNavbar";


import "./Credit_Bearau_Details.css";






const Credit_Bearau_Details = () => {
  //all  states
 
 
;
 



  return (
    <>
 

 {/* <LogoNavbar/> */}
      
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
      

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">Loan Application Number:</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control noscroll" />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">
                      Application Date:
                    </label>
                    <input type="text" className="form-control noscroll" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">
                      Entered By:
                    </label>
                    <input type="text" className="form-control noscroll" />
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">
                      Loan Application Name:
                    </label>
                    <input type="text" className="form-control noscroll" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">
                      Requested Loan Amount:
                    </label>
                    <input type="number" className="form-control noscroll" />
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">
                      Tenure:
                    </label>
                    <input type="number" className="form-control noscroll" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">
                      Application Stage:
                    </label>
                    <input type="text" className="form-control noscroll" />
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">
                      Application Status:
                    </label>
                    <input type="text" className="form-control noscroll" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">Application Processing Method:</label>
                    <select
                      name="nationality"
                      className="form-control selectpicker"
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
                      name="nationality"
                      className="form-control selectpicker"
                    >
                      <option value="">Please select an activity</option>
                      <option>Dedupe</option>
                      <option>Credit Bureau</option>
                      <option>PD</option>
                      <option>FI</option>
                      <option>Profile Type</option>
                      <option>Documentation</option>
                      <option>Preliminary Detailed Analysis</option>
                      <option>Sanction</option>
                      <option>Disbursal</option>
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
                    <input type="number" className="form-control noscroll" />
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">
                      CRIF Score:
                    </label>
                    <input type="number" className="form-control noscroll" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label className="control-label">
                      Processing Result:
                    </label>
                    <input type="text" className="form-control noscroll" />
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
                      name="message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                <div className="row" >
                  <div className="col-md-12 text-center">
<button type="button" className="btn btn-primary ms-1"  >
            <i className="bi-pencil"></i> Update
        </button>

<button type="button" className="btn btn-primary ms-3" >
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
    </>
  );
};
export default Credit_Bearau_Details;