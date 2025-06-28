const tinderUser = new Object()    // {}     // singleton object
//const tinderUser ={}           // {}     // Non-singleton object

tinderUser.id = "123@abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);      // { id: '123@abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullName: {
            firstName: "Sanchita",
            lastName: "Lakshman"
        }
    }
}

console.log(regularUser.fullName);     // { userfullName: { firstName: 'Sanchita', lastName: 'Lakshman' } }
console.log(regularUser.fullName.userfullName);     // { firstName: 'Sanchita', lastName: 'Lakshman' }
console.log(regularUser.fullName.userfullName.firstName);     // Sanchita

