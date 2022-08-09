const Employee_lst = require('../model/schema');

//------------------------------data posting-------------------------------------
exports.addEmployeeData = (req,res)=>{
    let data = {
        Fname : req.body.Fname,
        Lname : req.body.Lname,
        Age : req.body.Age,
        DOB : req.body.DOB,
        Designation: req.body.Designation,
        Phone : req.body.Phone,
        Email: req.body.Email,
        
    }

    let newEmployeeData = new Employee_lst(data)

    newEmployeeData.save().then(result=>{
        if(!result){
            res.status('404').json({
                message:'Data not found'
            })
        } else{
            res.status('200').json({
                message:'Employee data added Successfulyyy!!',
                result: result['_id']
            })
        }
    }).catch(err =>console.log(err))

}
//-------------------------------------------------------------------------------

//----------------------------------get All Posted Data------------------------------

exports.getAllEmployeeData = (req,res)=>{
    Employee_lst.find().then(result =>{
        if(!result){
            res.status('404').json({
                message:"cannot get result"
            })

        }else{
            res.status('200').json(result)
        }
    }).catch(err=>console.log(err))
}

//-------------------------------------------------------------------------------

//---------------------------------get data by id--------------------------------

exports.getEmployeeDatabyID= (req,res)=>{
    Employee_lst.findById(req.params.id).then(result=>{
        if(!result){
            res.status('404').json({
                message:'cannot find data by id'
            })
        }else{
            res.status('200').json(result)
        }
    }).catch(err=>console.log(err))
}

//-------------------------------------------------------------------------------

//----------------------------------get data by ID and update--------------------

exports.getEmployeeDatabyIDandUpdate=(req,res)=>{
    let data = {
        Fname : req.body.Fname,
        Lname : req.body.Lname,
        Age : req.body.Age,
        DOB : req.body.DOB,
        Designation: req.body.Designation,
        Phone : req.body.Phone,
        Email: req.body.Email,
       
    }
    Employee_lst.findByIdAndUpdate(req.params.id,data).then(result=>{
        if(!result){
            res.status('404').json({
                message:'cannot get data by id to update'
            })
        }else{
            res.status('200').json(result)
        }
    }).catch(err => console.log(err))
}

//-------------------------------------------------------------------------------

//----------------------------------Get data by Id and delete--------------------

exports.getEmployeeDatabyIdandDelete=(req,res)=>{
    Employee_lst.findByIdAndDelete(req.params.id).then(result=>{
        if(!result){
            res.status('404').json({
                message:"cannot find data by id to delete"
            })
        }else{
            res.status('200').json({
                message:"deleted selected data succesfullyy"
            })
        }
        })
    
}


//-------------------------------------------------------------------------------