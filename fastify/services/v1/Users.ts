import { UsersRepository } from "../../repostiories";

export class UsersService {
  private usersRepository = new UsersRepository();
  constructor() {}

  getAll() {
    return this.usersRepository.getAll();
  }
}
