import React, { useEffect, useState  } from "react";
import LogoNavbar from "../Navbar/LogoNavbar";
import "./LoanApplicationDetails.css";
import { Country, State, City } from "country-state-city";
// import {csc} from 'country-state-city';
import { useFormik } from "formik";
import Select from "react-select";

import Pincode from 'react-pincode';







const LoanApplicationDetails = () => {

  // const [pincodeData, setPincodeData] = useState('');

  // const onChange = (e) => {
  //   console.log("onChange called");
  //   pincodeData({ [e.target.name]: e.target.value });
  //   console.log(e.target.value);
  //   if (e.target.value.length === 6) {
  //     pincodeData({
  //       error: '',
  //     });
  //     fetch(`https://api.postalpincode.in/pincode/${e.target.value}`, {
  //       method: 'GET',
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         setPincodeData(
  //           {
  //             stateName: res[0].PostOffice[0].State,
  //             city: res[0].PostOffice[0].Block,
  //             district: res[0].PostOffice[0].District,
  //             areaName: res[0].PostOffice[0].Name,
  //           },
  //           () => {
  //             const data = this.state;
  //             this.props.getData(data);
            
  //           }
  //         );
  //       })
  //       .then(() => {
  //         document.getElementById('pincode').classList.remove('error');
  //       })
  //       .catch((err) => {
  //         document.getElementById('pincode').className = 'error';
  //         setPincodeData({
  //           error: `${props.invalidError || 'Invalid PIN Code'}`,
  //         });
  //       });
  //   }
  //   if (e.target.value.length !== 6) {
  //     setPincodeData({
  //       city: '',
  //       stateName: '',
  //       district: '',
  //       error: `${props.lengthError || 'Pincode must be of 6 digits'}`,
  //     });
  //   }
  // }




  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null,
    },
    // onSubmit: (values) => console.log(JSON.stringify(values))
  });

  const countries = Country.getAllCountries();

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }));

  //   console.log(State.getStatesOfCountry());

  const updatedStates = (countryId) =>
    State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    }));

  const updatedCities = (stateId) =>
    City.getCitiesOfState(stateId).map((city) => ({
      label: city.name,
      value: city.id,
      ...city,
    }));

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

  useEffect(() => {}, [values]);



//Fetching city and state using postal pincode api















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
              <form role="form" onSubmit={handleSubmit} />
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
                    {/* <select  className="form-control selectpicker"  */}
                    <Select
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
                    />
                  </div>
                  <div className="col-sm-3">
                    <label className="control-label">Select State:</label>
                    {/*  <select  className="form-control selectpicker"     */}
                    <Select
                      id="state"
                      name="state"
                      options={updatedStates(
                        values.country ? values.country.valueOf : null
                      )}
                      value={values.state}
                      onChange={(value) => {
                        setValues({ state: value, city: null }, false);
                      }}
                    />
                    {/* <option >Please select your State</option>
										

									
							       </select> */}
                  </div>
                  <div className="col-sm-3">
                    <label className="control-label">Select City:</label>
                    {/*  <select  className="form-control selectpicker"     */}
                    <Select
                      id="city"
                      name="city"
                      options={updatedCities(
                        values.state ? values.state.value : null
                      )}
                      value={values.city}
                      onChange={(value) => setFieldValue("city", value)}
                    />

                    {/* <option >Please select your State</option>
										

									
							       </select> */}
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
                    <input type="Number" className="form-control" />
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">
                      Loan Tenure(in months):
                    </label>
                    <input type="Number" className="form-control" />
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

                    <div class="input-group mb-3">
                      <input type="Number" class="form-control" />
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">
                          Check Dedupe
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">
                      Enter Applicant Number:
                    </label>
                    <input type="Number" className="form-control" />
                  </div>

                  {/* <div class="input-group mb-3">
  <input type="text" class="form-control"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Button</button>
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
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">Enter Pincode:</label>
                    <input type="Number" className="form-control" 
            id="pincode" />
                  </div>
                  <div className="col-sm-4">
                    <label className="control-label">State:</label>
                    <input type="Text" className="form-control" />
                  </div>
                  <div className="col-sm-4">
                    <label className="control-label">City:</label>
                    <input type="Text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">Mobile Number:</label>
                    <input type="Number" className="form-control" />
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
                    <label className="control-label">PAN Number:</label>
                    <input type="Text" className="form-control" />
                  </div>
                  <div className="col-sm-4">
                    <label className="control-label">Adhar Number:</label>
                    <input type="Number" className="form-control" />
                  </div>
                  <div className="col-sm-4">
                    <label className="control-label">GST Number:</label>
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
                        Application Number:
                      </span>
                    </label>

                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button">
                          Generate
                        </button>
                      </div>
                      <input
                        type="Number"
                        placeholder="System will Generate this Number"
                        disabled
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">Applicant Number:</label>
                    <input
                      type="Number"
                      placeholder="Earlier One"
                      disabled
                      className="form-control"
                    />
                  </div>
                </div>
              </div>


             
              <div className="form-group">
                <div className="row" >
                 
    {/* <div class="btn-group"> */}
    <div className="col-sm-3">
    <button type="button" class="btn btn-success fourButtons" >
            <i class="bi-eye"></i> Save
        </button>
</div>
<div className="col-sm-3">
<button type="button" class="btn btn-warning fourButtons" >
            <i class="bi-pencil"></i> Edit
        </button>
</div>
<div className="col-sm-3">
<button type="button" class="btn btn-danger fourButtons">
            <i class="bi-trash"></i> Delete
        </button>
</div>
<div className="col-sm-3">
<button type="button" class="btn btn-secondary fourButtons" >
            <i class="bi bi-x-circle"></i> Exit
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
