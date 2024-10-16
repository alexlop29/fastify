// repositories
import { UsersV2Repository } from "../../repostiories";

export class UsersServiceV2 {
  private usersRepository = new UsersV2Repository();
  constructor() {}

  getAll() {
    return this.usersRepository.getAll();
  }
}
