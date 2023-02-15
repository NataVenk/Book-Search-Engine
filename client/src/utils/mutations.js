import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_BOOK = gql`
mutation addBook($description: String!, $title: String!, $bookId: String!) {
    addBook(description: $description, title: $title, bookId: $bookId) {
      username
      savedBooks {
        title
      }
    }
  }
`;


