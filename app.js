const express=require('express');
const bodyParser=require('body-parser');
const app = express();
app.use(bodyParser.json());
const dotenv=require('dotenv');
const router=require('router');


const connectDB= require('./config/db');

//load config
dotenv.config({path:'./config/config.env'});
connectDB();

//routes
app.use('/',require('./routes/index'));

app.listen(1000);