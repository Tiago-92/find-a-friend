import { Org, Prisma } from '@prisma/client'
import { PrismaOrgsRepository } from '../prisma-orgs-repository'

export class InMemoryOrgsRepository implements PrismaOrgsRepository {
  public items: Org[] = []

  async create(data: Prisma.OrgCreateInput) {
    const org = {
      id: 'org-id',
      name: data.name,
      adress: data.adress,
      city: data.city,
      phone: data.phone,
    }

    this.items.push(org)

    return org
  }
}
