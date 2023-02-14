const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    authors: String!
    description: String!
    bookId: String!
    image: String!
    link: String!
    title: String!
  }

  type User {
    _id: ID!
    username: String!

  }

  type Token {
    user: User
    token: ID!
  }

  type Query {
 
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Token
    
  }

`



  ;

module.exports = typeDefs;