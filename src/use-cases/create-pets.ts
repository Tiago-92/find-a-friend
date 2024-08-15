import { PrismaPetsRepository } from '@/repositories/prisma-pets-repository'
import { Pet } from '@prisma/client'

interface RegisterPetsUseCaseRequest {
  name: string
  about: string
  age: string
  energyLevel: string
  animalSize: string
  independeceLevel: string
  photo: string
  spacious: string
  city: string
  state: string
}

interface CreatePetsUseCaseResponse {
  pet: Pet
}

export class CreatePetsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private prismaPetsRepository: PrismaPetsRepository) {}

  async execute({
    name,
    about,
    age,
    energyLevel,
    animalSize,
    independeceLevel,
    photo,
    spacious,
    city,
    state,
  }: RegisterPetsUseCaseRequest): Promise<CreatePetsUseCaseResponse> {
    const pet = await this.prismaPetsRepository.create({
      name,
      about,
      age,
      animalSize,
      energyLevel,
      independeceLevel,
      photo,
      spacious,
      city,
      state,
    })

    return {
      pet,
    }
  }
}
