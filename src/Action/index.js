import axios from "axios";

export const user_login = (data) =>async dispatch =>{
    dispatch ({
        type : 'USER_LOGIN',
        payload : data
    })
};

export const user_logout = ()=>async dispatch =>{
    dispatch({
        type:'USER_LOGOUT',
        payload:[]
    })
}

export const addEmployee = (data)=>dispatch=>{
    axios.post('http://localhost:5000/Employee',data).then(result=>{
        dispatch({
            type: 'Add_Employee',
            payload : result.data
        })
    })
}
export const get_employee_list = () => dispatch => {
    axios.get('http://localhost:5000/Employee').then(result => {
        dispatch({type: 'EMPLOYEE_LIST', payload: result.data})
    })
}

export const deleteEmp = (id) => dispatch => {
    axios.delete(`http://localhost:5000/Employee/${id}`).then(result => {
        dispatch({type: 'EMPLOYEE_DELETE', payload: result.data})
    })
}

// export const EditEmp = (id,data)=> dispatch =>{
//     axios.put(`http://localhost:5000/Employee/${id}`,data).then(result =>{
//         dispatch({type:'EMPLOYEE_EDIT', payload:result.data})
//     })
// }
