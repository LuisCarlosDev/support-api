import { makeSearchTicketsUseCase } from '@/use-cases/factories/make-search-tickest-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function SearchTickets(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const searchTicketsQuerySchema = z.object({
    q: z.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { q, page } = searchTicketsQuerySchema.parse(request.query)

  const searchTicketsUseCase = makeSearchTicketsUseCase()

  const { tickets } = await searchTicketsUseCase.execute({
    query: q,
    page,
  })

  return reply.status(200).send({ tickets })
}
