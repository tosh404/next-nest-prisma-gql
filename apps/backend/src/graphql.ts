/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UserCreateInput {
  name: string;
}

export class UserUpdateInput {
  id: string;
  name?: Nullable<string>;
}

export class UserRemoveInput {
  id: string;
}

export class User {
  __typename?: 'User';
  id: string;
  name: string;
}

export abstract class IQuery {
  __typename?: 'IQuery';

  abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

  abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
  __typename?: 'IMutation';

  abstract userCreate(userCreateInput: UserCreateInput): User | Promise<User>;

  abstract userUpdate(userUpdateInput: UserUpdateInput): User | Promise<User>;

  abstract userRemove(
    userRemoveInput?: Nullable<UserRemoveInput>,
  ): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
