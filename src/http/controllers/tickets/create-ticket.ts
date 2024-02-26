import { CreateTicketError } from '@/use-cases/errors/create-ticket-error'
import { makeCreateTicketUseCase } from '@/use-cases/factories/make-create-ticket-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createTicket(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createBodySchema = z.object({
    question: z.string(),
    question_type: z.string(),
    impact: z.string(),
    status: z.string(),
    user_id: z.string(),
    system_id: z.string(),
  })

  const { question, question_type, impact, status, user_id, system_id } =
    createBodySchema.parse(request.body)

  try {
    const createTicketUseCase = makeCreateTicketUseCase()

    await createTicketUseCase.execute({
      question,
      question_type,
      impact,
      status,
      user_id,
      system_id,
    })
  } catch (err) {
    if (err instanceof CreateTicketError) {
      return reply.status(409).send({
        message: err.message,
      })
    }

    throw err
  }
}
