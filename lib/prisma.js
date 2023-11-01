import { PrismaClient } from '@prisma/client'

const globalForPrisma = new PrismaClient()
export const prisma = globalForPrisma.prisma || new PrismaClient()