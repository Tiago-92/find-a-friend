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
    const test = await prismaPetsRepository.create({
      name: 'Mayk',
      about: 'Description Pet',
      age: '6',
      animalSize: 'P',
      energyLevel: '3',
      independeceLevel: '4',
      photo: 'pet.png',
      spacious: 'lore spacious',
      city: 'City Test',
      state: 'State Test',
    })

    console.log(test)

    const { pets } = await sut.execute({
      city: 'City Test',
      about: 'Description Pet',
      age: '6',
      animalSize: 'P',
      energyLevel: '3',
      independeceLevel: '4',
    })

    /* expect(pets).toHaveLength(1) */
    expect(pets[0]).toEqual(
      expect.objectContaining({
        animalSize: 'P',
        energyLevel: '3',
        independeceLevel: '4',
      }),
    )
  })
})
