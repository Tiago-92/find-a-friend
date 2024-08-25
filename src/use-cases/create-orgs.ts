import { PrismaOrgsRepository } from '@/repositories/prisma-orgs-repository'
import { Org } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/orgs-already-exists-error'
const { hash } = bcrypt

interface RegisterOrgsUseCaseRequest {
  name: string
  email: string
  adress: string
  city: string
  phone: string
  password: string
}

interface CreateOrgsUseCaseResponse {
  org: Org
}

export class CreateOrgsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private prismaOrgsRepository: PrismaOrgsRepository) {}

  async execute({
    name,
    email,
    adress,
    city,
    phone,
    password,
  }: RegisterOrgsUseCaseRequest): Promise<CreateOrgsUseCaseResponse> {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.prismaOrgsRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const org = await this.prismaOrgsRepository.create({
      name,
      email,
      adress,
      city,
      phone,
      password_hash,
    })

    return {
      org,
    }
  }
}
