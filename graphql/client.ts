import { ApolloClient, InMemoryCache, HttpLink  } from '@apollo/client'

const client = new ApolloClient({
  
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_URL}/api/graphql/products`,
    useGETForQueries: false
  }),
})

export default client
