import { Prisma } from '@prisma/client'
import { TicketsRepository } from '../tickets-repository'
import { prisma } from '@/lib/prisma'

export class PrismaTicketsRepository implements TicketsRepository {
  async create(data: Prisma.TicketUncheckedCreateInput) {
    const ticket = await prisma.ticket.create({
      data,
    })

    return ticket
  }
}
