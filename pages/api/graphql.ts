import { NextApiRequest, NextApiResponse } from 'next'

import { ApolloServer } from 'apollo-server-express'
import { schema } from '../../graphql/schema'
import { resolvers } from '../../graphql/resolvers'
import { createContext } from '../../graphql/context'

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

const apolloServer = new ApolloServer({
  schema,
  resolvers,
  context: createContext,
})

await apolloServer.start()
const apolloMiddleware = apolloServer.getMiddleware({
  path: '/api/graphql',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, apolloMiddleware)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
