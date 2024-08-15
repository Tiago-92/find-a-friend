import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { CreatePetsUseCase } from '@/use-cases/create-pets'
import { expect, describe, it } from 'vitest'

describe('Create Pet Use Case', () => {
  it('should to create pet', async () => {
    const prismaPetsRepository = new InMemoryPetsRepository()
    const sut = new CreatePetsUseCase(prismaPetsRepository)

    const { pet } = await sut.execute({
      name: 'Belinha',
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

    expect(pet.id).toEqual(expect.any(String))
  })
})
