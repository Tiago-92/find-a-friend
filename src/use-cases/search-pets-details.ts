import { PrismaPetsRepository } from '@/repositories/prisma-pets-repository'
import { Pet } from '@prisma/client'

interface SearchPetsDetailsRequest {
  id: string
}

interface SearchPetsDetailsResponse {
  details: Pet
}

export class SearchPetsDetailsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private prismaPetsRepository: PrismaPetsRepository) {}

  async execute({
    id,
  }: SearchPetsDetailsRequest): Promise<SearchPetsDetailsResponse> {
    const details = await this.prismaPetsRepository.searchPetDetails(id)

    return {
      details,
    }
  }
}
