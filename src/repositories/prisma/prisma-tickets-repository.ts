import { Prisma } from '@prisma/client'
import { TicketsRepository } from '../tickets-repository'
import { prisma } from '@/lib/prisma'

export class PrismaTicketsrepository implements TicketsRepository {
  async create(data: Prisma.TicketCreateInput) {
    const ticket = await prisma.ticket.create({
      data,
    })

    return ticket
  }
}
