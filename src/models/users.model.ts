import type { User } from './models';

export type Users = ({ id: number } & User)[];

export interface InviteUser {
  groupId: number;
  userIds: number[];
}
