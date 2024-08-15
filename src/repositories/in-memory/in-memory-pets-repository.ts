import { Pet, Prisma } from '@prisma/client'
import { PrismaPetsRepository } from '../prisma-pets-repository'

export class InMemoryPetsRepository implements PrismaPetsRepository {
  public items: Pet[] = []

  async find(
    name?: string,
    city?: string,
    about?: string,
    age?: string,
    animalSize?: string,
    energyLevel?: string,
    independeceLevel?: string,
  ): Promise<Pet[]> {
    const pets = this.items.filter((pet) => {
      return (
        (!name || pet.name === name) &&
        (!city || pet.city === city) &&
        (!about || pet.about === about) &&
        (!age || pet.age === age) &&
        (!animalSize || pet.animalSize === animalSize) &&
        (!energyLevel || pet.energyLevel === energyLevel) &&
        (!independeceLevel || pet.independeceLevel === independeceLevel)
      )
    })

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
      state: data.state,
    }

    this.items.push(pet)

    return pet
  }
}
