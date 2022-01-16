import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPost {
    posts(limit: 10) {
      content
      title
      id
    }
  }
`;