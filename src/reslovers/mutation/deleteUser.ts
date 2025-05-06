import { prisma } from '../../prismaClient';

export const deleteUser = async (_: any, { id }: { id: string }) => {
  try {
    await prisma.user.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
};
