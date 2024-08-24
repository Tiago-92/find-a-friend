import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { FindByCityUseCase } from '@/use-cases/find-by-city'
import { describe, beforeEach, it, expect } from 'vitest'

let prismaPetsRepository: InMemoryPetsRepository
let sut: FindByCityUseCase

describe('Find Pets By City', () => {
  beforeEach(() => {
    prismaPetsRepository = new InMemoryPetsRepository()
    sut = new FindByCityUseCase(prismaPetsRepository)
  })

  it('should return pets in the city when they exist', async () => {
    const orgId = '7c4a9620-789e-479d-8eee-b9bcd5d1dab6'

    await prismaPetsRepository.create({
      name: 'Mayk',
      about: 'Description Pet',
      age: '6',
      animalSize: 'P',
      energyLevel: '3',
      independeceLevel: '4',
      photo: 'pet.png',
      environment: 'lore spacious',
      org: {
        connect: { id: orgId },
      },
    })

    const { pets } = await sut.execute({
      city: 'Castro',
    })

    expect(pets).toHaveLength(1)
  })
})
