import React, { Component, useState } from 'react';

// import './App.css';
class Pincode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      pincode: '',
      city: '',
      district: '',
      stateName: '',
      areaName: '',
      error: '',
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value.length === 6) {
      this.setState({
        error: '',
      });
      fetch(`https://api.postalpincode.in/pincode/${e.target.value}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          this.setState(
            {
              stateName: res[0].PostOffice[0].State,
              city: res[0].PostOffice[0].Block,
              district: res[0].PostOffice[0].District,
              areaName: res[0].PostOffice[0].Name,
            },
            () => {
              const data = this.state;
              this.props.getData(data);
            }
          );
        })
        .then(() => {
          document.getElementById('pincode').classList.remove('error');
        })
        .catch((err) => {
          document.getElementById('pincode').className = 'error';
          this.setState({
            error: `${this.props.invalidError || 'Invalid PIN Code'}`,
          });
        });
    }
    if (e.target.value.length !== 6) {
      this.setState({
        city: '',
        stateName: '',
        district: '',
        error: `${this.props.lengthError || 'Pincode must be of 6 digits'}`,
      });
    }
    // console.log(useState);
  }
  render() {
    const inputFields = [

    //   {
    //     name: 'Area',
    //     placeholder: 'Area Name',
    //     disabled: true,
    //     value: this.state.areaName,
    //     // style: this.props.areaInput || {},
    //     containerStyle: this.props.areaContainer || {},
    //     display: this.props.showArea,
    //   },
      {
        name: 'City',
        placeholder: 'City',
        disabled: true,
        value: this.state.city,
        // style: this.props.cityInput || {},
        containerStyle: this.props.cityContainer || {},
        display: this.props.showCity,
      },
      {
        name: 'District',
        placeholder: 'District',
        disabled: true,
        value: this.state.district,
        // style: this.props.districtInput || {},
        containerStyle: this.props.districtContainer || {},
        display: this.props.showDistrict,
      },
      {
        name: 'Area',
        placeholder: 'Area',
        disabled: true,
        value: this.state.areaName,
        // style: this.props.districtInput || {},
        containerStyle: this.props.areaContainer || {},
        display: this.props.showArea,
      },
      {
        name: 'State',
        placeholder: 'State',
        disabled: true,
        value: this.state.stateName,
        // style: this.props.stateInput || {},
        containerStyle: this.props.stateContainer || {},
        display: this.props.showState,
      },
    ];
    return (
        <>
        
        <div style={this.props.Container}>
        <div className="row">
        {this.state.error ? (
          <span className="error-display">{this.state.error}</span>
        ) : null}
        <div className="col-sm-3">
          <label className="control-label">Enter Pincode:</label>
          <input className="form-control noscroll" maxLength={6}
            minLength={6}
            onChange={(e) => this.onChange(e)}
            name="pincode"
            placeholder="Pin Code"
            value={this.state.pincode}
            id="pincode"
            type="number"
            style={this.props.pincodeInput}
             />
        </div>
        {/* {inputFields.map((field) => {
          return (
            field.display && (
              <div style={field.containerStyle} key={field.name}>
                <input
                  type="String"
                  disabled={field.disabled}
                  placeholder={field.placeholder}
                  value={field.value}
                  style={field.style}
                />
              </div>
            )
          );
        })} */}
        {inputFields.map((field) => {
          return (
            field.display && (
               
        <div className="col-sm-3"  style={field.containerStyle} key={field.name}>
          <label className="control-label">{field.name}</label>
          <input type="String"
                       className="form-control" disabled={field.disabled} placeholder={field.placeholder} value={field.value}  />
        </div>
       
           )
           );
         })}
        {/* <div className="col-sm-3">
          <label className="control-label">City:</label>
          <input type="Text" className="form-control" />
        </div>
        <div className="col-sm-3">
          <label className="control-label">District:</label>
          <input type="Text" className="form-control" />
        </div> */}
      </div>
</div>











      </>
    );
  }
}
Pincode.defaultProps = {
  showCity: true,
  showArea: true,
  showDistrict: true,
  showState: true,
};
export default Pincode;
