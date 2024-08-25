import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class PrismaOrgsRepository {
  async create(data: Prisma.OrgCreateInput) {
    const org = await prisma.org.create({
      data,
    })

    return org
  }

  async findByEmail(email: string) {
    const userWithSameEmail = await prisma.org.findUnique({
      where: {
        email,
      },
    })

    return userWithSameEmail
  }
}
