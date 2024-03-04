import { SystemsRepository } from '@/repositories/systems-repository'

interface CreateSystemUseCaseRequest {
  name: string
  user_id: string
}

interface CreateSystemUseCaseResponse {
  system: CreateSystemUseCaseRequest
}

export class CreateSystemUseCase {
  constructor(private systemsRepository: SystemsRepository) {}

  async execute({
    name,
    user_id,
  }: CreateSystemUseCaseRequest): Promise<CreateSystemUseCaseResponse> {
    const system = await this.systemsRepository.create({
      name,
      user_id,
    })

    return { system }
  }
}
