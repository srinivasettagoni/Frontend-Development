// While

// var i = 0
// while( i <= 5){
//     console.log(i)
//     i++
// }

// do while

// var i = 0;
// do{
//     console.log(i)
// }while(1 <= 5){
//     console.log(i)
//     i++
// }

// even and odd number
// for(var i=0; i<=10; i++){
//     // console.log(i)
//     if(i % 2 ==0 ){
//         console.log(i)
//     }
// }
// var balance = 10000;
// var withdraw = 1500;
// var count = 0;

// while(balance>0){
//     // var remainingAmount = balance - withdraw;
//     // console.log(remainingAmount)
//     console.log(balance)
//     balance = balance - withdraw;
//     count++
//     console.log(count)
// }
// // console.log(count)

// do While Looop
// var count = 0;
// do{
//     console.log(count)
//     count++
// }while(count<=5){
//     console.log(count)
// }

// For Loop

// for (var i = 0; i <= 10; i++) {
// //   console.log(i)
// // if(i % 2 ==0){
// //     console.log(i)
// // }
// // if( i == 5){
// //     break;
// // }
// if(i == 5 ){
//     continue;
// }

//   for (var j = 0; j < i; j++) {
//     console.log(j);
//   }
// }


// 0 to 100 Prime Numbers Or One and itself diveds == 0

for(var i = 0;i<=100;i++){
        if( i > 2){
            // console.log(i)
            // var isTrue = 0;
            var isTrue = false;
            for(var j=2;j<i;j++){
               
                if(i%j == 0){
                    // isTrue++
                    isTrue = true
                    // console.log(i,j)
                }
            }
            if(isTrue == false){
                console.log(i)
            }
            
        }
}