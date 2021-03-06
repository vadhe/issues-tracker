import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'

const server: FastifyInstance = Fastify({})

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          status: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get('/', opts, async () => {
  return { status: 'it worked!' }
})

const start = async () => {
  try {
    await server.listen({ port: 3000 })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
