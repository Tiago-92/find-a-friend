import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { SearchPetsByCityUseCase } from '@/use-cases/search-pets-by-city'
import { expect, describe, it, beforeEach } from 'vitest'

let prismaPetsRepository: InMemoryPetsRepository
let sut: SearchPetsByCityUseCase

describe('Search Pets Use Case', () => {
  beforeEach(() => {
    prismaPetsRepository = new InMemoryPetsRepository()
    sut = new SearchPetsByCityUseCase(prismaPetsRepository)
  })

  it('should be able to search pet by city', async () => {
    await prismaPetsRepository.create({
      name: 'Belinha',
      about: 'Description Pet',
      age: '6',
      animalSize: 'P',
      energyLevel: '3',
      independeceLevel: '4',
      photo: 'pet.png',
      spacious: 'lore spacious',
      city: 'City Test',
    })

    await prismaPetsRepository.create({
      name: 'Luna',
      about: 'Description Pet',
      age: '3',
      animalSize: 'G',
      energyLevel: '3',
      independeceLevel: '5',
      photo: 'pet.png',
      spacious: 'lore spacious',
      city: 'City Test',
    })

    const { pets } = await sut.execute({
      city: 'City Test',
    })

    expect(pets).toHaveLength(2)
  })
})
