import { PrismaPetsRepository } from '@/repositories/prisma-pets-repository'
import { SearchPetsDetailsUseCase } from '@/use-cases/search-pets-details'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function searchPetDetails(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const searchPetDetailsQuerySchema = z.object({
    id: z.string(),
  })

  const { id } = searchPetDetailsQuerySchema.parse(request.query)

  const prismaPetsRepository = new PrismaPetsRepository()
  const searchPetsDetailsUseCase = new SearchPetsDetailsUseCase(
    prismaPetsRepository,
  )

  const { details } = await searchPetsDetailsUseCase.execute({
    id,
  })

  return reply.status(200).send({
    details,
  })
}
