import { InMemoryOrgsRepository } from '@/repositories/in-memory/im-memory-orgs-repository'
import { AuthenticateUseCase } from '@/use-cases/authenticate'
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error'
import { hash } from 'bcryptjs'
import { expect, describe, it } from 'vitest'

describe('Authenticate Org Use Case', () => {
  it('should be able to authenticate', async () => {
    const prismaOrgsRepository = new InMemoryOrgsRepository()
    const sut = new AuthenticateUseCase(prismaOrgsRepository)

    await prismaOrgsRepository.create({
      name: 'Lar Canino',
      email: 'email@example.com',
      adress: 'Lorem Ipsum',
      city: 'City',
      phone: 'XX-XXXXXXXX',
      password_hash: await hash('123456', 6),
    })

    const { org } = await sut.execute({
      email: 'email@example.com',
      password: '123456',
    })

    expect(org.id).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with wrong email', async () => {
    const prismaOrgsRepository = new InMemoryOrgsRepository()
    const sut = new AuthenticateUseCase(prismaOrgsRepository)

    expect(() =>
      sut.execute({
        email: 'email@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not be able to authenticate with wrong password', async () => {
    const prismaOrgsRepository = new InMemoryOrgsRepository()
    const sut = new AuthenticateUseCase(prismaOrgsRepository)

    await prismaOrgsRepository.create({
      name: 'Lar Canino',
      email: 'email@example.com',
      adress: 'Lorem Ipsum',
      city: 'City',
      phone: 'XX-XXXXXXXX',
      password_hash: await hash('123456', 6),
    })

    expect(() =>
      sut.execute({
        email: 'email@example.com',
        password: '1254678',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
