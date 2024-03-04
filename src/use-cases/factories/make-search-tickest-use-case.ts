import { PrismaTicketsRepository } from '@/repositories/prisma/prisma-tickets-repository'
import { SearchTicketsUseCase } from '../search-tickets'

export function makeSearchTicketsUseCase() {
  const searchTicketsRepository = new PrismaTicketsRepository()
  const searchTicketsUseCase = new SearchTicketsUseCase(searchTicketsRepository)

  return searchTicketsUseCase
}
