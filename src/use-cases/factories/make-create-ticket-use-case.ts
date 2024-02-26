import { PrismaTicketsRepository } from '@/repositories/prisma/prisma-tickets-repository'
import { CreateTicketUseCase } from '../create-ticket'

export function makeCreateTicketUseCase() {
  const ticketRepository = new PrismaTicketsRepository()
  const createTicketUseCase = new CreateTicketUseCase(ticketRepository)

  return createTicketUseCase
}
