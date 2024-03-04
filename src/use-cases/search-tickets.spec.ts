import { InMemoryTickestRepository } from '@/repositories/in-memory/in-memory-tickets-repository'
import { SearchTicketsUseCase } from './search-tickets'
import { beforeEach, describe, it } from 'vitest'

let ticketsRepository: InMemoryTickestRepository
let sut: SearchTicketsUseCase

describe('Search Tickets Use Case', () => {
  beforeEach(async () => {
    ticketsRepository = new InMemoryTickestRepository()
    sut = new SearchTicketsUseCase(ticketsRepository)
  })

  it('should be able to search for tickets', async () => {
    sut.execute({
      page: 1,
      query: 'test',
    })
  })
})
