import userType from "./ql-type";
import { User } from './schema';
import GetQueries from '../services/GetQueries';
import { GraphQLList,GraphQLNonNull,GraphQLID } from "graphql";

 
const userGetService = new GetQueries(User);


const userQuery  = {
    users:{
        type: new GraphQLList(userType),
        description: 'this is the list of words returned',
        resolve: (_ : any, args : any) => {
          return userGetService.findAll({});
        }
    },
    user: {
        type: userType,
        description: 'this is single word return',
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'this is the search id'
          }
        },
        resolve: (_ : any, args : any) => {
          return userGetService.findAll({_id:args.id});
        }
      }
} ;

export default userQuery;
