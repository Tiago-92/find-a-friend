import { PrismaPetsRepository } from '@/repositories/prisma-pets-repository'
import { SearchPetsByCityUseCase } from '../search-pets'

export function makeSearchGymsUseCase() {
  const petsRepository = new PrismaPetsRepository()
  const useCase = new SearchPetsByCityUseCase(petsRepository)

  return useCase
}
