import { PrismaSystemsRepository } from '@/repositories/prisma/prisma-systems-repository'
import { FetchUserSystems } from '../fetch-user-systems'

export async function makeFetchUserSystemsUseCase() {
  const systemRepository = new PrismaSystemsRepository()
  const fetchUserSystemUseCase = new FetchUserSystems(systemRepository)

  return fetchUserSystemUseCase
}
