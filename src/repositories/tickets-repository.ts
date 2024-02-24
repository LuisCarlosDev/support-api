import { Prisma, Ticket } from '@prisma/client'

export interface TicketsRepository {
  create(data: Prisma.TicketCreateInput): Promise<Ticket>
}
