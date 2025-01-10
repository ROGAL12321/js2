import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}` || ""}
})

export const GET_VIEWERS = gql`
  query GetViewers {
    viewer {
      login
    }
  }
`

export default client