import { prisma } from '../../prismaClient';

export const createUser = async (
  _: any,
  { firstName, lastName }: { firstName: string; lastName: string }
) => await prisma.user.create({ data: { firstName, lastName } });
