import {GraphQLSchema} from 'graphql';
import queryType from './graphQlQuery';


const graphQlSchema : GraphQLSchema = new GraphQLSchema ({
    query: queryType
});

export default graphQlSchema;