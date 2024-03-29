import { makeFetchUserTicketUseCase } from '@/use-cases/factories/make-get-user-ticket-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function FetchUserTickets(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchUserTicketsBodySchema = z.object({
    page: z.coerce.number().min(1).default(1),
    q: z.string().optional(),
  })

  const { page, q } = fetchUserTicketsBodySchema.parse(request.query)

  const fetchUserTickets = makeFetchUserTicketUseCase()

  const { tickets } = await (
    await fetchUserTickets
  ).execute({
    page,
    userId: request.user.sub,
    query: q ?? '',
  })

  return reply.status(200).send({ tickets })
}
