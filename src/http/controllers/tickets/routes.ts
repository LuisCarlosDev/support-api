import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { FastifyInstance } from 'fastify'
import { createTicket } from './create-ticket'
import { FetchUserTickets } from './fetch-user-tickets'
import { SearchTickets } from './search-many'

export async function ticketsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.post('/tickets', createTicket)

  app.get('/tickets', FetchUserTickets)
  app.get('/tickets/search', SearchTickets)
}
