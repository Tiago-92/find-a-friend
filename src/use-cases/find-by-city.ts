import { PrismaPetsRepository } from '@/repositories/prisma-pets-repository'
import { Pet } from '@prisma/client'

interface FindByCityRequest {
  city: string
}

interface FindByCityResponse {
  pets: Pet[]
}

export class FindByCityUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private prismaPetsRepository: PrismaPetsRepository) {}

  async execute({ city }: FindByCityRequest): Promise<FindByCityResponse> {
    const pets = await this.prismaPetsRepository.findByCity(city)

    return {
      pets,
    }
  }
}
