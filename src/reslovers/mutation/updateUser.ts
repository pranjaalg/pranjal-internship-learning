import { prisma } from '../../prismaClient';

export const updateUser = async (
  _: any,
  { id, firstName, lastName }: { id: string; firstName?: string; lastName?: string }
) => await prisma.user.update({
  where: { id },
  data: { firstName, lastName },
});
