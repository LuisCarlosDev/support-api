import { FastifyInstance } from 'fastify'
import { register } from './register'
import { authenticate, signOut } from './authenticate'
import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { profile } from './profile'

export async function usersRoutes(app: FastifyInstance) {
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
}
