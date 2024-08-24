import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { SearchPetsDetailsUseCase } from '@/use-cases/search-pets-details'
import { expect, describe, it, beforeEach } from 'vitest'

let prismaPetsRepository: InMemoryPetsRepository
let sut: SearchPetsDetailsUseCase

describe('Search Pets Details Use Case', () => {
  beforeEach(() => {
    prismaPetsRepository = new InMemoryPetsRepository()
    sut = new SearchPetsDetailsUseCase(prismaPetsRepository)
  })

  it('should be possible to view details of a pet', async () => {
    const orgId = 'a55fb4ee-7d85-4fa0-8e94-d8f90104152e'

    await prismaPetsRepository.create({
      name: 'Bolinha',
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

    const { details } = await sut.execute({
      id: 'pet-1',
    })

    expect(details).toEqual({
      id: 'pet-1',
      name: 'Bolinha',
      about: 'Description Pet',
      age: '6',
      animalSize: 'P',
      energyLevel: '3',
      independeceLevel: '4',
      photo: 'pet.png',
      environment: 'lore spacious',
      orgId: 'a55fb4ee-7d85-4fa0-8e94-d8f90104152e',
    })
  })
})
