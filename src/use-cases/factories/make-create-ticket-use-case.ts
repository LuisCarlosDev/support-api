import { PrismaTicketsrepository } from '@/repositories/prisma/prisma-tickets-repository'
import { CreateTicket } from '../create-ticket'

export function makeCreateTicketUseCase() {
  const ticketsRepository = new PrismaTicketsrepository()
  const createTicketUseCase = new CreateTicket(ticketsRepository)

  return createTicketUseCase
}
