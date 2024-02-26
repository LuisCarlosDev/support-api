import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryTickestRepository } from '@/repositories/in-memory/in-memory-tickets-repository'
import { CreateTicketUseCase } from './create-ticket'
import { randomUUID } from 'crypto'

let ticketsRepository: InMemoryTickestRepository
let sut: CreateTicketUseCase

describe('Create Ticket Use Case', () => {
  beforeEach(() => {
    ticketsRepository = new InMemoryTickestRepository()
    sut = new CreateTicketUseCase(ticketsRepository)
  })

  it('should to create ticket', async () => {
    const { ticket } = await sut.execute({
      question: 'Question example',
      question_type: 'Questi type example',
      impact: 'low',
      status: 'pending',
      system_id: randomUUID(),
      user_id: randomUUID(),
    })

    expect(ticket.question).toEqual(expect.any(String))
  })
})
