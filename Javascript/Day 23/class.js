// //to move into Prototype we have used function constructor
// function Parent1(firstName){
//     this.firstName = firstName;
// }
// Parent1.prototype.getName  = function(){
//     return `Constructed Name`
// }

// let parent2 = new Parent1("Darwin");
// console.log(parent2);

// //Updated version of the Constructor to move in to prototype
// class Parent{
//     constructor(firstName){
//         this.firstName = firstName;
//     }
//     fullName(){
//         console.log("Class constructor Method")
//     }
// }

// let parent1 = new Parent("Darwin");
// console.log(parent1);

// class Parent {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
//   fullName() {                               //Instance Method
//     return `My name is ${this.firstName}`
//   }
//   static sayHi(){                    //Static Method
//     return `Hello every one`             
//   }
// }

// let parent1 = new Parent("Darwin");
// console.log(parent1);
// console.log(parent1.fullName());
// // console.log(parent1.sayHi())     //in static patent1 is won't access
// console.log(Parent.sayHi())



//Inheritance with extends super

class Parent {
    constructor(firstName,lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    fullName() {
      return `My name is ${this.firstName}`

    }
    static sayHi(){
      return `Hello every one`
    }
  }
  
  class Child extends Parent{
        constructor(firstName,lastName,role){
            super(firstName,lastName);
            this.role = role;
        }
        getRole(){
            return `My role is ${this.role}`
        }
  }

  class GrandChild extends Child {

  }

  let parent1 = new Parent("Darwin");
//   console.log(parent1);

//   let child1 = new Child("Nivas", "Coding","student");
//   console.log(child1);
//   console.log(child1.role);
//   console.log(child1.getRole());
  
  let grandChild1 = new GrandChild("Nivas", "Coding","student");
//   console.log(grandChild1)



//Private Constructor
//   class Person {
//     #name = "";
//     constructor(name){
//         this.#name = name
//     }
//     getName(){
//         return ` My name is ${this.#name}`
//     }
//   }
//   let person1 = new Person("Darwin Nivas");
//   console.log(person1)
//   console.log(person1.getName())


// Mixin-------------------
let emp = {
    name1 :"Mahesh",
    getMsg:function(){
        return `Hello Message`
    }
}
class EmpInfo {
    constructor(name){
        this.name = name 
    }
}
Object.assign(EmpInfo.prototype,emp)
let employee = new EmpInfo("Nivas")
console.log(employee)
console.log(employee.name1)
console.log(employee.getMsg())