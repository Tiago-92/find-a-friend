import { PrismaPetsRepository } from '@/repositories/prisma-pets-repository'
import { CreatePetsUseCase } from '../create-pets'

export function makeCreatePetsUseCase() {
  const petsRepository = new PrismaPetsRepository()
  const useCase = new CreatePetsUseCase(petsRepository)

  return useCase
}
