import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addEmployee} from '../../Action'
import './AddEmployee.css'


class AddEmployee extends Component {
    constructor(){
        super();
        this.state = {
            employee_details :{
                Fname : '',
                Lname : '',
                Age : '',
                DOB :'',
                Designation : '',
                Phone : '',
                Email : ''
                           
            }
        }
    }

    OnInputChange=(e)=>{
        // console.log(e.target.name)
        this.setState({
            employee_details :{
                ...this.state.employee_details,
                [e.target.name] : e.target.value
        }
        })
    }

    OnFormSubmit=() => {
        // console.log(this.state)
        this.props.addEmployee(this.state.employee_details)
    }


  render() {
    return (
        
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2>Employee Form</h2>
        <form
          className="myForm"
          noValidate
          autoComplete="off"
         
        >
          <label>First Name:</label>
          <input
            type="text"
            name="Fname"
            placeholder="First Name"
            onChange={this.OnInputChange}
        
          />
         

          <label>Second Name:</label>
          <input
            type="text"
            name="Lname"
            placeholder="Last Namer"
            onChange={this.OnInputChange}
            
          />

          <label>Age:</label>
          <input
            type="text"
            name="Age"
            placeholder="Age"
            onChange={this.OnInputChange}
          />
        

          <label>DOB:</label>
          <input
            type="text"
            name="DOB"
            placeholder="DOB"
            onChange={this.OnInputChange}
           
          />

        <label>Designation:</label>
          <input
            type="text"
            name="Designation"
            placeholder="Designation"
            onChange={this.OnInputChange}
           
          />

        <label>Phone:</label>
          <input
            type="text"
            name="Phone"
            placeholder="Phone"
            onChange={this.OnInputChange}
           
          />
          <label>Email:</label>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            onChange={this.OnInputChange}
           
          />
          
          <br />
            <button type="submit" onClick={this.OnFormSubmit} className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
  }
}
const mapStateToProps = (state)=>{
    return(
        state
    )
}

export default connect(mapStateToProps,{addEmployee})(AddEmployee)