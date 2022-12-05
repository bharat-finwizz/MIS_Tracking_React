import React from 'react'
import "./ManageDocument.css";
const ManageDoument = () => {
  return (
   <>
  <div class="container-lg">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2><b>Manage Documents</b></h2></div>
                    
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th><span class="custom-checkbox">
<input type="checkbox" id="selectAll"/>
<label for="selectAll"></label>
</span></th>
<th>Document Code</th>
        <th>Document Description</th>
        <th>Status</th>
        <th>No of Copies</th>
        <th>Pending with?</th>
        <th>Sales Person</th>
        <th>Edit Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="custom-checkbox">
<input type="checkbox" id="checkbox1" name="options[]" value="1"/>
<label for="checkbox1"></label>
</span></td>
<td>#101</td>
        <td>Pan Card</td>
        <td>Pending</td>
        <td>0</td>
        <td>Sales Team</td>
        <td>Santosh</td>
                         
                        <td>
                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                    <tr>
                    <td><span class="custom-checkbox">
<input type="checkbox" id="checkbox2" name="options[]" value="1"/>
<label for="checkbox2"></label>
</span></td>
<td>#101</td>
        <td>Pan Card</td>
        <td>Pending</td>
        <td>0</td>
        <td>Sales Team</td>
        <td>Santosh</td>
                         
                        <td>
                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>
                    <tr>
                    <td><span class="custom-checkbox">
<input type="checkbox" id="checkbox3" name="options[]" value="1"/>
<label for="checkbox3"></label>
</span></td>
<td>#101</td>
        <td>Pan Card</td>
        <td>Pending</td>
        <td>0</td>
        <td>Sales Team</td>
        <td>Santosh</td>
                         
                        <td>
                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>  
                    <tr>
                    <td><span class="custom-checkbox">
<input type="checkbox" id="checkbox4" name="options[]" value="1"/>
<label for="checkbox4"></label>
</span></td>
<td>#101</td>
        <td>Pan Card</td>
        <td>Pending</td>
        <td>0</td>
        <td>Sales Team</td>
        <td>Santosh</td>
                         
                        <td>
                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr> 
                    <tr>
                    <td><span class="custom-checkbox">
<input type="checkbox" id="checkbox5" name="options[]" value="1"/>
<label for="checkbox5"></label>
</span></td>
<td>#101</td>
        <td>Pan Card</td>
        <td>Pending</td>
        <td>0</td>
        <td>Sales Team</td>
        <td>Santosh</td>
                         
                        <td>
                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr> 
                    <tr>
                    <td><span class="custom-checkbox">
<input type="checkbox" id="checkbox6" name="options[]" value="1"/>
<label for="checkbox6"></label>
</span></td>
<td>#101</td>
        <td>Pan Card</td>
        <td>Pending</td>
        <td>0</td>
        <td>Sales Team</td>
        <td>Santosh</td>
                         
                        <td>
                            <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>     
                </tbody>
            </table>
        </div>
    </div>
</div> 
   </>
  )
}

export default ManageDoument