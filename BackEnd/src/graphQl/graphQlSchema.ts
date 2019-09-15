import {GraphQLSchema, GraphQLObjectType} from 'graphql';

const queryType = new GraphQLObjectType({
    name:"Query",
    description:"sadssa",
    fields:{

    }
}) ;
const graphQlSchema = new GraphQLSchema ({
    query: queryType
});

export default graphQlSchema;