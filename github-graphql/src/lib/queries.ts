import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query getRepositories {
    search (query:"javascript in:name", type: REPOSITORY, first:10) {
      nodes {
        ... on Repository {
          name
          id
          url
        }
      }
    }
  }
`
