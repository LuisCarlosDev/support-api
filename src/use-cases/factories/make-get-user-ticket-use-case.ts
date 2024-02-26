import { PrismaTicketsRepository } from '@/repositories/prisma/prisma-tickets-repository'
import { FetchUserTickets } from '../fetch-user-tickets'

export async function makeFetchUserTicketUseCase() {
  const ticketRepository = new PrismaTicketsRepository()
  const fetchUserTicketUseCase = new FetchUserTickets(ticketRepository)

  return fetchUserTicketUseCase
}
