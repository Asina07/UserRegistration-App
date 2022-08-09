import React, { Component } from 'react';
import { user_login } from '../Action';
import {connect} from 'react-redux'

 class Login extends Component {
  constructor(){
    super();

    this.state ={
      user_data :{
        user_name : '',
        password :''
      }
    }
  }

  OnInputChange = (e)=>{
    this.setState({
      user_data:{
        user_name : e.target.value,
        password : this.state.user_data.password
      }
    })
  }

  OnPasswordChange = (e) =>{
    this.setState({
      user_data:{
        user_name: this.state.user_data.user_name,
        password: e.target.value
      }
    })
  }
  OnFormSubmit = () =>{
   
  this.props.user_login(this.state.user_data)


 }

  render() { 
    return (
      <div  style={{margin:"120px"}}>
        <h3 style={{marginLeft:"520px",color:"grey"}}>SignIn here</h3>
        <div className="mb-3" style={{marginLeft:'520px',marginRight:'1020px'}}>
            <label  className="form-label">Name</label>
            <input type="text" className="form-control" name='user_name' onChange={this.OnInputChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <div className="mb-3" style={{marginLeft:'520px',marginRight:'1020px'}}>
            <label  className="form-label">Password</label>
            <input type="password" name='password'  onChange={this.OnPasswordChange} className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" onClick={this.OnFormSubmit} className="btn btn-primary" style={{marginLeft:'520px',marginRight:'1020px'}}>Submit</button>
    
    </div>
    )
  }
}

const mapStateToProps =(state)=>{
  console.log('user State', state)
  return{
    ...state
  }
}

export default connect(mapStateToProps,{user_login})(Login)