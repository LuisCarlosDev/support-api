import { TicketsRepository } from '@/repositories/tickets-repository'
import { Ticket } from '@prisma/client'

interface FetchUserTicketsRequest {
  userId: string
  page: number
  query: string
}

interface FetchUserTicketsResponse {
  tickets: Ticket[]
}

export class FetchUserTickets {
  constructor(private ticketsRepository: TicketsRepository) {}

  async execute({
    userId,
    page,
    query,
  }: FetchUserTicketsRequest): Promise<FetchUserTicketsResponse> {
    const tickets = await this.ticketsRepository.findManyUserId(
      userId,
      page,
      query,
    )

    return { tickets }
  }
}
