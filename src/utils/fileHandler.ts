
  
  import * as fs from 'fs';
  import * as path from 'path';
  import { User } from '../interface/userinterface';
  
  const filePath = path.join(__dirname, '..', '..', 'user.json');
  
  export function loadUsers(): User[] {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '[]');
    }
    
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as User[];
  
}
  export function saveUsers(users: User[]): void {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  }