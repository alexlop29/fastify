// types
import { User } from "../../types/User";

/*
    NOTE: (alopez) The following variable, users, is simlating an underlying database.
*/
const users: User[] = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

export class UsersRepository {
  constructor() {}

  getAll(): User[] {
    return users;
  }
}
