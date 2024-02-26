import { Prisma, System } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { SystemsRepository } from '../systems-repository'

export class InMemorySystemsRepository implements SystemsRepository {
  public items: System[] = []

  async create(data: Prisma.SystemCreateInput) {
    const system = {
      id: randomUUID(),
      name: data.name,
    }

    this.items.push(system)

    return system
  }
}
