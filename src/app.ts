import fastify from 'fastify'
import { z } from 'zod'
import { prisma } from './lib/prisma'

export const app = fastify()

app.post('/pets', async (request, reply) => {
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

  await prisma.pet.create({
    data: {
      name,
      about,
      age,
      energyLevel,
      animalSize,
      independeceLevel,
      photo,
      spacious,
    },
  })

  return reply.status(201).send()
})
