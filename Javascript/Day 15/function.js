// var num1 = 2;
// var num2 = 3;
// var sum = num1 + num2;
// console.log(sum);

// function sum(a,b){
//     console.log(a+b)
// }
// sum(2,3)
// sum(21,32)
// sum(10,30)

// function juiceMixer(fruit1,fruit2){
//     var juice = "Juice made with " + fruit1  + " and " + fruit2
//     console.log(juice)
// }
// juiceMixer("Apple","Banana")
// juiceMixer("Graphes","Pineapple")
// juiceMixer(5,4)


// Anonymous Function or Function Expression
// var juiceMixer = function(fruit1,fruit2){
//     var juice = "Juice made with " + fruit1  + " and " + fruit2
//         console.log(juice)
// }
// juiceMixer("Apple","Banana");
// juiceMixer("Graphes","Pineapple")


// Named Function
// var juiceMixer = function Mix(fruit1,fruit2){
//         var juice = "Juice made with " + fruit1  + " and " + fruit2
//             console.log(juice)
//     }
//     juiceMixer("Apple","Banana");
//     juiceMixer("Graphes","Pineapple")


// Scope
// Global Scope can access Traditional Function
// var message = "Hello Function"
// function greet(name){
//     console.log(name)
// }
// console.log(message)
// greet("Darwin")

// Global scope anonymous function won't access
// var message = "Hello Function"
// greet("Darwin")
// var greet= function(name){
//     console.log(name)
// }
// console.log(message)


// Immediate Invoked Function Expression

// (function(name){
//     console.log(name)
// })("Mahesh")


// Palindrome
// var palindrome = function(str){
//    var string =  str.split("").reverse().join("");
//    console.log(string == str)
// }
// palindrome("racecar")
// palindrome("darwin");
// palindrome("mahi")


// Fabinacci
// 0,1,2,3,4
// 1,3,5,8,12


var fabinacci = function(num){
    var  a= 0;
    var b = 1;
    for(var i=0;i<num;i++){
        var sum = a + b;
        // console.log(sum + " Sum")
        a = b;
        // console.log(a + " A Value")
        b = sum
        console.log(b + " Fabinaci")
    }
}
fabinacci(10)