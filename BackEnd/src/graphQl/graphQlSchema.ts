import {GraphQLSchema} from 'graphql';
import queryType from './graphQlQuery';
import mutationType from './graphQlMutation';


const graphQlSchema : GraphQLSchema = new GraphQLSchema ({
    query: queryType,
    mutation:mutationType 
});

export default graphQlSchema;