import { PrismaOrgsRepository } from '@/repositories/prisma-orgs-repository'
import { Org } from '@prisma/client'

interface RegisterOrgsUseCaseRequest {
  name: string
  adress: string
  city: string
  phone: string
}

interface CreateOrgsUseCaseResponse {
  org: Org
}

export class CreateOrgsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private prismaOrgsRepository: PrismaOrgsRepository) {}

  async execute({
    name,
    adress,
    city,
    phone,
  }: RegisterOrgsUseCaseRequest): Promise<CreateOrgsUseCaseResponse> {
    const org = await this.prismaOrgsRepository.create({
      name,
      adress,
      city,
      phone,
    })

    return {
      org,
    }
  }
}
