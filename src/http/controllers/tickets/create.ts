import { makeCreateTicketUseCase } from '@/use-cases/factories/make-create-ticket-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    problem: z.string(),
    impact: z.string(),
    status: z.string(),
    user_id: z.string(),
  })

  const { problem, impact, status, user_id } = createBodySchema.parse(
    request.body,
  )

  try {
    const createTicketUseCase = makeCreateTicketUseCase()

    await createTicketUseCase.execute({
      problem,
      impact,
      status,
      user_id,
    })
  } catch (err) {
    console.log(err)
  }
}
