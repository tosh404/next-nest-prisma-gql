import { UserCreateInput, UserRemoveInput, UserUpdateInput } from '@/graphql';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('userCreate')
  create(@Args('userCreateInput') userCreateInput: UserCreateInput) {
    return this.userService.create(userCreateInput);
  }

  @Query('users')
  findAll() {
    return this.userService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation('userUpdate')
  update(@Args('userUpdateInput') userUpdateInput: UserUpdateInput) {
    return this.userService.update(userUpdateInput);
  }

  @Mutation('userRemove')
  remove(@Args('userRemoveInput') userRemoveInput: UserRemoveInput) {
    return this.userService.remove(userRemoveInput);
  }
}
