import {Application} from 'express';
import Connected from './db.config';
import bodyParser from 'body-parser';

const midParse = bodyParser.urlencoded({ extended: true });
 
const AppConfig = (app:Application) =>{
    Connected.on('error', (err)=>{
        console.log('DataBase connection error!.\n'
                    +'Please start the Database server');
        app.use((req, res, next) =>
                    res.json({data:'DataBase connection error!',
                                err:(404),success:false}));
    });
    
    Connected.on('open', (err)=>{
        console.log("DataBase's connected.\n" +
                     "You can start working successfully ...");
        app.use('/user',midParse,(req,res,next)=>{
            // let new_user = new User({	"email":"hossam_mahmoud@gmail.com"});
            //  new_user.save().then(result=> res.json(result));
        })             
    });    
}





export default AppConfig;

