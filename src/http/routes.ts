import { FastifyInstance } from 'fastify'
import { register } from './controllers/users/register'
import { authenticate, signOut } from './controllers/users/authenticate'
import { profile } from './controllers/users/profile'
import { verifyJwt } from './middlewares/verify-jwt'
import { createTicket } from './controllers/tickets/create-ticket'
import { createSystem } from './controllers/systems/create-system'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  app.post(
    '/sign-out',
    {
      onRequest: [verifyJwt],
    },
    signOut,
  )
  app.get(
    '/me',
    {
      onRequest: [verifyJwt],
    },
    profile,
  )
  app.post(
    '/tickets',
    {
      onRequest: [verifyJwt],
    },
    createTicket,
  )
  app.post(
    '/systems',
    {
      onRequest: [verifyJwt],
    },
    createSystem,
  )
}
