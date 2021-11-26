const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    userName: String!
    email: String!
    savedBooks:[]
  },
  
 
  type Auth{
    token: ID!
    profile: Profile
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    # bookSchema: [bookSchema]!
    # bookSchema(bookSchemaId: ID!): bookSchema
    
  }

  type Mutation {
    addUser(username: String!): User
    addEmail(UserId: ID!, email: String!): User
    removeUser(userId: ID!): User
    removeEmail(userId: ID!, email: String!): User
    # addbookSchema(bookbookIdId: String!): bookSchema
    # removebookSchema(tripId: ID!): bookSchema
    login(email:String!, password:String!): Auth
   
  }
`;

module.exports = typeDefs;
