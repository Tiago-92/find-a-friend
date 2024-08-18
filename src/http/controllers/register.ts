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
    environment: z.string(),
  })

  const {
    name,
    about,
    age,
    energyLevel,
    animalSize,
    independeceLevel,
    photo,
    environment,
  } = usersBodySchema.parse(request.body)

  console.log(request.body)

  const createPetsUseCase = makeCreatePetsUseCase()

  await createPetsUseCase.execute({
    name,
    about,
    age,
    energyLevel,
    animalSize,
    independeceLevel,
    photo,
    environment,
  })

  return reply.status(201).send()
}
