import { Prisma, System } from '@prisma/client'

export interface SystemsRepository {
  create(data: Prisma.SystemUncheckedCreateInput): Promise<System>
  findManyUserId(userId: string, page: number, query: string): Promise<System[]>
}
