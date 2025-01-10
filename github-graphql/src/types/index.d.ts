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