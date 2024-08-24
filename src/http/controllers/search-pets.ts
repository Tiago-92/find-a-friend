/* import { makeCreatePetsUseCase } from '@/use-cases/factories/make-create-pets-use-case' */
import { PrismaPetsRepository } from '@/repositories/prisma-pets-repository'
import { SearchPetsByCityUseCase } from '@/use-cases/search-pets'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const searchPetsQuerySchema = z.object({
    age: z.string().optional(),
    animalSize: z.string().optional(),
    energyLevel: z.string().optional(),
    independeceLevel: z.string().optional(),
  })

  const { age, animalSize, energyLevel, independeceLevel } =
    searchPetsQuerySchema.parse(request.query)

  const prismaPetsRepository = new PrismaPetsRepository()
  const searchPetsUseCase = new SearchPetsByCityUseCase(prismaPetsRepository)

  const { pets } = await searchPetsUseCase.execute({
    age,
    animalSize,
    energyLevel,
    independeceLevel,
  })

  if (pets.length === 0) {
    return reply.status(404).send({
      error: 'PetNotFound',
      messsage: 'Não foi encontrado nemhumm Pet',
    })
  }

  return reply.status(200).send({
    pets,
  })
}
