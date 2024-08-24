import { Pet, Prisma } from '@prisma/client'
import { PrismaPetsRepository } from '../prisma-pets-repository'

interface PetWithOrg extends Pet {
  org: {
    id: string
    name: string
    adress: string
    city: string
    phone: string
  }
}

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

  async findByCity(city: string): Promise<PetWithOrg[]> {
    const pet: Pet = {
      id: 'pet-1',
      name: 'Rex',
      about: 'Um cachorro muito amigável',
      age: '2 anos',
      animalSize: 'Médio',
      energyLevel: 'Alto',
      independeceLevel: 'Baixo',
      photo: 'foto-do-rex.jpg',
      environment: 'Casa com quintal',
      orgId: '7c4a9620-789e-479d-8eee-b9bcd5d1dab6',
    }

    const org = {
      id: '7c4a9620-789e-479d-8eee-b9bcd5d1dab6',
      name: 'Cantinho do Pet',
      adress: 'Rua dos Rubis',
      phone: '42998370871',
      city: 'Castro',
    }

    if (pet.orgId === org.id && org.city === city) {
      return [
        {
          ...pet,
          org,
        },
      ]
    } else {
      return []
    }
  }
}
