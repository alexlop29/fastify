"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersV2Repository = void 0;
const users = [
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
class UsersV2Repository {
    constructor() { }
    getAll() {
        return users;
    }
}
exports.UsersV2Repository = UsersV2Repository;
//# sourceMappingURL=Users.js.map