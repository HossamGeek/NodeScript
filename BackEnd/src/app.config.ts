import {Application} from 'express';
import Connected from './db.config';
import bodyParser from 'body-parser';
import graphqlHttp from 'express-graphql';

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
        // app.use('/api',graphqlHttp({
        //     schema:{},
        //     graphiql:true
        // }))             
    });    
}





export default AppConfig;

