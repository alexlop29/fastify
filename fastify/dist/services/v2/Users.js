"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersServiceV2 = void 0;
const repostiories_1 = require("../../repostiories");
class UsersServiceV2 {
    usersRepository = new repostiories_1.UsersV2Repository();
    constructor() { }
    getAll() {
        return this.usersRepository.getAll();
    }
}
exports.UsersServiceV2 = UsersServiceV2;
//# sourceMappingURL=Users.js.map