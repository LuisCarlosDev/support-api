import { SystemsRepository } from '@/repositories/systems-repository'

interface CreateSystemUseCaseRequest {
  name: string
}

interface CreateSystemUseCaseResponse {
  system: CreateSystemUseCaseRequest
}

export class CreateSystemUseCase {
  constructor(private systemsRepository: SystemsRepository) {}

  async execute({
    name,
  }: CreateSystemUseCaseRequest): Promise<CreateSystemUseCaseResponse> {
    const system = await this.systemsRepository.create({
      name,
    })

    return { system }
  }
}
