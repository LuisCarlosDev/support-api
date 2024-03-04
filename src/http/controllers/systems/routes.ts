import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { createSystem } from './create-system'
import { FetchUserSystems } from './fetch-user-systems'

export async function systemsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.get('/systems', FetchUserSystems)
  app.post('/systems', createSystem)
}
