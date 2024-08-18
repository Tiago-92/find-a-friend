import { FastifyInstance } from 'fastify'
import { registerPet } from './controllers/register-pets'
import { registerOrg } from './controllers/register-orgs'
import { search } from './controllers/search-pets'

export async function appRoutes(app: FastifyInstance) {
  app.post('/pets', registerPet)
  app.post('/orgs', registerOrg)
  app.get('/pets/search', search)
}
