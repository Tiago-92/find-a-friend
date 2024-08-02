import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class PrismaPetsRepository {
  async create(data: Prisma.PetCreateInput) {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }

  async findyByCity(city: string) {
    const pets = await prisma.pet.findMany({
      where: {
        city,
      },
    })

    return pets
  }
}
