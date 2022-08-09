let mongoose = require ('mongoose');
let schema = mongoose.Schema;



let EmployeeSchema = new schema({

    Fname:{
        type:String
        // required:true,
        // match:/^[A-Z]{1}[a-z]+$/
    },
    Lname:{
        type:String
    },
    Age:{
        type:Number
        // min:18,
        // max:40
    },
    DOB:{
        type:String
        // match : /^[0-9]{2}[\-][0-9]{2}[\-][0-9]{4}$/
    },
    Designation:{
        type:String
    },
    Phone:{
        type:String
        // match:/^[\+]{1}[91]{1}[0-9]{10}$/
    },
    Email:{
        type:String
        // match:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    }
   

})

let Employee_lst = mongoose.model('Employee_lst',EmployeeSchema)

module.exports=Employee_lst