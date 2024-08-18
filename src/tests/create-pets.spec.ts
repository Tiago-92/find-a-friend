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
      environment: 'lore spacious',
      orgId: '63a56a94-6adf-4abc-9885-7ef92ff69774',
    })

    expect(pet.id).toEqual(expect.any(String))
  })
})
