import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query queryUsers {
  
    user {
      username
      email
      savedBooks {
        bookId
        image
        title
      }
    }
  }
`;


