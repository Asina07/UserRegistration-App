const employeeReducer = (state=[],action)=>{
    switch(action.type){
        case 'Add_Employee':
            return [...state, action.payload];
        case 'EMPLOYEE_LIST':
            return {empList : action.payload};
        case 'EMPLOYEE_DELETE':
            return {...state,empDelete : action.payload};
        // case 'EMPLOYEE_EDIT':
        //     return {...state, empEdit : action.payload};
        default:
            return state;    

    }
}

export default employeeReducer;