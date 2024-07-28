import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCreatePetsUseCase } from '@/use-cases/factories/make-create-pets-use-case'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const usersBodySchema = z.object({
    name: z.string(),
    about: z.string(),
    age: z.string(),
    energyLevel: z.string(),
    animalSize: z.string(),
    independeceLevel: z.string(),
    photo: z.string(),
    spacious: z.string(),
  })

  const {
    name,
    about,
    age,
    energyLevel,
    animalSize,
    independeceLevel,
    photo,
    spacious,
  } = usersBodySchema.parse(request.body)

  const createPetsUseCase = makeCreatePetsUseCase()

  await createPetsUseCase.execute({
    name,
    about,
    age,
    energyLevel,
    animalSize,
    independeceLevel,
    photo,
    spacious,
  })

  return reply.status(201).send()
}
