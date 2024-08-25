import { UserAlreadyExistsError } from '@/use-cases/errors/orgs-already-exists-error'
import { makeCreateOrgsUseCase } from '@/use-cases/factories/make-create-orgs-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerOrg(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const orgsBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    adress: z.string(),
    city: z.string(),
    phone: z.string(),
    password: z.string(),
  })

  const { name, email, adress, city, phone, password } = orgsBodySchema.parse(
    request.body,
  )

  try {
    const createOrgsUseCase = makeCreateOrgsUseCase()

    await createOrgsUseCase.execute({
      name,
      email,
      adress,
      city,
      phone,
      password,
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
