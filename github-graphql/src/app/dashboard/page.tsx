
import { getClient } from "@/lib/client";
import { GET_REPOSITORIES } from "@/lib/queries";
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

export default async function Dashboard({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  // https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
  const { search } = await searchParams
  
  const { data } = await getClient().query<getRepositoriesQuery<Repository[]>>({ query : GET_REPOSITORIES })
  const repositories = data.search.nodes

  // const {data: {search : { nodes: repositories }}} = await getClient().query<getRepositoriesQuery<Repository[]>>({ query: GET_REPOSITORIES })

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