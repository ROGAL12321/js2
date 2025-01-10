import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        // Zeby dostac sie do klucza env musimy uzyc process.env.nazwa_klucza
        authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`
      }
    }),
  });
});