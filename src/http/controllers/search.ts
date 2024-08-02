/* import { makeCreatePetsUseCase } from '@/use-cases/factories/make-create-pets-use-case' */
import { PrismaPetsRepository } from '@/repositories/prisma-pets-repository'
import { SearchPetsByCityUseCase } from '@/use-cases/search-pets-by-city'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const searchPetsQuerySchema = z.object({
    city: z.string(),
  })

  const { city } = searchPetsQuerySchema.parse(request.query)

  const prismaPetsRepository = new PrismaPetsRepository()
  const searchPetsUseCase = new SearchPetsByCityUseCase(prismaPetsRepository)

  const { pets } = await searchPetsUseCase.execute({
    city,
  })

  if (pets.length === 0) {
    return reply.status(404).send({
      error: 'CityNotFound',
      messsage: 'Não foi encontrado nemhumm Pet nessa cidade',
    })
  }

  return reply.status(200).send({
    pets,
  })
}
