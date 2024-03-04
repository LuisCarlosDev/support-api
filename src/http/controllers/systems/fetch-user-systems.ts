import { makeFetchUserSystemsUseCase } from '@/use-cases/factories/make-fetch-user-systems-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function FetchUserSystems(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchUserSystemsBodySchema = z.object({
    page: z.coerce.number().min(1).default(1),
    q: z.string().optional(),
  })

  const { page, q } = fetchUserSystemsBodySchema.parse(request.query)

  const fetchUserSystems = makeFetchUserSystemsUseCase()

  const { systems } = await (
    await fetchUserSystems
  ).execute({
    page,
    userId: request.user.sub,
    query: q ?? '',
  })

  return reply.status(200).send({
    systems,
  })
}
