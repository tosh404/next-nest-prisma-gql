import { UserCreateInput, UserRemoveInput, UserUpdateInput } from '@/graphql';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create({ name }: UserCreateInput) {
    return this.prisma.user.create({
      data: { name },
    });
  }

  findAll() {
    return this.prisma.user.findMany({});
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  update({ id, name }: UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data: { name },
    });
  }

  remove({ id }: UserRemoveInput) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
