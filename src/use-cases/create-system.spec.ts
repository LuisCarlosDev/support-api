import { expect, describe, it, beforeEach } from 'vitest'
import { InMemorySystemsRepository } from '@/repositories/in-memory/in-memory-systems-repository'
import { CreateSystemUseCase } from './create-system'

let systemsRepository: InMemorySystemsRepository
let sut: CreateSystemUseCase

describe('Create System Use Case', () => {
  beforeEach(() => {
    systemsRepository = new InMemorySystemsRepository()
    sut = new CreateSystemUseCase(systemsRepository)
  })

  it('should to create system', async () => {
    const { system } = await sut.execute({
      name: 'System example',
    })

    expect(system.name).toEqual('System example')
  })
})
