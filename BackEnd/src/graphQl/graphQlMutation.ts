import { GraphQLObjectType } from "graphql";
import userMutation from "../User/ql-mutation";
const mutationType : GraphQLObjectType = new GraphQLObjectType({
    name:"mutation",
    description:"this is to make graph mutation",
    fields:{
        addUser : userMutation.user
    }
});

export default mutationType;