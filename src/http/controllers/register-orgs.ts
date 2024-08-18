import { makeCreateOrgsUseCase } from '@/use-cases/factories/make-create-orgs-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerOrg(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const orgsBodySchema = z.object({
    name: z.string(),
    adress: z.string(),
    city: z.string(),
    phone: z.string(),
  })

  const { name, adress, city, phone } = orgsBodySchema.parse(request.body)

  const createOrgsUseCase = makeCreateOrgsUseCase()

  await createOrgsUseCase.execute({
    name,
    adress,
    city,
    phone,
  })

  return reply.status(201).send()
}
