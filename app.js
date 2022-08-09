var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')




var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

//-------------------------db connction---------------------------
const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/Employee_Data').then(()=>{
    console.log('Employee Data connected')
}).catch(err => console.log(err));

//---------------------db connected--------------------------------



//----------------------import Router-------------------------------

const EmployeeRouter = require('./routes/employee_router') 
app.use('/Employee',EmployeeRouter)

// { connect mongoDb from -----> 'ThisPc /c: /ProgramFile /MongoDb /Server /5.0 /bin' ------->cmd --> enter mongo}

//----------------------Router imported--------------------------
module.exports = app;
