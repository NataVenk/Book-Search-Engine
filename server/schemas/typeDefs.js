const { gql } = require('apollo-server-express');
const { login } = require('../controllers/user-controller');

const typeDefs = gql`
type Book {
    authors: [String!]
    description: String!
    bookId: String!
    image: String!
    link: String!
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email:String!
    savedBooks: [Book]
  }

  type Token {
    user: User
    token: ID!
  }

  type Query {
   
    user: User
   
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, username: String!): Auth
    addBook(description: String!, author: [String], title: String!, image: String, bookId: String!, link: String ): User
    removeBook(bookId: String!): User

  }

`



  ;

module.exports = typeDefs;


