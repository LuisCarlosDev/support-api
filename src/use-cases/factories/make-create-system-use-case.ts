import { PrismaSystemsRepository } from '@/repositories/prisma/prisma-systems-repository'
import { CreateSystemUseCase } from '../create-system'

export function makeCreateSystemUseCase() {
  const systemRepository = new PrismaSystemsRepository()
  const createSystemUseCase = new CreateSystemUseCase(systemRepository)

  return createSystemUseCase
}
