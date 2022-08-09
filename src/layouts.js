import React, { Component } from 'react';
import {BrowserRouter, Route, Routes,Link, Navigate} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import { connect } from 'react-redux';
import {user_logout} from './Action'
import EmployeeData from './components/Employee_details/EmployeeData';
import AddEmployee from './components/Employee_details/AddEmployee';


 class layouts extends Component {
 

     isLogin = ()=>{
     
        const {users} = this.props;
        if(users.length === 0){
            return false;
        }else{
            return true;
        }
    }

    onsignout =()=>{
        this.props.user_logout()
    }
    renderLogin(){
        //console.log(this.isLogin())
        if(this.isLogin()){
            return (
                <div>                
                    <li className="nav-item">
                        <button className="btn btn-dark" aria-current="page"  onClick={this.onsignout}>Sign Out</button>
                        
                    </li>
                </div>
            )
        } else {
            return (
                <div>                
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="Signin" >SignIn</Link>
                    </li>
                </div>
            )
    }

    }

    displayRender(){
        if(this.isLogin()){
            return(
                <div>

                     <li className="nav-item">
                        <Link className="nav-link" to="EmployeeData">EmployeeData</Link>
                    </li>
                    
                </div>
            )
        }
            return null
        
      }


    render() {
    return (
      <div>
        <BrowserRouter>
            <header>
                <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="home">Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="AddEmployee">AddEmployee</Link>
                                </li>
                               
                                    {this.displayRender()}

                                    {this.renderLogin()}
                              
                              
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={
                    <Navigate to='home' replace/>
                }/>
                <Route path='home' element={<Home/>}/>
                {/* <Route path='AddEmployee' element={<AddEmployee/>}/>
                <Route path='EmployeeData' element={<EmployeeData/>}/>
                <Route path='EmployeeEdit' element={<EditEmployee/>}/> */}
                <Route path='AddEmployee' element={<AddEmployee/>}/>
                <Route path='EmployeeData' element={this.isLogin() ? <EmployeeData /> : <Navigate to='home' replace/>} />
                <Route path='Signin' element={this.isLogin() ? <Navigate to='home' replace/> : <Login/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
const mapStateToProps= (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps,{user_logout})(layouts);