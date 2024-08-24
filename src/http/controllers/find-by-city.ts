import { PrismaPetsRepository } from '@/repositories/prisma-pets-repository'
import { FindByCityUseCase } from '@/use-cases/find-by-city'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findByCity(request: FastifyRequest, reply: FastifyReply) {
  const findPetsByCityQuerySchema = z.object({
    city: z.string(),
  })

  const { city } = findPetsByCityQuerySchema.parse(request.query)

  const prismaPetsRepository = new PrismaPetsRepository()
  const findByCityUseCase = new FindByCityUseCase(prismaPetsRepository)

  const { pets } = await findByCityUseCase.execute({
    city,
  })

  console.log(pets)

  return reply.status(200).send({
    pets,
  })
}
