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
}          // Nested objects

console.log(regularUser.fullName);     // { userfullName: { firstName: 'Sanchita', lastName: 'Lakshman' } }
console.log(regularUser.fullName.userfullName);     // { firstName: 'Sanchita', lastName: 'Lakshman' }
console.log(regularUser.fullName.userfullName.firstName);     // Sanchita

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = {obj1, obj2, obj3}
//console.log(obj4);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' }, obj3: { '5': 'a', '6': 'b' } }

                     // or

//const obj4 = Object.assign({}, obj1, obj2, obj3);
//console.log(obj4);    //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// {} -> acts as a target.   // obj1, obj2, obj3 -> act as sources.

                     // or

const obj4 = {...obj1, ...obj2, ...obj3}    // same as array combining method
console.log(obj4);       // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const users = [
    {
        id: 1,
        email: "one@gmail.com"
    },
    {
        id: 2,
        email: "two@gmail.com"
    },
    {
        id: 3,
        email: "three@gmail.com"
    }
]    // use this syntax when the values are came from a database in the form of "array of objects".

console.log(users[1].email);      // two@gmail.com

//console.log(tinderUser);    // { id: '123@abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser));     // [ 'id', 'name', 'isLoggedIn' ]    -> output value is of array datatype
console.log(Object.values(tinderUser));      // [ '123@abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));       // [ [ 'id', '123@abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));     // true