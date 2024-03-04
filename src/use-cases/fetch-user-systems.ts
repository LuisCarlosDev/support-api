import { SystemsRepository } from '@/repositories/systems-repository'
import { System } from '@prisma/client'

interface FetchUserSystemsRequest {
  userId: string
  page: number
  query: string
}

interface FetchUserSystemsResponse {
  systems: System[]
}

export class FetchUserSystems {
  constructor(private systemsRepository: SystemsRepository) {}

  async execute({
    userId,
    page,
    query,
  }: FetchUserSystemsRequest): Promise<FetchUserSystemsResponse> {
    const systems = await this.systemsRepository.findManyUserId(
      userId,
      page,
      query,
    )

    return { systems }
  }
}
