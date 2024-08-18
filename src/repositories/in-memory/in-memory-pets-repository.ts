import { Pet, Prisma } from '@prisma/client'
import { PrismaPetsRepository } from '../prisma-pets-repository'

export class InMemoryPetsRepository implements PrismaPetsRepository {
  public items: Pet[] = []

  async create(data: Prisma.PetCreateInput) {
    const orgId = data.org.connect?.id || 'erefef51589451c5s1ce'

    const pet = {
      id: 'pet-1',
      name: data.name,
      about: data.about,
      age: data.age,
      animalSize: data.animalSize,
      energyLevel: data.energyLevel,
      independeceLevel: data.independeceLevel,
      photo: data.photo,
      environment: data.environment,
      orgId,
    }

    this.items.push(pet)

    return pet
  }

  async find(
    age?: string,
    animalSize?: string,
    energyLevel?: string,
    independeceLevel?: string,
  ): Promise<Pet[]> {
    return this.items.filter((pet) => {
      return (
        (!age || pet.age === age) &&
        (!animalSize || pet.animalSize === animalSize) &&
        (!energyLevel || pet.energyLevel === energyLevel) &&
        (!independeceLevel || pet.independeceLevel === independeceLevel)
      )
    })
  }
}
