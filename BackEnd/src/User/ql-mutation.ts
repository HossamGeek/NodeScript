import userType from "./ql-type";
import { User } from './schema';
import { GraphQLList,GraphQLNonNull,GraphQLID ,GraphQLString} from "graphql";
import Creation from '../services/Creation';

 
const userSetService = new Creation(User);


const userMutation  = {
   user: {
        type: userType,
        description: 'this is single word return',
        args: {

          firstName: {
            type: new GraphQLNonNull(GraphQLString),
            description: ''
          },
          lastName: {
            type: new GraphQLNonNull(GraphQLString),
            description: ''
          },
          email: {
            type: new GraphQLNonNull(GraphQLString),
            description: ''
          },
        },
        resolve: (_ : any, args : any) => {
          return userSetService.set(args);
        }
      }
} ;

export default userMutation;
