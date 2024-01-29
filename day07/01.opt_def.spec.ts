/**
 * 
 * FirstName
 * Surname
 * LastName
 * Mail
 * Ph Num
 * City
 * 
 * Age
 * Gender
 * 
 */



function userData( fName:string, lName:string, email:string, height?:number, city?:string, age?:number ){

    console.log(`Sign up with ${fName}, ${lName}, ${email}, age: ${age}, height:${height}, ${city}`);
    

}
userData("Shri", "T", "shri@gmail.com",);

function profileContent(firstName:string, age:number, dob?:string, userProfile: string = "Available"){

    console.log(`Profile Details ${firstName}, ${age}, ${dob}, ${userProfile}`);

}
profileContent("", 28, "27/01/1995")