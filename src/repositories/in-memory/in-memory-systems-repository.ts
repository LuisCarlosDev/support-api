import { Prisma, System } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { SystemsRepository } from '../systems-repository'

export class InMemorySystemsRepository implements SystemsRepository {
  public items: System[] = []

  async findManyUserId(userId: string, page: number, query: string) {
    return (
      this.items
        .filter((item) => item.user_id === userId)
        .slice((page - 1) * 20, page * 20) &&
      this.items
        .filter((system) => system.name.includes(query))
        .slice((page - 1) * 20, page * 20)
    )
  }

  async create(data: Prisma.SystemUncheckedCreateInput) {
    const system = {
      id: randomUUID(),
      name: data.name,
      user_id: randomUUID(),
    }

    this.items.push(system)

    return system
  }
}
