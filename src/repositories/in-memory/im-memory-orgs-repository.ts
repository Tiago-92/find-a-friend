import { Org, Prisma } from '@prisma/client'

export class InMemoryOrgsRepository {
  public items: Org[] = []

  async create(data: Prisma.OrgCreateInput) {
    const org = {
      id: 'org-id',
      name: data.name,
      email: data.email,
      adress: data.adress,
      city: data.city,
      phone: data.phone,
      password_hash: data.password_hash,
    }

    this.items.push(org)

    return org
  }

  async findByEmail(email: string) {
    const org = this.items.find((org) => {
      return org.email === email
    })

    return org
  }
}
