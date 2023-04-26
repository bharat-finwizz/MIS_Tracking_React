import React from 'react'
import { useState, useEffect } from 'react'
// import ManageDoument from './ManageDocument'
import "./ManageDocument.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogoNavbar from "../Navbar/LogoNavbar";

const Activity_Remark = ({userName}) => {
  //  const[docs,setDocs]=useState([])

  const [res, setRes] = useState([])
  const [docsremarks, setDocsRemarks] = useState([])

  //   const[value,setValue]=useState("")
  const [remarks, setRemarks] = useState({
    loan_application_number: "",
    loan_doc_tracking_details_stage: "",
    loan_doc_tracking_loan_application_status: "",
    loan_doc_processing_method: "",
    loan_doc_tracking_details_documents_activity: "",
    loan_doc_tracking_details_purpose_of_communication: "",
    loan_doc_tracking_details_documentation_status: "",
    loan_doc_tracking_details_documentation_remark: "",
    loan_doc_tracking_details_processing_remarks: "",
    application_record_document_details_documents_code: "",
    application_record_document_details_status: "",
    application_record_document_details_no_of_copies: "",
    application_record_pending_with: "",
    application_record_document_details_sales_person: ""
  })

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


  const [ddocs, setDocs] = useState([])

  const [masterdocs, setMasterDocs] = useState([])


  const [details, setDetails] = useState({ status: "07-DOCU",entered_by:userName, last_modified_date: "" })

  const { last_modified_date, entered_by,status } = details

  const { loan_application_number, loan_doc_tracking_details_stage, loan_doc_tracking_loan_application_status, loan_doc_processing_method, loan_doc_tracking_details_documents_activity, loan_doc_tracking_details_purpose_of_communication, loan_doc_tracking_details_documentation_status, loan_doc_tracking_details_documentation_remark, loan_doc_tracking_details_processing_remarks, application_record_document_details_documents_code, application_record_document_details_status, application_record_document_details_no_of_copies, application_record_pending_with, application_record_document_details_sales_person } = remarks



  const onInputChange = (e) => {
    setRemarks({ ...remarks, [e.target.name]: e.target.value })
  }



  useEffect(() => {


    onAdd();
    onUpdate();
    

  }, []);



  const onSearching = async () => {
    try {
      return await axios.get(`http://localhost:8080/details/getdetails/${loan_application_number}`)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data)
            setDocsRemarks(response.data)
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
    return await axios.get(`http://localhost:8080/docs/activity/${loan_application_number}`)
      .then((response) => {
        console.log(response.data)
        setRemarks(response.data)

        //setDocs(response.data)
        setRes(response.data)
        // setValue(value)

      })
      .catch((err) => console.log(err));

  }

  const onAdd = async () => {

    return await axios.post(`http://localhost:8080/manage/post/${loan_application_number}`, remarks)

      .then((response) => {
        console.log("saved succeessfully");
      })
      .catch((err) => console.log(err));
  }

  const onSearch = async () => {

    const result = await axios.get(`http://localhost:8080/manage/getdocs/${loan_application_number}`)
    console.log(result.data);
    setDocs(result.data);

  };

  let lan = loan_application_number.substring(0, 2);

  const onLoad = async () => {

    const result = await axios.get(`http://localhost:8080/master/get/${lan}`)
    console.log(result.data);
    setMasterDocs(result.data);


  };






  const onUpdate = async (e) => {

    e.preventDefault();
    try {
      return await axios.post(`http://localhost:8080/docs/activity/post/${loan_application_number}`, remarks)
        .then((response) => {


          updatetoast()

          var date = new Date().getDate(); //Current Date
          var month = new Date().getMonth() + 1; //Current Month
          var year = new Date().getFullYear(); //Current Year
          var hours = new Date().getHours(); //Current Hours
          var min = new Date().getMinutes(); //Current Minutes
          var sec = new Date().getSeconds(); //Current Seconds
         


          setDetails({
            ...details, status: '07-DOCU',entered_by:userName, last_modified_date: date + '/' + month + '/' + year
              + ' ' + hours + ':' + min + ':' + sec
          })

          console.log(details);

          console.log(details.status);
          statusupdate();
        })
    }
    catch
    {
      updatefailedtoast()
    }
  }

  const statusupdate = async () => {
    return await axios.post(`http://localhost:8080/details/savedetails/${loan_application_number}`, details)

      .then((response) => {
        console.log("added successfully");
      })
      .catch((err) => console.log(err));
  }


  const onCancel = async () => {
    setRemarks({
      loan_doc_tracking_details_stage: res.loan_doc_tracking_details_stage,
      loan_doc_tracking_loan_application_status: res.loan_doc_tracking_loan_application_status,
      loan_doc_processing_method: res.loan_doc_processing_method,
      loan_doc_tracking_details_documents_activity: res.loan_doc_tracking_details_documents_activity,
      loan_doc_tracking_details_purpose_of_communication: res.loan_doc_tracking_details_purpose_of_communication,
      loan_doc_tracking_details_documentation_status: res.loan_doc_tracking_details_documentation_status,
      loan_doc_tracking_details_documentation_remark: res.loan_doc_tracking_details_documentation_remark,
      loan_doc_tracking_details_processing_remarks: res.loan_doc_tracking_details_documentation_remark
    })
  }






  return (
    <>
      <LogoNavbar data = {userName} />
      
      <hr className="divider mt-0" />
      <h3 className="d-flex justify-content-center">
        Update Documentation Activity Remarks
      </h3>


      <div className="Form-Box">
        <div className="container" id="form-Container">
          <div className="row">
            <div className="col-sm-12">
              <form role="form" />






              {/* Search Bar First row form Group */}
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">Loan Application Number:</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control noscroll" id="lan2" name="loan_application_number" value={loan_application_number} onChange={(e) => onInputChange(e)} onKeyUp={onLoad} />
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
                      <input type="text" disabled className="form-control noscroll" value={docsremarks.loan_application_date} />

                    </div>

                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Entered by:</label>
                    <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" value={docsremarks.entered_by} />

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
                      <input type="text" disabled className="form-control noscroll" value={docsremarks.applicant_name} />

                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Requested Loan Amount:</label>
                    <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" value={docsremarks.requested_loan_amount} />

                    </div>

                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Tenure:</label>
                    <div className="input-group mb-3">
                      <input type="text" disabled className="form-control noscroll" value={docsremarks.loan_tenure} />

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
                      <input type="text" className="form-control noscroll" name={"loan_doc_tracking_details_stage"} value={remarks.loan_doc_tracking_details_stage} onChange={(e) => onInputChange(e)} />

                    </div>
                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Application status:</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control noscroll" name={"loan_doc_tracking_loan_application_status"} value={remarks.loan_doc_tracking_loan_application_status} onChange={(e) => onInputChange(e)} />

                    </div>

                  </div>

                  <div className="col-sm-4">
                    <label className="control-label">Application Processing Method:</label>
                    <div className="input-group mb-3">

                      <select
                        name={"loan_doc_processing_method"}
                        className="form-control selectpicker"
                        value={remarks.loan_doc_processing_method}
                        onChange={(e) => onInputChange(e)}
                      >
                        <option value="">Please select the method</option>
                        <option >Income Surrogate</option>
                        <option >Banking Surrogate</option>
                        <option >GST Surrogate</option>

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
                        name={"loan_doc_tracking_details_documents_activity"}
                        className="form-control selectpicker"
                        value={remarks.loan_doc_tracking_details_documents_activity}
                        onChange={(e) => onInputChange(e)}
                      >
                        <option value="">Select a Processing Activity</option>
                        <option value="Documentation Submission" >Documentation Submission</option>
                        <option value="Follow up">Follow up</option>
                        <option value="Response from Sales Person">Response from Sales Person</option>


                      </select>
                    </div>

                  </div>
                </div>
              </div>

              {/* Fifth Row */}

              <div class="container-lg ">
                <div class="table-responsive">
                  <div class="table-wrapper">
                    <div class="table-title">
                      <div class="row">
                        <div class="col-sm-8 text-center"><h2><b>Manage Documents</b></h2></div>

                      </div>
                    </div>
                    <table class="table table-bordered" >
                      <thead>
                        <tr  class="d-flex">
                          <th><span class="custom-checkbox">
                            <input type="checkbox" id="selectAll" />
                            <label for="selectAll"></label>
                          </span></th>

                          <th class="col-sm-3">Document Code  </th>

                          <th  class="col-sm-2">Status</th>
                          <th  class="col-sm-1">No of Copies</th>
                          <th class="col-sm-2">Pending with?</th>
                          <th class="col-sm-2">Sales Person</th>
                          <th>Add/Edit Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>




                        </tr>

                        <tr class="d-flex">
                          <td><span class="custom-checkbox">
                            <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                            <label for="checkbox1"></label>
                          </span></td>


                          <td class="col-sm-3">
                           
                              <select
                                name={"application_record_document_details_documents_code"}
                                className="selectpicker col-sm-9"
                                value={application_record_document_details_documents_code}
                                onChange={(e) => onInputChange(e)}
                              >
                                <option value="">Select Document code</option>
                                {masterdocs.map((mdocs, index) => {
                                  return (
                                    <option key={index} value={mdocs.document_code}> {mdocs.document_code}-{mdocs.description}</option>

                                  );
                                })}
                                  </select>
                                  <a class="search" title="Search" data-toggle="tooltip" onClick={onSearch}  > <i class="material-icons">&#128269;</i> </a>
                          </td>


                          
                          <td class="col-sm-2">
                            
                          <input class="col-sm-8" type="text" name={"application_record_document_details_status"}  autocomplete="off" value={application_record_document_details_status} onChange={(e) => onInputChange(e)} />
                        
                            </td>

                            <td class="col-sm-1">
                            
                              <input class="col-sm-10" type="text" name={"application_record_document_details_no_of_copies"}  autocomplete="off" value={application_record_document_details_no_of_copies} onChange={(e) => onInputChange(e)} />
                              
                              </td>


                          <td class="col-sm-2">

                          <input class="col-sm-10" name={"application_record_pending_with"}  autocomplete="off" value={application_record_pending_with} onChange={(e) => onInputChange(e)} />

                          </td>
                          <td class="col-sm-2">

                          <input class="col-sm-10" name={"application_record_document_details_sales_person"} value={application_record_document_details_sales_person} autocomplete="off" onChange={(e) => onInputChange(e)} />

                          </td >

                        <td>
                        <button className="btn btn-primary " onClick={onAdd} >Add</button>
                        </td>
                        </tr>







                        {ddocs.map((doc) => (
                          <tr class="d-flex">
                            <td><span className="custom-checkbox">
                              <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                              <label for="checkbox1"></label>
                            </span></td>
                            <td class="col-sm-3">{doc.application_record_document_details_documents_code}</td>

                            <td class="col-sm-2">{doc.application_record_document_details_status}</td>
                            <td class="col-sm-1">{doc.application_record_document_details_no_of_copies}</td>
                            <td class="col-sm-2">{doc.application_record_pending_with}</td>
                            <td class="col-sm-2">{doc.application_record_document_details_sales_person}</td>
                            <td class="col-sm-1"></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sixth Row */}
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-12">
                    <label className="control-label">Purpose of Communication:</label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="3"
                      name={"loan_doc_tracking_details_purpose_of_communication"}
                      value={remarks.loan_doc_tracking_details_purpose_of_communication}
                      onChange={(e) => onInputChange(e)}
                    ></textarea>
                  </div>
                </div>
              </div>



              {/* Seventh Row */}
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="control-label">Documents Submission Status:</label>
                    <div className="input-group mb-3">

                      <select
                        name={"loan_doc_tracking_details_documentation_status"}
                        className="form-control selectpicker"
                        value={remarks.loan_doc_tracking_details_documentation_status}
                        onChange={(e) => onInputChange(e)}
                      >
                        <option value="">Select a Processing Activity</option>
                        <option value="Completed" >Completed</option>
                        <option value="Pending" >Pending</option>



                      </select>
                    </div>

                  </div>
                </div>
              </div>
              {/* Eigth Row */}
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-12">
                    <label className="control-label">Document Submission Remarks:</label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="3"
                      name={"loan_doc_tracking_details_documentation_remark"}
                      value={remarks.loan_doc_tracking_details_documentation_remark}
                      onChange={(e) => onInputChange(e)}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Nith Row Buttons */}
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-12">
                    <label className="control-label">Processing Remarks:</label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="5"
                      name={"loan_doc_tracking_details_processing_remarks"}
                      value={remarks.loan_doc_tracking_details_processing_remarks}
                      onChange={(e) => onInputChange(e)}
                    ></textarea>
                  </div>
                </div>
              </div>
              {/* Seventh Row */}

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-7">
                    <button type="button  " className="btn btn-warning fourButtons w-50 py-2 " onClick={(e) => onUpdate(e)} >
                      <i className="bi-pencil"></i> Update Documentations Details
                    </button>
                  </div>


                  <div className="col-sm-5">
                    <button type="button" id="exitButton" className="btn btn-secondary fourButtons" onClick={onCancel} >
                      <i className="bi bi-x-circle"></i> Cancel
                    </button>
                  </div>
                </div>
              </div>
              <form />

            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Activity_Remark