import React from 'react'
import "./ManageDocument.css";

const SanctionCondition = () => {
  return (
   <>
<div class="container-lg">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2><b>Sandard Sanction Conditions</b></h2></div>
                    <div class="col-sm-4">
                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th><span class="custom-checkbox">
<input type="checkbox" id="selectAll"/>
<label for="selectAll"></label>
</span></th>
                        <th>Condition No</th>
                        <th>Condition Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="custom-checkbox">
<input type="checkbox" id="checkbox1" name="options[]" value="1"/>
<label for="checkbox1"></label>
</span></td>
                        <td>101</td>
                        <td>Pancard</td>
                         
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
                        <td>101</td>
                        <td>Pancard</td>
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
                        <td>101</td>
                        <td>Pancard</td>
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
                        <td>101</td>
                        <td>Pancard</td>
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
                        <td>101</td>
                        <td>Pancard</td>
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
                        <td>101</td>
                        <td>Pancard</td>
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

export default SanctionCondition