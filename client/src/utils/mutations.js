import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook(
    $description: String!
    $title: String!
    $bookId: String!
    $author: [String]
    $image: String
    $link: String
  ) {
    addBook(
      description: $description
      title: $title
      bookId: $bookId
      author: $author
      image: $image
      link: $link
    ) {
      username
      savedBooks {
        title
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
