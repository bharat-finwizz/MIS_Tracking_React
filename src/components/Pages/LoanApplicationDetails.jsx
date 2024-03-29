import React, { useRef, useEffect, useState } from "react";
import validator from "validator";
import LogoNavbar from "../Navbar/LogoNavbar";
import "./LoanApplicationDetails.css";
import csc from "country-state-city";
import { useFormik } from "formik";
import Select from "react-select";
import PincodeCompo from "./PincodeClassBased";
import LoanApplicationDetailsService from "../../Services/LoanApplicationDetails.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";


const LoanApplicationDetails = ({userName}) => {
  console.log(userName);
  // Global Variables
  let panValueforDedupe = "";
  let panValue = "";
  let adharValue;
  let gstValue = "";
  let emailValue = "";
  let mobilenoValue;
  const currentStatus = "ENTR";
  let loanApplicationNumberArray = [];
  let DisplayLAP = "";
  let pincodecity = "";
  let pincodePINCODE;
  let pincodeDistrict = "";
  let pincodeArea = "";
  let pincodeState = "";

  // let username = "Swapnil-0001";

  // console.log(typeof(currentDate));
  // console.log(currentDate);
         var date = new Date().getDate(); //Current Date
          var month = new Date().getMonth() + 1; //Current Month
          var year = new Date().getFullYear(); //Current Year
          var hours = new Date().getHours(); //Current Hours
          var min = new Date().getMinutes(); //Current Minutes
          var sec = new Date().getSeconds(); //Current Seconds


       
          let todays_DateWith_Time = date + '-' + month + '-' + year
          + ' ' + hours + ':' + min + ':' + sec;
          
// console.log(todays_Date);
// console.log(todays_DateWith_Time);
  // let entry_Date =  JSON.stringify(todays_Date);
  let entry_Date = todays_DateWith_Time;
  // console.log(entry_Date);
  // console.log(entry_Date);
  // console.log(typeof(entry_Date));

  // Success and Error Notifications
  const checkDedupeNotifySuccess = () =>
    toast.success("Dedupe Negative, you can processed with this application.");
  const checkDedupeNotifyFailure = () =>
    toast.error("Dedupe Positive, Application of this user already EXITS");
  const PanValidationNotify = () => toast.error("Pan number Invalid");
  const AdharValidationNotify = () => toast.error("Adharcard Invalid");
  const validGSTNotify = () => toast.error("GST Invalid");
  const validMobNotify = () => toast.error("Mobileno Invalid");
  const validEmailNotify = () => toast.error("Email Invalid");
  const UserDetailsSavedNotify = () =>
    toast.success("User Details Saved Successfully");
  const UserDetailsNOTSavedNotify = () =>
    toast.error("Please field the required fields", { position: "top-center" });

  const UserDeletedNotify = () => toast.success("User Details Deleted Successfully");
  const InvalidLAN = () => toast.error("Entered LAN is not valid or User with this LAN doesn't exist.");


  // Select city and state dropdown logic
  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null,
    },
    // onSubmit: (values) => console.log(JSON.stringify(values)),
  });

  const countries = csc.getAllCountries();
  // console.log(countries);

  // updatedCountries fn for Selecting Country
  // const updatedCountries = countries.map((country) => ({
  //   label: country.name,
  //   value: country.id,
  //   ...country,
  // }));

  const updatedStates = (countryId) =>
    csc
      .getStatesOfCountry(countryId)
      .map((state) => ({ label: state.name, value: state.id, ...state }));

  const updatedCities = (stateId) =>
    csc
      .getCitiesOfState(stateId)
      .map((city) => ({ label: city.name, value: city.id, ...city }));

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

  useEffect(() => {}, [values]);

  const inputRef = useRef(null);
  
  
  // console.log(values);
  // console.log(typeof(values));
  // All REGEX patterns
  const validPAN = new RegExp("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$");
  const validAdhar = new RegExp("^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$");
  // const validAdhar = new RegExp("^\d{4}\s\d{4}\s\d{4}$");
  const validGST = new RegExp(
    "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
  );
  // const validEmail = new RegExp(
  //   '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
  // );
  const validMobno = new RegExp("^([0|+[0-9]{1,5})?([7-9][0-9]{9})$");

  //all  states
  const [pincodeData, setPincodeData] = useState("");
  const [applicantnofirst, setApplicantnofirst] = useState("");
  const [applicantnoSecond, setApplicantnoSecond] = useState("");
  const [emailError, setemailError] = useState("");
  const [datepicker, setdatepicker] = useState(new Date());
  const [checkDedupePan, setcheckDedupePan] = useState({
    panNumber: "",
  });

  const [loanApplicationNumbertoDelete, setloanApplicationNumbertoDelete] =
    useState({
      loanApplicationNumber: "",
    });

// state for last_modified_date
const [lastModifiedDate, setlastModifiedDate] = useState({
  last_modified_date: todays_DateWith_Time,
})



  let dateValue = JSON.stringify(datepicker);
  let loan_app_date = dateValue.slice(1, 11);
  // console.log(loan_app_date);loanApplicationNumbertoDelete
  // console.log(typeof dateValue);
  // Setting default values for all form fields

  const displayLoanApplicationNumber = (number) => {
    // console.log("In Display Function Loan Application Number fn");
    loanApplicationNumberArray =
      number[Object.keys(number)[Object.keys(number).length - 1]];
    DisplayLAP = loanApplicationNumberArray[0];
    
    alert("Your loan application number:- " + DisplayLAP);

    //  console.log(DisplayLAP);
    // alert("Your LAP Number is - " + loanApplicationNumber[0]);
    //   number.forEach(function(message){
    //     console.log(message)
    // });
  };

  useEffect(() =>{
    // OnDeleteHandle();
  },[loanApplicationNumbertoDelete]);


  const OnDeleteHandle = (e) => {
    // e.preventDefault();

    try {
      // console.log(loanApplicationNumbertoDelete.loanApplicationNumber);  
      if(LoanApplicationDetailsService.isUserLoggedIn){
        LoanApplicationDetailsService.deleteDetails(loanApplicationNumbertoDelete.loanApplicationNumber).then((res) => {
          UserDeletedNotify();
        console.log("User Deleted Successfully");
        //  console.log(res.data);

      })
      .catch((error) => {
        console.log(error);
        InvalidLAN();
        console.log("Enter a Valid Application Number");
      });
      }else{
        console.log("User Not Aunthenciated");
      }
    
    } catch (error) {
      console.log(error);
    }
  };

  

 
  const [userDetails, setuserDetails] = useState({
    sourcing_location: "",
    sales_person: "",
    credit_manager: "",
    entrydate: todays_DateWith_Time,
    date: "",
    panNumber: "",
    adhar_number: "",
    loan_product: "",
    loan_application_date: todays_DateWith_Time,
    requested_loan_amount: "",
    loan_tenure: "",
    loan_purpose: "",
    title: "",
    applicant_name: "",
    applicant_address: "",
    applicant_type: "",
    applicant_occuption: "",
    pincode: "",
    city: "",
    state: "",
    district: "",
    mobileno: "",
    email_id: "",
    gstnumber: "",
    firm_name: "",
    area: "",
    firm_constitution: "",
    industry_type: "",
    entered_by: userName,
    entered_on: todays_DateWith_Time,
    last_modified_date: todays_DateWith_Time,
    status: currentStatus,
  });

  let stateVal = values.state;
  let cityVal = values.city;
  // console.log(stateVal);
  // console.log(cityVal);

  useEffect(() => {}, []);

  const handleOnchangeForcheckDepupde = (e) => {
    setcheckDedupePan(inputRef.current.value);
    
  };

  const handleOnchangeForLoanApplicationDelete = (e) => {
    // setloanApplicationNumbertoDelete(inputRef.current.value);

    const value = e.target.value;
    
     setloanApplicationNumbertoDelete({...loanApplicationNumbertoDelete, loanApplicationNumber: value });
    console.log(loanApplicationNumbertoDelete.loanApplicationNumber);
  };



  // Country state values
  // console.log(values.state);

  // let stateValue;
  //   const handleStateAndCounryOnchange = (value) => {
  //     // const val = e.target.value;
  //     // console.log(val);
  //     // console.log(value.name);
  //     setValues({ state: value, city: null }, false);
  //     console.log(values);
  //   };

  const handleFormValueChange = (e) => {
    const value = e.target.value;
    // console.log(userDetails.loan_application_date);
    // const statevalueformusestate = values.state.name;
    // setuserDetails(userDetails.state, statevalueformusestate);

    // setuserDetails(userDetails.date, [])

    setuserDetails({ ...userDetails, [e.target.name]: value });
  };

  // setuserDetails({ ...userDetails, entered_by: username });
  const updateEnteredBy = () => {
    // console.log(username);
    pincodecity =  pincodeData.city;
    pincodePINCODE = parseInt(pincodeData.pincode);
    pincodeDistrict = pincodeData.district;
    pincodeArea = pincodeData.areaName;
    pincodeState = pincodeData.stateName;
    
    // console.log(pincodecity, pincodePINCODE, pincodeDistrict, pincodeArea, pincodeState);
    setuserDetails(userDetails.city = pincodecity , userDetails.pincode = pincodePINCODE , userDetails.state =pincodeState , userDetails.area = pincodeArea , userDetails.district = pincodeDistrict ,userDetails.entered_by = userName)
    console.log(userDetails);

    // setuserDetails({...userDetails, entered_by: username });
    // setuserDetails({...userDetails, entered_on: entry_Date });
    // setuserDetails({...userDetails, status: 'Entry' });
    // setuserDetails({...userDetails, loan_application_date: loan_app_date });

    // console.log(userDetails);
    // console.log(username);
  };

  // Checking Dedupe
  const handleCheckDedupe = (e) => {
    e.preventDefault();
    // console.log("Check Dedupe clicked");
    // console.log(checkDedupePan);
    panValueforDedupe = checkDedupePan.panNumber;

    if (!validPAN.test(checkDedupePan)) {
      // props.showAlert(" Pan Number not valid", "danger");
      PanValidationNotify();
      // console.log("Pan Not valid");
    } else {
      try {
        LoanApplicationDetailsService.findByPanNumber(checkDedupePan)
          .then((res) => {
            checkDedupeNotifyFailure();
            
            setcheckDedupePan({ panNumber : ""})
            // console.log(res.status);
          })
          .catch((error) => {
            // console.log(error);
            // console.log("Okay to go");
            checkDedupeNotifySuccess();
            setcheckDedupePan({ panNumber : ""})

          });
      } catch (error) {
        console.log("Exception in Axios server");
      }
    }
  };







  // console.log(pincodeData);

  // Saving and validation User details on save button clicked

  const saveUserDetails = (e) => {
    e.preventDefault();
    // console.log("save user clicked");
  
    updateEnteredBy();
    panValue = userDetails.panNumber;
    adharValue = userDetails.adhar_number;
    gstValue = userDetails.gstnumber;
    emailValue = userDetails.email_id;
    mobilenoValue = userDetails.mobileno;
   
    // console.log(adharValue);
    
    // console.log(mobilenoValue);
    if (!validMobno.test(mobilenoValue)) {
      // console.log("Mob no not valid");
      validMobNotify();
    }

    if (!validPAN.test(panValue)) {
      PanValidationNotify();
    }

    if (!validAdhar.test(adharValue)) {
      // console.log("Adhar Invalid");
      AdharValidationNotify();
    }

    if (!validGST.test(gstValue)) {
      validGSTNotify();
    }

    if (!validator.isEmail(emailValue)) {
      validEmailNotify();
      UserDetailsNOTSavedNotify();
    } else {
      console.log(userDetails);
      // setlastModifiedDate({...lastModifiedDate, last_modified_date: todays_DateWith_Time});
      LoanApplicationDetailsService.saveDetails(userDetails)
        .then((res) => {
          if (res.status == 201) {
            UserDetailsSavedNotify();
            console.log("User Details saved successfully");

            LoanApplicationDetailsService.findByStatus(currentStatus)
              .then((res) => {
                if (res.status == 200) {
                  console.log("Loan Application found successfully");
                  displayLoanApplicationNumber(res.data);
                } else {
                  console.log("Something went wrong");
                }
              })

              .catch((error) => {
                console.log(error);
                UserDetailsNOTSavedNotify();
              });

            setuserDetails({
              sourcing_location: "",
              sales_person: "",
              credit_manager: "",
              entrydate: todays_DateWith_Time,
              date: "",
              panNumber: "",
              adhar_number: "",
              loan_product: "",
              loan_application_date: todays_DateWith_Time,
              requested_loan_amount: "",
              loan_tenure: "",
              loan_purpose: "",
              title: "",
              applicant_name: "",
              applicant_address: "",
              applicant_type: "",
              applicant_occuption: "",
              pincode: "",
              city: "",
              state: "",
              mobileno: "",
              email_id: "",
              gstnumber: "",
              firm_name: "",
              firm_constitution: "",
              industry_type: "",
              entered_by: userName,
              entered_on: todays_DateWith_Time,
              last_modified_date: todays_DateWith_Time,
              status: currentStatus,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          UserDetailsNOTSavedNotify();
        });
    }
  };

  const handleDatepickerChangeOnChange = (value) => {
    setdatepicker(value);
  };
  // console.log(datepicker);

  // console.log(dateValue);
  // console.log(typeof(dateValue));
  // console.log(JSON.stringify(dateValue));
  // console.log(typeof(dateValue));

  // Buttion function Handled

  const onEditHandled = () => {
    alert("Edit Button clicked ");
  };
  const onDeleteHandled = () => {
    alert("Data Deleted Successfully");
  };
 

  const changeFirstApplicantno = (e) => {
    setApplicantnoSecond(e.target.value);
    setApplicantnofirst(e.target.value);
  };

  const changeSecondApplicantNo = (e) => {
    setApplicantnofirst(e.target.value);
    setApplicantnoSecond(e.target.value);
  };

  return (
    <>
     <LogoNavbar data = {userName} />
      <h3 className="d-flex justify-content-center">
        Loan Application Details
      </h3>

      <div className="Form-Box">
        <div className="container" id="form-Container">
          <div className="row">
            <div className="col-sm-12">
              <form role="form" onSubmit={(e) => saveUserDetails(e)} />

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">Sourcing Location</label>
                    <select
                      name="sourcing_location"
                      onChange={(e) => handleFormValueChange(e)}
                      value={userDetails.sourcing_location}
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
                  {/* <div className="col-sm-3">
                    <label className="control-label">Select Country:</label>
                    <select  className="form-control selectpicker" />
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
                  </div> */}
                  <div className="col-sm-4">
                    <label className="control-label">Select State:</label>
                    {/* <select className="form-control selectpicker"  /> */}

                    <Select
                      id="state"
                      name="state"
                      options={updatedStates("101")}
                      // onChange={handleFormValueChange}
                      value={values.state}
                      onChange={(value) => {
                        setValues({ state: value, city: null }, false);
                      }}
                    />
                  </div>
                  <div className="col-sm-4">
                    <label className="control-label">Select City:</label>
                    {/* <select className="form-control selectpicker"  /> */}

                    <Select
                      id="city"
                      name="city"
                      options={updatedCities(
                        values.state ? values.state.value : null
                      )}
                      value={values.city}
                      onChange={(value) => setFieldValue("city", value)}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="control-label">Sales Person:</label>
                    <select
                      name="sales_person"
                      className="form-control selectpicker"
                      onChange={(e) => handleFormValueChange(e)}
                      value={userDetails.sales_person}
                    >
                      <option value="">Please select a Sales Person</option>
                      <option>Santosh Chavan</option>
                      <option>Amit </option>
                      <option>Raj </option>
                      <option>Nitin </option>
                     
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">
                      Select Credit Person:
                    </label>
                    <select
                      name="credit_manager"
                      className="form-control selectpicker"
                      onChange={(e) => handleFormValueChange(e)}
                      value={userDetails.credit_manager}
                    >
                      <option value="">Please select a Credit Person</option>
                      <option>Aakanksha Navle</option>
                      <option>Anukriti Acharya</option>
                      <option>Gourav Ghuge</option>
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
                      name="loan_product"
                      className="form-control selectpicker"
                      onChange={(e) => handleFormValueChange(e)}
                      value={userDetails.loan_product}
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
                      {/* <div className="input-group date" id="datepicker">
                        <input
                          type="text"
                          name="loan_application_date"
                          className="form-control"
                          onChange={(e) => handleFormValueChange(e)}
                          value={userDetails.loan_application_date}
                        /> */}
                      {/* <div className="input-group date" > */}
                      {/* 
 <input type="date" name="loan_application_date" className="form-control"   onChange={(e) => handleFormValueChange(e)}
                          value={userDetails.loan_application_date}  /> */}

                      <DatePicker
                        name="loan_application_date"
                        className="form-control"
                        selected={datepicker}
                        value={datepicker}
                        dateFormat="yyyy-MM-dd"
                        onChange={handleDatepickerChangeOnChange}

                        //  value={userDetails.date}
                      />

                      {/* <span className="input-group-append">
                          <span className="input-group-text bg-white d-block">
                            <i className="fa fa-calendar"></i>
                          </span>
                        </span> */}
                      {/* </div> */}
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
                    <input
                      type="number"
                      onChange={(e) => handleFormValueChange(e)}
                      value={userDetails.requested_loan_amount}
                      name="requested_loan_amount"
                      className="form-control noscroll"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="control-label">
                      Loan Tenure(in months):
                    </label>
                    <input
                      type="number"
                      onInput={(e) => {
                        if (e.target.value.length > e.target.maxLength)
                          e.target.value = e.target.value.slice(
                            0,
                            e.target.maxLength
                          );
                      }}
                      onChange={(e) => handleFormValueChange(e)}
                      value={userDetails.loan_tenure}
                      name="loan_tenure"
                      maxLength={3}
                      className="form-control noscroll"
                    />
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
                      name="loan_purpose"
                      onChange={(e) => handleFormValueChange(e)}
                      value={userDetails.loan_purpose}
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
                        Enter Applicant's PAN Number:
                      </label>

                      <div className="input-group mb-3">
                        <input
                          onInput={(e) => {
                            if (e.target.value.length > e.target.maxLength)
                              e.target.value = e.target.value.slice(
                                0,
                                e.target.maxLength
                              );
                          }}
                          maxLength={10}
                          className="form-control "
                          type="text"
                          ref={inputRef}
                          name="panNumber"
                          onChange={(e) => handleOnchangeForcheckDepupde(e)}
                          value={checkDedupePan.panNumber}
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={handleCheckDedupe}
                          >
                            Check Dedupe
                          </button>
                          <ToastContainer />
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-sm-6">
                      <label className="control-label">
                        Enter Applicant number:
                      </label>
                      <input
                        type="text"
                        name="applicantno"
                        className="form-control noscroll"
                        value={applicantnofirst}
                        onChange={changeSecondApplicantNo}
                      />
                    </div> */}

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
                      {/* <input
                        type="Text"
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.applicant_type}
                        name="applicant_type"
                        className="form-control"
                      /> */}
                      <select
                        type="Text"
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.applicant_type}
                        name="applicant_type"
                        className="form-control"
                      >
                        <option value="">Please select Applicant's Type</option>
                        <option>Salaried</option>
                        <option>Self Employeed</option>
                        <option>Professional</option>
                        <option>Business</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="control-label">Occupation:</label>

                      <select
                        type="Text"
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.applicant_occuption}
                        name="applicant_occuption"
                        className="form-control"
                      >
                        <option value="">
                          Please select Applicant's Occuption
                        </option>
                        <option>Service</option>
                        <option>Self-Employeed</option>
                        <option>Business</option>
                        <option>Housewife</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="control-label">Title:</label>

                      <select
                        type="Text"
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.title}
                        name="title"
                        className="form-control"
                      >
                        <option value="">
                          Please select Applicant's Title
                        </option>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Ms</option>
                        <option>Dr</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="control-label">Applicant Name:</label>
                      <input
                        type="Text"
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.applicant_name}
                        name="applicant_name"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <label className="control-label">Address:</label>

                    <div className="col-sm-12">
                      {/* <label className="control-label">Address:</label> */}
                      <textarea
                        id="message"
                        className="form-control"
                        rows="3"
                        name="applicant_address"
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.applicant_address}
                      ></textarea>
                    </div>
                    {/* <div className="col-sm-12">
                      <label className="control-label">Line 2:</label>
                      <textarea
                        id="message"
                        className="form-control"
                        rows="1"
                        name="applicant_address"
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.applicant_address}
                      ></textarea>
                    </div> */}
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
                      <input
                        type="number"
                        onInput={(e) => {
                          if (e.target.value.length > e.target.maxLength)
                            e.target.value = e.target.value.slice(
                              0,
                              e.target.maxLength
                            );
                        }}
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.mobileno}
                        name="mobileno"
                        maxLength={10}
                        className="form-control noscroll"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="control-label">Email:</label>
                      {/* <input
                      type = "email"
                       name="email_id"
                      
                      className="form-control"
                      aria-describedby="emailHelp"
                      onChange={(e) => handleFormValueChange(e)}
                      value={userDetails.email_id}
                    /> */}
                      <input
                        type="text"
                        id="userEmail"
                        name="email_id"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.email_id}
                      />
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "red",
                        }}
                      >
                        {emailError}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-4">
                      <label className="control-label">PAN number:</label>
                      <input
                        type="Text"
                        onInput={(e) => {
                          if (e.target.value.length > e.target.maxLength)
                            e.target.value = e.target.value.slice(
                              0,
                              e.target.maxLength
                            );
                        }}
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.panNumber}
                        name="panNumber"
                        maxLength={10}
                        className="form-control"
                      />
                    </div>
                    <div className="col-sm-4">
                      <label className="control-label">Adhar number:</label>
                      <input
                        type="number"
                        onInput={(e) => {
                          if (e.target.value.length > e.target.maxLength)
                            e.target.value = e.target.value.slice(
                              0,
                              e.target.maxLength
                            );
                        }}
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.adhar_number}
                        name="adhar_number"
                        maxLength={12}
                        className="form-control noscroll"
                      />
                    </div>
                    <div className="col-sm-4">
                      <label className="control-label">GST number:</label>
                      <input
                        type="Text"
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.gstnumber}
                        name="gstnumber"
                        maxLength={15}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="control-label">
                        Firm/Company Name:
                      </label>
                      <input
                        type="Text"
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.firm_name}
                        name="firm_name"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="control-label">
                        Firm Constitution:
                      </label>

                      <select
                        type="Text"
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.firm_constitution}
                        name="firm_constitution"
                        className="form-control"
                      >
                        <option value="">
                          Please select Firm Constitution
                        </option>
                        <option>Proprietorship Firms</option>
                        <option>Public Limited Company</option>
                        <option>Private Limited Company</option>
                        <option>Government</option>
                        <option>Partnership Firm</option>
                        <option>Others</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="control-label">Industry Type:</label>

                      <select
                        type="Text"
                        onChange={(e) => handleFormValueChange(e)}
                        value={userDetails.industry_type}
                        name="industry_type"
                        className="form-control"
                      >
                        <option value="">Please select Industry Type</option>
                        <option>Service</option>
                        <option>Production</option>
                        <option>Manufacture</option>
                        <option>Trading</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* <div className="form-group Generate">
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="control-label">
                        <span>
                          If Above All Details are Correct, Please Generate a
                          Application number:
                        </span>
                      </label>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                          >
                            Generate
                          </button>
                        </div>
                        <input
                          type="text"
                          placeholder="System will Generate this number"
                          disabled
                          className="form-control noscroll"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label className="control-label">Applicant number:</label>
                      <input
                        type="text"
                        placeholder=""
                        disabled
                        value={applicantnoSecond}
                        onChange={changeFirstApplicantno}
                        className="form-control noscroll"
                      />
                    </div>
                  </div>
                </div> */}

                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Your Loan Application Number:
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <span>lap no here</span>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/********************************8* Delete Modal ***************************************************************/}
                <div class="modal fade" id="myModal" role="dialog">
                  <div class="modal-dialog ">
                    {/* <!-- Modal content start--> */}
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                        <h5 class="modal-title">
                          Enter LAN to Delete Details.          
                        </h5>
                      </div>
                      <div class="modal-body">
                        <form name="jksearch" target="_blank" method="get" />

                        <div className="col-sm-12">
                          <label className="control-label">
                            Loan Application Number:
                          </label>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              onInput={(e) => {
                                if (e.target.value.length > e.target.maxLength)
                                  e.target.value = e.target.value.slice(
                                    0,
                                    e.target.maxLength
                                  );
                              }}
                              maxLength={11}
                            
                              onChange={(e) =>
                                handleOnchangeForLoanApplicationDelete(e)
                              }
                              value={
                                loanApplicationNumbertoDelete.loanApplicationNumber
                              }
                              className="form-control noscroll"
                              name="loanApplicationNumber"
                            />
                            <div className="input-group-append">
                              <button
                                onClick={OnDeleteHandle}
                                className="btn btn-danger"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#my-modal"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Enter Applicants LAP Number to Edit Details:
                        <br />
                        <input id="hiddenquery" type="hidden" name="q" />
                         <input
                         class="form-control"
                          name="qfront"
                          type= "text"
                          style= {{width: "300px"}}
                         
                        />
                        <input type="submit" onClick={handleEditDetails} value="Search" />
                        <br /> */}
                        {/*

                        <div style="font: bold 11px Verdana;">
                          Google:
                          <input name="se" type="radio" checked /> Yahoo:
                          <input name="se" type="radio" /> Bing:
                          <input name="se" type="radio" />
                        </div> */}
                        <form />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="row">
                    {/* <div className="btn-group"> */}
                    <div className="col-sm-3">
                      <button
                        type="button"
                        className="btn btn-success fourButtons"
                        // data-toggle="modal"
                        // data-target="#exampleModal"
                        onClick={saveUserDetails}
                      >
                        <i className="bi-eye"></i> Save
                      </button>
                    </div>
                    <div className="col-sm-3">
                      <Link   to={`/edituser`}
                        type="button"
                        className="btn btn-warning fourButtons"
                      
                        // data-toggle="modal"
                        // data-target="#myModal"
                      >
                        <i className="bi-pencil"></i> Edit
                      </Link>
                    </div>
                    <div className="col-sm-3">
                      <button
                        type="button"
                        className="btn btn-danger fourButtons"
                        // onClick={onDeleteHandled}
                         data-toggle="modal"
                        data-target="#myModal"
                      >
                        <i className="bi-trash"></i> Delete
                      </button>
                    </div>
                    <div className="col-sm-3">
                    <Link
                      to={`/home`}
                        id="exitButton"
                        className="btn btn-secondary fourButtons"
                      
                      >
                        <i className="bi bi-x-circle"></i> Exit
                      </Link>
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
