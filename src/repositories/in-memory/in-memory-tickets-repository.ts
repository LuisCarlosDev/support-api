import { Prisma, Ticket } from '@prisma/client'
import { TicketsRepository } from '../tickets-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryTickestRepository implements TicketsRepository {
  public items: Ticket[] = []

  async create(data: Prisma.TicketUncheckedCreateInput) {
    const ticket = {
      id: randomUUID(),
      question: data.question,
      question_type: data.question_type,
      impact: data.impact,
      status: data.status,
      user_id: randomUUID(),
      system_id: randomUUID(),
      created_at: new Date(),
    }

    this.items.push(ticket)

    return ticket
  }
}
