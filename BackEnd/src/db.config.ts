import mongoose from 'mongoose';

let connection;
const Connected = mongoose.connection;
const mongodb_port = process.env.dbPort,
     local_host = process.env.dbHost,
      mongo_name = process.env.dbName;

mongoose.Promise = require('bluebird');

if (process.env.NODE_ENV === 'production')
    connection = mongoose.connect('mongodb://' + local_host + ':' + mongodb_port + '/' + mongo_name + '', 
    {useNewUrlParser: true,useUnifiedTopology: true });
else
    connection = mongoose.connect('mongodb://' + local_host + ':' + mongodb_port + '/' + mongo_name + '', 
    {useNewUrlParser: true,useUnifiedTopology: true });


export default Connected;