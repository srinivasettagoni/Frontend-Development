// Task 1: Simple Calculator
// Objective: Write a script that acts as a simple calculator. The script should take two numbers 
// and an operator as input and perform the corresponding operation.

// var num1 = 10;
// var num2 = 0;
// var operator = '%';

// switch(operator){
//     case '+':
//         console.log(num1 + num2);
//         break;
//     case '-':
//         console.log(num1 - num2);
//         break;
//     case '*':
//         console.log(num1 * num2);
//         break;
//     case '/':
//         if(num2 !== 0){
//             console.log(num1 / num2);
//         }else{
//             console.log('Divsion by Zero')
//         }
//         break;
//     case '%':
//         if(num2 !== 0){
//             console.log(num1 % num2)
//         }
//         else{
//             console.log('Dision by Zero')
//         }
       
//         break;
//         default:
//             console.log("Invalid Operator")
// }

// Task 2: Print the First 10 Multiples of 5
// Objective: Write a script that uses a for loop to print the first 10 multiples of 5.

        // for(var i=0; i<=10; i++){
        //     var multiple = i * 5;
        //     console.log(multiple)
        // }
        
 //Task 3: Calculate Factorial of a Number

        // var n = 5;

        // if(n == 0 || n == 1){
        //    console.log(1);   //0! and 1! are 1
        // }else{
        //     var result =  1
        //     for(var i=2; i<=n;i++){
        //         var result = result * i;
        //     }
        //     console.log( result);
        //     }

//  Task 4: FizzBuzz
// Write a script that uses a for loop to print numbers from 1 to 100. For multiples of three, print "Fizz" instead of the number and for multiples of five, print "Buzz". For numbers
//  which are multiples of both three and five, print "FizzBuzz".
        // var number = 10;
        for(var i = 1;i<=100; i++){
            if( i % 3 ==0 && i % 5 ==0 ){
                console.log("Fizz Buzz");
            }else if( i % 3 ==0 ){
                console.log("Fizz");
            }else if(i % 5 == 0 ){
                console.log("Buzz");
            }else{
                console.log(i);
            }
        }