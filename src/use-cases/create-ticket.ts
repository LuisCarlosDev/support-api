import { TicketsRepository } from '@/repositories/tickets-repository'

interface CreateTicketUseCaseRequest {
  question: string
  question_type: string
  impact: string
  status: string
  user_id: string
  system_id: string
}

interface CreateTicketUseCaseResponse {
  ticket: CreateTicketUseCaseRequest
}

export class CreateTicketUseCase {
  constructor(private ticketRepository: TicketsRepository) {}

  async execute({
    question,
    question_type,
    impact,
    status,
    user_id,
    system_id,
  }: CreateTicketUseCaseRequest): Promise<CreateTicketUseCaseResponse> {
    const ticket = await this.ticketRepository.create({
      question,
      question_type,
      impact,
      status,
      user_id,
      system_id,
    })

    return { ticket }
  }
}
