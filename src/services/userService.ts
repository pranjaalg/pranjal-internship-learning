import { User } from '../interface/userinterface';
import { loadUsers, saveUsers } from '../utils/filehandler';

// Add or create user
export function addUser(firstName: string, lastName: string): void {
  const users = loadUsers();
  users.push({ firstName, lastName });
  saveUsers(users);
  console.log(`${firstName} is added `);
  if (firstName == "" || lastName == "") {
    console.log("first and last anme cannot be empty");
  }
}

// Read users
export function readUser(): void {
  const users = loadUsers();
  console.table(users);
}

// Delete user
export function deleteUser(firstName: string): void {
  const users = loadUsers();
  const pass = users.filter(user => user.firstName !== firstName);
  if (users.length == pass.length) {
    console.log("no user found");
    return;
  } else {
    saveUsers(pass);
    console.log(`${firstName} is deleted`);
  }
}

// Updating users
export function updatreUser(firstName: string, newLastname: string): void {
  const users = loadUsers();
  const index = users.findIndex(user => user.firstName == firstName);
  if (index == -1) {
    console.log(`user not found`);
  } else {
    users[index].lastName = newLastname;
    saveUsers(users);
    console.log(`${firstName} updated to ${newLastname}`);
  }
}