import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { search } from './controllers/search'

export async function appRoutes(app: FastifyInstance) {
  app.post('/pets', register)
  app.get('/pets/search', search)
}
