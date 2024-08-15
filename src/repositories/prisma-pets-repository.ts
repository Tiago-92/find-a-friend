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
    name?: string,
    city?: string,
    about?: string,
    age?: string,
    animalSize?: string,
    energyLevel?: string,
    independeceLevel?: string,
  ) {
    const pets = await prisma.pet.findMany({
      where: {
        name: name || undefined,
        city: city || undefined,
        about: about || undefined,
        age: age || undefined,
        animalSize: animalSize || undefined,
        energyLevel: energyLevel || undefined,
        independeceLevel: independeceLevel || undefined,
      },
    })

    return pets
  }

  /* async findyByAge(age: string) {
    const pets = await prisma.pet.findMany({
      where: {
        age,
      },
    })

    return pets
  }

  async findyByEnergyLevel(energyLevel: string) {
    const pets = await prisma.pet.findMany({
      where: {
        energyLevel,
      },
    })

    return pets
  }

  async findyAnimalSize(animalSize: string) {
    const pets = await prisma.pet.findMany({
      where: {
        animalSize,
      },
    })

    return pets
  }

  async findyByIndependeceLevel(independeceLevel: string) {
    const pets = await prisma.pet.findMany({
      where: {
        independeceLevel,
      },
    })

    return pets
  } */
}
