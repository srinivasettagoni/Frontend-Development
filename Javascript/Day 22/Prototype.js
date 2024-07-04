// let person1 = {};
// console.log(person1);

let person2 = {
    name:"Darwin"
}
// console.log(person2.hasOwnProperty("name"));  //true
// console.log(person2.hasOwnProperty("age"))    //false

function Person(firstName,lastName,fullName){
   this.firstName = firstName;
   this.lastName = lastName;
//    this.fullName = function(){
//     return `My name is ${firstName} and ${lastName}`
//    }
}
let person3 = new Person("Darwin","age");

// person3.city = "HYD";
Person.prototype.city = "HYD";
Person.prototype.fullName = function(){
    return ` My name is ${this.firstName} and last name ${this.lastName}`
}

 function Child(dateOfBirth){
    this.dateOfBirth = dateOfBirth;
 }
 let child1 = new Child(10);
 console.log(child1)

 Child.prototype.dateOfBirth = 12

 Child.prototype.eating = function(){
    return ` Eating food `;
 }

 Person.prototype.__proto__ = Child.prototype;
 console.log(child1.eating())
 console.log(person3.eating())
 console.log(person3.dateOfBirth)

// console.log(person3)
// console.log(person3.fullName())

