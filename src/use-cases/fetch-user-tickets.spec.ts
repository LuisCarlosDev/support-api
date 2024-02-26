import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryTickestRepository } from '@/repositories/in-memory/in-memory-tickets-repository'
import { randomUUID } from 'crypto'
import { FetchUserTickets } from './fetch-user-tickets'

let ticketsRepository: InMemoryTickestRepository
let sut: FetchUserTickets

describe('Fetch User Tickets Use Case', () => {
  beforeEach(() => {
    ticketsRepository = new InMemoryTickestRepository()
    sut = new FetchUserTickets(ticketsRepository)
  })

  it('should be able to fetch tickets', async () => {
    await ticketsRepository.create({
      question: 'Question example',
      question_type: 'Questi type example',
      impact: 'low',
      status: 'pending',
      system_id: randomUUID(),
      user_id: randomUUID(),
    })

    await ticketsRepository.create({
      question: 'Question example 2',
      question_type: 'Questi type example',
      impact: 'low',
      status: 'pending',
      system_id: randomUUID(),
      user_id: randomUUID(),
    })

    const { tickets } = await sut.execute({
      userId: 'user-01',
      page: 1,
    })

    expect(tickets).toHaveLength(2)
    expect(tickets).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ question: 'Question example' }),
        expect.objectContaining({ question: 'Question example 2' }),
      ]),
    )
  })
})
