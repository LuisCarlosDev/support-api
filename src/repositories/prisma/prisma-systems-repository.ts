import { Prisma } from '@prisma/client'
import { SystemsRepository } from '../systems-repository'
import { prisma } from '@/lib/prisma'

export class PrismaSystemsRepository implements SystemsRepository {
  async findManyUserId(userId: string, page: number, query: string) {
    const systems = await prisma.system.findMany({
      where: {
        user_id: userId,
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return systems
  }

  async create(data: Prisma.SystemUncheckedCreateInput) {
    const system = await prisma.system.create({
      data,
    })

    return system
  }
}
