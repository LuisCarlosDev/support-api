import { TicketsRepository } from '@/repositories/tickets-repository'

interface CreateTicketUseCaseRequest {
  question: string
  question_type: string
  impact: 'low' | 'medium' | 'grave'
  status: 'pending' | 'in progress' | 'finish'
  user_id: string
}

export class CreateTicket {
  constructor(private ticketRepository: TicketsRepository) {}

  async execute({
    question,
    question_type,
    impact,
    status,
    user_id,
  }: CreateTicketUseCaseRequest) {
    const ticket = await this.ticketRepository.create({
      question,
      question_type,
      impact,
      status,
      user_id,
    })

    return ticket
  }
}
