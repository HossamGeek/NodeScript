import { GraphQLObjectType } from "graphql";
import userQuery from "../User/ql-query";


const queryType : GraphQLObjectType = new GraphQLObjectType({
    name:"Query",
    description:"this is to make graph query",
    fields:{
        users:userQuery.users,
        user:userQuery.user,
    }
});

export default queryType;