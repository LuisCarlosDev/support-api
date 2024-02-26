import { Prisma, System } from '@prisma/client'

export interface SystemsRepository {
  create(data: Prisma.SystemCreateInput): Promise<System>
}
