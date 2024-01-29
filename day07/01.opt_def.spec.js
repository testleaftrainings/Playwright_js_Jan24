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
function userData(fName, lName, email, height, city, age) {
    console.log("Sign up with ".concat(fName, ", ").concat(lName, ", ").concat(email, ", age: ").concat(age, ", height:").concat(height, ", ").concat(city));
}
userData("Shri", "T", "shri@gmail.com");
function profileContent(firstName, age, dob, userProfile) {
    if (userProfile === void 0) { userProfile = "Available"; }
    console.log("Profile Details ".concat(firstName, ", ").concat(age, ", ").concat(dob, ", ").concat(userProfile));
}
profileContent("", 28, "27/01/1995");
