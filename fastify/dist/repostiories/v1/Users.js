"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const users = [
    {
        id: 1,
        name: "John Doe",
    },
    {
        id: 2,
        name: "Jane Doe",
    },
];
class UsersRepository {
    constructor() { }
    getAll() {
        return users;
    }
}
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=Users.js.map