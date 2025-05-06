import { prisma } from '../index';

export const users = async () => await prisma.user.findMany();
