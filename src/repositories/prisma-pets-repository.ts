import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class PrismaPetsRepository {
  async create(data: Prisma.PetCreateInput) {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }

  async find(
    age?: string,
    animalSize?: string,
    energyLevel?: string,
    independeceLevel?: string,
  ) {
    const pets = await prisma.pet.findMany({
      where: {
        age,
        animalSize,
        energyLevel,
        independeceLevel,
      },
    })

    return pets
  }

  async findByCity(city: string) {
    const pets = await prisma.pet.findMany({
      where: {
        org: {
          city,
        },
      },
      include: {
        org: true,
      },
    })

    return pets
  }
}
