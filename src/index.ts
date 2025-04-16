import { addUser, readUser, deleteUser, updatreUser } from './services/userService';

// CLI commands
const [, , cmd, ...args] = process.argv;

if (cmd === "add") {
  addUser(args[0], args[1]);
} else if (cmd === "read") {
  readUser();
} else if (cmd === "delete") {
  deleteUser(args[0]);
} else if (cmd == "update") {
  updatreUser(args[0], args[1]);
} 