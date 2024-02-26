import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { createSystem } from './create-system'

export async function systemsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.post('/systems', createSystem)
}
