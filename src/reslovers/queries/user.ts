import { prisma } from '../../prismaClient';

export const user = async (_: any, { id }: { id: string }) =>
  await prisma.user.findUnique({ where: { id } });
