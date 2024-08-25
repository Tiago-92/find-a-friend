import { PrismaOrgsRepository } from '@/repositories/prisma-orgs-repository'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'
import { Org } from '@prisma/client'
import bcrypt from 'bcryptjs'
const { compare } = bcrypt

interface AutheticateUseCaseRequest {
  email: string
  password: string
}

interface AutheticateUseCaseResponse {
  org: Org
}

export class AuthenticateUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private orgsRepository: PrismaOrgsRepository) {}

  async execute({
    email,
    password,
  }: AutheticateUseCaseRequest): Promise<AutheticateUseCaseResponse> {
    const org = await this.orgsRepository.findByEmail(email)

    if (!org) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, org.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      org,
    }
  }
}
