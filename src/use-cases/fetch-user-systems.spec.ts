import { expect, describe, it, beforeEach } from 'vitest'
import { randomUUID } from 'crypto'
import { FetchUserSystems } from './fetch-user-systems'
import { InMemorySystemsRepository } from '@/repositories/in-memory/in-memory-systems-repository'

let systemsRepository: InMemorySystemsRepository
let sut: FetchUserSystems

describe('Fetch User Systems Use Case', () => {
  beforeEach(() => {
    systemsRepository = new InMemorySystemsRepository()
    sut = new FetchUserSystems(systemsRepository)
  })

  it('should be able to fetch systems', async () => {
    await systemsRepository.create({
      name: 'System 01',
      user_id: randomUUID(),
    })

    await systemsRepository.create({
      name: 'System 02',
      user_id: randomUUID(),
    })

    const { systems } = await sut.execute({
      userId: 'user-01',
      page: 1,
      query: '',
    })

    expect(systems).toHaveLength(2)
    expect(systems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'System 01' }),
        expect.objectContaining({ name: 'System 02' }),
      ]),
    )
  })

  it('should be able to fetch paginated systems', async () => {
    for (let i = 1; i <= 22; i++) {
      await systemsRepository.create({
        name: `System ${i}`,
        user_id: 'user-1',
      })
    }

    const { systems } = await sut.execute({
      userId: 'user-1',
      page: 2,
      query: '',
    })

    expect(systems).toHaveLength(2)
    expect(systems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'System 21' }),
        expect.objectContaining({ name: 'System 22' }),
      ]),
    )
  })
})
