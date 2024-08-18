import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class PrismaPetsRepository {
  async create(data: Prisma.PetCreateInput) {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }

  async findyByIndependeceLevel(independeceLevel: string) {
    const pets = await prisma.pet.findMany({
      where: {
        independeceLevel,
      },
    })

    return pets
  }
}
