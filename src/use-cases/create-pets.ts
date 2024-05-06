import { prisma } from '@/lib/prisma'
import { PrismaPetsRepository } from '@/repositories/prisma-pets-repository'

interface RegisterPetsUseCaseRequest {
  name: string
  about: string
  age: string
  energyLevel: string
  animalSize: string
  independeceLevel: string
  photo: string
  spacious: string
}

export async function registerPetsUseCase({
  name,
  about,
  age,
  energyLevel,
  animalSize,
  independeceLevel,
  photo,
  spacious,
}: RegisterPetsUseCaseRequest) {
  await prisma.pet.create({
    data: {
      name,
      about,
      age,
      energyLevel,
      animalSize,
      independeceLevel,
      photo,
      spacious,
    },
  })

  const prismaPetsRepository = new PrismaPetsRepository()

  await prismaPetsRepository.create({
    name,
    about,
    age,
    energyLevel,
    animalSize,
    independeceLevel,
    photo,
    spacious,
  })
}
