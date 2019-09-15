require('dotenv').config();
import express ,{Application} from 'express';
import AppConfig from './app.config';

const app:Application = express(),
     http:any = require('http').Server(app),
     port:number = 3333;
     
AppConfig(app)

http.listen(process.env.port || port,()=>{
    console.log("Server's running in port " + process.env.port || port);    
})