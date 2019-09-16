import { GraphQLObjectType ,GraphQLID ,GraphQLString} from "graphql";

const userType : GraphQLObjectType = new GraphQLObjectType({
    name:"user",
    description: 'this is a single user',
    fields:{
        id: {
            type: GraphQLID,
            description: 'this is the word id'
          },
          firstName: {
            type: GraphQLString,
            description: ''
          },
          lastName: {
            type: GraphQLString,
            description: ''
          },
          email: {
            type: GraphQLString,
            description: ''
          },
          createdAt: {
            type: GraphQLString,
            description: ''
          }
        }
})

export default userType;