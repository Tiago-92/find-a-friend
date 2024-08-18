import { PrismaPetsRepository } from '@/repositories/prisma-pets-repository'
import { Pet } from '@prisma/client'

interface SearchPetsRequest {
  age?: string
  animalSize?: string
  energyLevel?: string
  independeceLevel?: string
}

interface SearchPetsResponse {
  pets: Pet[]
}

export class SearchPetsByCityUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private prismaPetsRepository: PrismaPetsRepository) {}

  async execute({
    age,
    animalSize,
    energyLevel,
    independeceLevel,
  }: SearchPetsRequest): Promise<SearchPetsResponse> {
    const pets = await this.prismaPetsRepository.find(
      age,
      animalSize,
      energyLevel,
      independeceLevel,
    )

    return {
      pets,
    }
  }

  /* async search({
    age,
  }: SearchPetsByAgeRequest): Promise<SearchPetsByAgeResponse> {
    const search = await this.prismaPetsRepository.findyByAge(age)

    return {
      search,
    }
  } */
}
