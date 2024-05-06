import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { registerPetsUseCase } from '@/use-cases/create-pets'

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

  try {
    await registerPetsUseCase({
      name,
      about,
      age,
      energyLevel,
      animalSize,
      independeceLevel,
      photo,
      spacious,
    })
  } catch (err) {
    return reply.status(500).send()
  }

  return reply.status(201).send()
}
