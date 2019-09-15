import express ,{Application} from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app:Application = express(),
     http:any = require('http').Server(app),
     port:number = 3333;
     

http.listen(process.env.port || port,()=>{
    console.log("Server's running in port " + process.env.port || port);    
})