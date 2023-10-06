import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const usePrisma =
  globalForPrisma.prisma || new PrismaClient({ log: ["error"] }); // this will make it log every query

if (process.env.NODE_ENV != "production") globalForPrisma.prisma;
