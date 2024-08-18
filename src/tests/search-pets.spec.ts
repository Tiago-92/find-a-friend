import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { SearchPetsByCityUseCase } from '@/use-cases/search-pets'
import { expect, describe, it, beforeEach } from 'vitest'

let prismaPetsRepository: InMemoryPetsRepository
let sut: SearchPetsByCityUseCase

describe('Search Pets Use Case', () => {
  beforeEach(() => {
    prismaPetsRepository = new InMemoryPetsRepository()
    sut = new SearchPetsByCityUseCase(prismaPetsRepository)
  })

  it('should be able to search pet based on its characteristics', async () => {
    const orgId = 'a55fb4ee-7d85-4fa0-8e94-d8f90104152e'

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
      age: '6',
      animalSize: 'P',
      energyLevel: '3',
    })

    expect(pets[0]).toEqual(
      expect.objectContaining({
        age: '6',
        animalSize: 'P',
        energyLevel: '3',
      }),
    )
  })
})
