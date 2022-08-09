let express = require ('express');
let router = express.Router();

let EmployeeController = require('../controller/employee_controller');


router.post('/',EmployeeController.addEmployeeData)
router.get('/',EmployeeController.getAllEmployeeData)
router.get('/:id',EmployeeController.getEmployeeDatabyID)
router.put('/:id',EmployeeController.getEmployeeDatabyIDandUpdate)
router.delete('/:id',EmployeeController.getEmployeeDatabyIdandDelete)





module.exports = router;