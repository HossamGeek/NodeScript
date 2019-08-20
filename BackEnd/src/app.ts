import express ,{Application,Request,Response,NextFunction} from 'express';

const app : Application = express();

const add = (x : number , y : number)=>{
    return x+y
}

app.get('/',(req:Request,res:Response)=>{
    res.json(add(5,5))
})

app.listen(5000,()=>{console.log('server running')});