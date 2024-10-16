// types
import { UserV2 } from "../../types";

/*
    NOTE: (alopez) The following variable, users, is simlating an underlying database.
*/
const users: UserV2[] = [
  {
    id: 1,
    name: "John Doe",
    firstName: "John",
    lastName: "Doe",
    alias: "JD",
    aliases: [],
  },
  {
    id: 2,
    name: "Jane Doe",
    firstName: "Jane",
    lastName: "Doe",
    alias: "JND",
    aliases: [],
  },
];

export class UsersV2Repository {
  constructor() {}

  getAll(): UserV2[] {
    return users;
  }
}
