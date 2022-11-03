import React, { useEffect, useState  } from "react";

import LogoNavbar from "../Navbar/LogoNavbar";
import "./LoanApplicationDetails.css";
import { Country, State, City } from "country-state-city";
// import {csc} from 'country-state-city';
import { useFormik } from "formik";
import Select from "react-select";

import Pincode from 'react-pincode';

import PincodeCompo from "./PincodeClassBased";





const LoanApplicationDetails = () => {
  //all  states
  const [pincodeData, setPincodeData] = useState('');
  const [applicantnofirst, setApplicantnofirst] = useState(0);
  const [applicantnoSecond, setApplicantnoSecond] = useState(0);
 
;
  // Buttion function Handled
  const onSaveHandled = () => {
      alert("Data saved Successfully")
  }
  const onEditHandled = () => {
      alert("Edit Button clicked ")
  }
  const onDeleteHandled = () => {
      alert("Data Deleted Successfully")
  }
  const onExitHandled = () => {
      alert("Exit function caleed")
  }


  const changeFirstApplicantno = e => {
    setApplicantnoSecond(e.target.value);
    setApplicantnofirst(e.target.value );
  };

  const changeSecondApplicantNo = e => {
    setApplicantnofirst(e.target.value);
    setApplicantnoSecond(e.target.value );
  };



  return (
    <>
      <LogoNavbar />
      <h3 className="d-flex justify-content-center">
        Loan Application Details
      </h3>
      
      <div className="Form-Box">
        <div className="container" id="form-Container">
          <div className="row">
            <div className="col-sm-12">
              <form role="form"  />
               
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-3">
                    <label className="control-label">Sourcing Location</label>
                    <select
                      name="sourcing"
                      className="form-control selectpicker"
                    >
                      <option value="">Please select your Location</option>
                      <option>Pune</option>
                      <option>Banglore</option>
                      <option>Delhi</option>
                      <option>Mumbai</option>
                      <option>Solapur</option>
                    </select>
                  </div>
                  <div className="col-sm-3">
                    <label className="control-label">Select Country:</label>
                    <select  className="form-control selectpicker" />
                    {/* <Select
                      id="country"
                      name="country"
                      label="country"
                     
                      options={updatedCountries}
                      value={values.country}
                      // onChange={value => {
                      //   setFieldValue("country", value);
                      //   setFieldValue("state", null);
                      //   setFieldValue("city", null);
                      // }}
                      onChange={(value) => {
                        setValues(
                          { country: value, state: null, city: null },
                          false
                        );
                      }}
                    /> */}
                  </div>
                  <div className="col-sm-3">
                    <label className="control-label">Select State:</label>
                    <select  className="form-control selectpicker" />

                    {/* <Select
                      id="state"
                      name="state"
                      options={updatedStates(
                        values.country ? values.country.value : null
                      )}
                      value={values.state}
                      onChange={(value) => {
                        setValues({ state: value, city: null }, false);
                      }}
                    />
                   */}
										

									
							       
                  </div>
                  <div className="col-sm-3">
                    <label className="control-label">Select City:</label>
                    <select  className="form-control selectpicker" />

                    {/* <Select
                      id="city"
                      name="city"
                      options={updatedCities(
                        values.state ? values.state.value : null
                      )}
                      value={values.city}
                      onChange={(value) => setFieldValue("city", value)}
                    /> */}

                
                  </div>
                </div>
              </div> 
              
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">Sales Person:</label>
                    <select
                      name="nationality"
                      className="form-control selectpicker"
                    >
                      <option value="">Please select a Sales Person</option>
                      <option>Santosh Sir</option>
                      <option>XYZ</option>
                      <option>XYZ</option>
                      <option>XYZ</option>
                      <option>XYZ</option>
                      <option>XYZ</option>
                      <option>XYZ</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">
                      Select Credit Person:
                    </label>
                    <select
                      name="nationality"
                      className="form-control selectpicker"
                    >
                      <option value="">Please select a Credit Person</option>
                      <option>Ms.Aakanksha Navle</option>
                      <option>Ms.Anukriti Acharya</option>
                      <option>Mr.Gourav Ghuge</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">
                      Select Loan Product:
                    </label>
                    <select
                      name="nationality"
                      className="form-control selectpicker"
                    >
                      <option value="">Please select your Loan Product</option>
                      <option>Bussiness Loan</option>
                      <option>Person Loan</option>
                      <option>Unsecured Loan</option>
                      <option>Used Car Loan</option>
                      <option>Loan against property</option>
                    </select>
                  </div>

                  <div className="col-sm-6">
                    <label className="control-label">
                      Select Application Date:
                    </label>
                    <div className="col-sm-4">
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
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">
                      Loan Amount Required:
                    </label>
                    <input type="number" className="form-control noscroll" />
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">
                      Loan Tenure(in months):
                    </label>
                    <input type="number" className="form-control noscroll" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-12">
                    <label className="control-label">Purpose of Loan:</label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="5"
                      name="message"
                    ></textarea>
                  </div>
                  {/* <div className="col-sm-12">
								 <button className="btn btn-primary pull-left " style={{margin: '20px 45%',
    width: '10%'}}>Save</button>
							 </div> */}
                </div>
              </div>


{/*  -----------------------Applicant Form------------------------------------------- */}

           <div className="ApplicantForm">  


              <hr className="divider mt-0" />
              <h3 className="d-flex justify-content-center ApplicantDetailsHeading">
                Applicant Details
              </h3>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">
                      Enter Applicant's Mobile/PAN Number:
                    </label>

                    <div className="input-group mb-3">
                      <input type="number" className="form-control noscroll" />
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">
                          Check Dedupe
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">
                      Enter Applicant number:
                    </label>
                    <input type="number" min={0}  className="form-control noscroll"  value={applicantnofirst}
                      onChange={changeSecondApplicantNo} />
                  </div>

                  {/* <div className="input-group mb-3">
  <input type="text" className="form-control"/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div> */}
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">Applicant Type:</label>
                    <input type="Text" className="form-control" />
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">Occupation:</label>
                    <input type="Text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">Title:</label>
                    <input type="Text" className="form-control" />
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">Applicant Name:</label>
                    <input type="Text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-12">
                    <label className="control-label">Address:</label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="3"
                      name="message"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <PincodeCompo 
                   invalidError="Please Enter a valid pincode"
                   lengthError="Pincode Length must be of 6 digits"
                   getData={(data) => setPincodeData(data)}
                   
                   />
                   
             
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">Mobile number:</label>
                    <input type="number" className="form-control noscroll" />
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">PAN number:</label>
                    <input type="Text" className="form-control" />
                  </div>
                  <div className="col-sm-4">
                    <label className="control-label">Adhar number:</label>
                    <input type="number" className="form-control noscroll" />
                  </div>
                  <div className="col-sm-4">
                    <label className="control-label">GST number:</label>
                    <input type="Text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">Firm/Company Name:</label>
                    <input type="Text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">Firm Constitution:</label>
                    <input type="Text" className="form-control" />
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">Industry Type:</label>
                    <input type="Text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="form-group Generate">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">
                      <span >
                        If Above All Details are Correct, Please Generate a
                        Application number:
                      </span>
                    </label>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button" >
                          Generate
                        </button>
                      </div>
                      <input
                        type="number"
                        placeholder="System will Generate this number"
                        
                        disabled
                        className="form-control noscroll"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">Applicant number:</label>
                    <input
                      type="number"
                      placeholder=""
                      disabled
                      value={applicantnoSecond}
                      onChange={changeFirstApplicantno}
                      className="form-control noscroll"
                      
                    />
                  </div>
                </div>
              </div>


             
              <div className="form-group">
                <div className="row" >
                 
    {/* <div className="btn-group"> */}
    <div className="col-sm-3">
    <button type="button" className="btn btn-success fourButtons" onClick={onSaveHandled} >
            <i className="bi-eye"></i> Save
        </button>
</div>
<div className="col-sm-3">
<button type="button" className="btn btn-warning fourButtons" onClick={onEditHandled} >
            <i className="bi-pencil"></i> Edit
        </button>
</div>
<div className="col-sm-3">
<button type="button" className="btn btn-danger fourButtons" onClick={onDeleteHandled}>
            <i className="bi-trash"></i> Delete
        </button>
</div>
<div className="col-sm-3">
<button type="button" id="exitButton" className="btn btn-secondary fourButtons" onClick={onExitHandled} >
            <i className="bi bi-x-circle"></i> Exit
        </button>
</div>
        

    {/* </div> */}
    
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

export default LoanApplicationDetails;
