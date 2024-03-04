import { CreateSystemError } from '@/use-cases/errors/create-system-error'
import { makeCreateSystemUseCase } from '@/use-cases/factories/make-create-system-use-case'
import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createSystem(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createSystemBodySchema = z.object({
    name: z.string(),
  })

  const { name } = createSystemBodySchema.parse(request.body)

  try {
    const createSystemUseCase = makeCreateSystemUseCase()
    const getUserProfile = makeGetUserProfileUseCase()

    const { user } = await getUserProfile.execute({
      userId: request.user.sub,
    })

    await createSystemUseCase.execute({
      name,
      user_id: user.id,
    })
  } catch (err) {
    if (err instanceof CreateSystemError) {
      return reply.status(409).send({
        message: err.message,
      })
    }

    throw err
  }
}
