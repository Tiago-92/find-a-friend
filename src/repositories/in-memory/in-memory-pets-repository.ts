import { Pet, Prisma } from '@prisma/client'
import { PrismaPetsRepository } from '../prisma-pets-repository'

export class InMemoryPetsRepository implements PrismaPetsRepository {
  public items: Pet[] = []

  async findyByIndependeceLevel(energyLevel: string) {
    const pets = this.items.filter((item) => item.energyLevel === energyLevel)

    return pets
  }

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
}
