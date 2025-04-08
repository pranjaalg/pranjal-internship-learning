const fs=require("fs");



const filepath ="user.json";
const args=process.argv.slice(2);
const command=args[0];

function loadUser(){

    try {
        const data = fs.readFileSync(filepath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        return []; 
    }
}

function Saveuser(users){
    fs.writeFileSync(filepath, JSON.stringify(users, null, 2));

}


//add or create users  

if(command ==="add"){
    const firstName=args[1];
    const lastName=args[2];


if (!firstName || !lastName) {
    console.log("add first name and last name after node index.js ");
    process.exit(1);
}

let users=loadUser();
if(users.some(user=>user.firstName===firstName)){
    console.log("user with name alreasy exist");
    process.exit(1);
}
users.push({firstName,lastName});
Saveuser(users);
console.log("users saved");

}


// read data 
else if(command==="read"){
    let users=loadUser();

    if(users.length===0){
        console.log("there are no users");
        process.exit(1);
    }
    console.log("all users")
    users.forEach(user=>console.log(`${user.firstName} ${user.lastName}`));

}
//updataing user using first name 
else if(command=="update"){
    const firstName=args[1];
    const newLastName=args[2];
    if(!firstName || !newLastName){
        console.log("write in correct way to update");
        process.exit(1);
    }
    let users = loadUser();
    const userid=users.findIndex(user=>user.firstName===firstName);
    if(userid==-1){
        console.log("no name found");
        process.exit(1);

    }
    users[userid].lastName=newLastName;
    Saveuser(users);
    console.log(`record updated ${firstName} surname changed to ${newLastName}`)

}
//DELETING 
else if(command === "delete"){
    const firstName=args[1];
    if(!firstName){
        console.log("no name to delete");
        process.exit(1);
    }
    let users=loadUser();
    const filterusers=users.filter(user=>user.firstName !==firstName);

    if(users.length===filterusers.length){
        console.log("user not found");
        process.exit(1);
    }
    Saveuser(filterusers);
    console.log(`user deleted ${firstName}`);


}
else{
    console.log("type in correct command use add, read ,update ,delete");
}


     






