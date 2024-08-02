import { Pet, Prisma } from '@prisma/client'
import { PrismaPetsRepository } from '../prisma-pets-repository'

export class InMemoryPetsRepository implements PrismaPetsRepository {
  public items: Pet[] = []

  async findyByCity(city: string) {
    const pets = this.items.filter((item) => item.city === city)

    return pets
  }

  async create(data: Prisma.PetCreateInput) {
    const pet = {
      id: 'pet-1',
      name: data.name,
      about: data.about,
      age: data.age,
      animalSize: data.animalSize,
      energyLevel: data.energyLevel,
      independeceLevel: data.independeceLevel,
      photo: data.photo,
      spacious: data.spacious,
      city: data.city,
    }

    this.items.push(pet)

    return pet
  }
}
