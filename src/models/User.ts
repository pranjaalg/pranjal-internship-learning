interface UserData {
    firstname: string;
    lastname: string;
  }
  
  interface UserModel extends UserData {
    id: number;
  }
  
  // for data storage 
  class User {
    private static users: UserModel[] = [];
    private static nextId: number = 1;
    
    static findAll(): UserModel[] {
      return this.users;
    }
    
    static findById(id: string): UserModel | undefined {
      return this.users.find(user => user.id === parseInt(id));
    }
    
    static create(userData: UserData): UserModel {
      const newUser: UserModel = {
        id: this.nextId++,
        firstname: userData.firstname,
        lastname: userData.lastname
      };
      
      this.users.push(newUser);
      return newUser;
    }
    
    static update(id: string, userData: Partial<UserData>): UserModel | null {
      const user = this.findById(id);
      
      if (!user) return null;
      
      if (userData.firstname) user.firstname = userData.firstname;
      if (userData.lastname) user.lastname = userData.lastname;
      
      return user;
    }
    
    static delete(id: string): boolean {
      const initialLength = this.users.length;
      this.users = this.users.filter(user => user.id !== parseInt(id));
      
      return this.users.length !== initialLength;
    }
  }
  
  export default User;