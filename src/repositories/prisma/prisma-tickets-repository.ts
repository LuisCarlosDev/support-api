import { Prisma } from '@prisma/client'
import { TicketsRepository } from '../tickets-repository'
import { prisma } from '@/lib/prisma'

export class PrismaTicketsRepository implements TicketsRepository {
  async findManyUserId(userId: string, page: number, query: string) {
    const tickets = await prisma.ticket.findMany({
      where: {
        user_id: userId,
        impact: {
          contains: query,
        },
      },
      include: {
        system: true,
      },
      orderBy: {
        created_at: 'desc',
      },
      skip: (page - 1) * 20,
      take: 20,
    })

    return tickets
  }

  async create(data: Prisma.TicketUncheckedCreateInput) {
    const ticket = await prisma.ticket.create({
      data,
    })

    return ticket
  }

  async searchMany(query: string, page: number) {
    const tickets = await prisma.ticket.findMany({
      where: {
        impact: {
          contains: query,
        },
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return tickets
  }
}
