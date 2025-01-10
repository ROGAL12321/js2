import { HttpLink, InMemoryCache, ApolloClient, gql } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import Link from "next/link";

// sa 5 metody budowania aplikacji, 4 z nich sa wspierane przez Nexta

// SPA - Single Page Application

  // React bez zadnego frameworka przy uzyciu np.:
  // Vite
  // Create React App

// SSR - Server Site Rendering
// SSG - Static Site Generation
// ISR - Incremental Static Regeneration

// Server Components

const fakeData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve([{
      id: '1',
      name: 'Damian'
    }, {
      id: '2',
      name: 'Pawel'
    }])
  }, 1000)
})

const { getClient } = registerApolloClient(() => {
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

const query = gql`
  query getIssue {
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

type Repository = {
  id: string
  name: string
  url: string
  __typename: string
}

type GqlResponse<T> = {
  nodes: T
}

type getRepositoriesQuery<T> = {
  search: GqlResponse<T>
}

export default async function Dashboard() {
  const { data } = await getClient().query<getRepositoriesQuery<Repository[]>>({ query })
  const repositories = data.search.nodes

  return (
    <div>
      Repositories

      <ul>
        {
          repositories.map(repository => (
            <li key={repository.id} className="py-2">
              {repository.name}
              <Link href={repository.url} className="p-20">Go to repository</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}