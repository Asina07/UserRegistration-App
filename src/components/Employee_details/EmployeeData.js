import React, { Component } from 'react';
import {connect} from 'react-redux';
import {get_employee_list,deleteEmp} from '../../Action/index'




 class EmployeeData extends Component {
    constructor(){
        super()
        this.state={
            edit_item :''
        }
        
    }


    //to get all employ data at first
    componentDidMount(){
        this.props.get_employee_list()
    }

    //delete
    deleteEmployee = (id)=>{
        this.props.deleteEmp(id).then(()=>{
            this.props.get_employee_list()
        })
    }

    

    //get all data in a table
    renderRow(){
        const {empList}  = this.props.employee
    
        if(empList === []  || empList === undefined){
            return(
                <div>
                    No data found
                </div>
            )
        }

     
    return empList.map((item, index) => {
        console.log(item)
        return(
          
                <tr key= {index}>
                    <td > {index+1} </td>
                    <td>  {item.Fname}  </td>
                    <td>  {item.Lname}  </td>
                    <td>  {item.Age}  </td>
                    <td>  {item.DOB}  </td>
                    <td>  {item.Designation}  </td>
                    <td>  {item.Phone}  </td>
                    <td>  {item.Email}  </td>
                    <td><span><button className='btn btn-danger' onClick={() =>this.deleteEmployee(item._id)}>delete</button></span></td>
                </tr>
            
        )
    })



    }

    



  render() {
    return (
      <div>
        {/* {renderAlert()} */}
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">FName</th>
                    <th scope="col">LName</th>
                    <th scope="col">Age</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {this.renderRow()}
            </tbody>
        </table>
       
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
    return(
        state
    )
}
export default connect(mapStateToProps,{get_employee_list,deleteEmp})(EmployeeData);