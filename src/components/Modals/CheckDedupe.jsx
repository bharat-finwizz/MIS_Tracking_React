import React from 'react'
import "./CheckDedupe.css";

const CheckDedupe = () => {
  return (
    // <!-- Modal -->
    
    <>
    <div id="success_tic" class="modal fade" role="dialog">
      <div class="modal-dialog">
    
        {/* <!-- Modal content--> */}
        <div class="modal-content">
          <a class="close" href="#" data-dismiss="modal">&times;</a>
          <div class="page-body">
        <div class="head">  
          <h3 style="margin-top:5px;">Lorem ipsum dolor sit amet  </h3>
          <h4>Lorem ipsum dolor sit amet</h4>
        </div>
    
      <h1 style="text-align:center;"> </h1>
        <div class="checkmark-circle">
      <div class="background"></div>
      <div class="checkmark draw"></div>
    </div>
    
      </div>
    </div>
        </div>
    
      </div>
      </>
  )
}

export default CheckDedupe