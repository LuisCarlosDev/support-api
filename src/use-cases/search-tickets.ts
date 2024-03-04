import { TicketsRepository } from '@/repositories/tickets-repository'
import { Ticket } from '@prisma/client'

interface SearchTicketsUseCaseRequest {
  query: string
  page: number
}

interface SearchTicketsUseCaseResponse {
  tickets: Ticket[]
}

export class SearchTicketsUseCase {
  constructor(private ticketsRepository: TicketsRepository) {}

  async execute({
    query,
    page,
  }: SearchTicketsUseCaseRequest): Promise<SearchTicketsUseCaseResponse> {
    const tickets = await this.ticketsRepository.searchMany(query, page)

    return { tickets }
  }
}
