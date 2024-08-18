import { InMemoryOrgsRepository } from '@/repositories/in-memory/im-memory-orgs-repository'
import { CreateOrgsUseCase } from '@/use-cases/create-orgs'
import { expect, describe, it } from 'vitest'

describe('Create Org Use Case', () => {
  it('should to create org', async () => {
    const prismaPetsRepository = new InMemoryOrgsRepository()
    const sut = new CreateOrgsUseCase(prismaPetsRepository)

    const { org } = await sut.execute({
      name: 'Cantinho Animal',
      adress: 'Rua do Bicho, 575',
      city: 'Carambeí',
      phone: '4X-99XXXXXXX',
    })

    expect(org.id).toEqual(expect.any(String))
  })
})
