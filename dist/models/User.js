"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Simple in-memory data store
class User {
    static findAll() {
        return this.users;
    }
    static findById(id) {
        return this.users.find(user => user.id === parseInt(id));
    }
    static create(userData) {
        const newUser = {
            id: this.nextId++,
            firstname: userData.firstname,
            lastname: userData.lastname
        };
        this.users.push(newUser);
        return newUser;
    }
    static update(id, userData) {
        const user = this.findById(id);
        if (!user)
            return null;
        if (userData.firstname)
            user.firstname = userData.firstname;
        if (userData.lastname)
            user.lastname = userData.lastname;
        return user;
    }
    static delete(id) {
        const initialLength = this.users.length;
        this.users = this.users.filter(user => user.id !== parseInt(id));
        return this.users.length !== initialLength;
    }
}
User.users = [];
User.nextId = 1;
exports.default = User;
