"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const repostiories_1 = require("../../repostiories");
class UsersService {
    usersRepository = new repostiories_1.UsersRepository();
    constructor() { }
    getAll() {
        return this.usersRepository.getAll();
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=Users.js.map