let userProfile:{
    name: string,
    age: number,
    email: string,
    isActive: boolean
} = {
    name: "Sai",
    age: 26,
    email: "sai@gmail.com",
    isActive: true

};

//console.log(objectName.property)
//Dot notation
console.log(userProfile.name );
console.log(userProfile.email);

//Square brackets
console.log(userProfile['isActive']);
console.log(userProfile['age']);



