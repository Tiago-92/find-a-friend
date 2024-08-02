import { PrismaPetsRepository } from '@/repositories/prisma-pets-repository'
import { Pet } from '@prisma/client'

interface SearchPetsByCityRequest {
  city: string
}

interface SearchPetsByCityResponse {
  pets: Pet[]
}

export class SearchPetsByCityUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private prismaPetsRepository: PrismaPetsRepository) {}

  async execute({
    city,
  }: SearchPetsByCityRequest): Promise<SearchPetsByCityResponse> {
    const pets = await this.prismaPetsRepository.findyByCity(city)

    return {
      pets,
    }
  }
}
