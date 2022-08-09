import {combineReducers } from 'redux';
import userReducer from './userReducer'
import employeeReducer from './EmployeeReducer'



export default combineReducers({
    users : userReducer,
    employee : employeeReducer,
})