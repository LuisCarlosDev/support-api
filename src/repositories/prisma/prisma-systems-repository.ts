import { Prisma } from '@prisma/client'
import { SystemsRepository } from '../systems-repository'
import { prisma } from '@/lib/prisma'

export class PrismaSystemsRepository implements SystemsRepository {
  async create(data: Prisma.SystemCreateInput) {
    const system = await prisma.system.create({
      data,
    })

    return system
  }
}
