import { User } from '../interface/userInterface';
import { loadUsers, saveUsers } from '../utils/fileHandler';

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
export function deleteUser(firstName: string ,lastName:string): void {
     const users = loadUsers();
     const pass = users.filter(user => user.firstName !== firstName || user.lastName !== lastName);
     if (users.length == pass.length) {
      console.log("no user found");
      return;
     } else {
      saveUsers(pass);
      console.log(`${firstName} ${lastName} is deleted`);
     }
    }
    
// Updating users
export function updateUser(firstName: string, newLastname: string): void {
    const users = loadUsers();
    const index = users.findIndex(user => user.firstName == firstName);
 if (index == -1) {
 console.log(`user not found`);
 } else {
  users[index].lastName = newLastname;
  saveUsers(users);
  console.log(`${firstName} updated to ${newLastname}`); 
  console.log("new features added")
}
}