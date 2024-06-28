// var JewelleryBox = [ "Rings","Necklace","Earrings","Brcaelet"];

// console.log(JewelleryBox[2])

// Push :- Adds the Element at the end

// JewelleryBox.push("Watch","Chains")
// console.log(JewelleryBox)

// Pop :- Removes the element at the End
// JewelleryBox.pop()
// JewelleryBox.pop()
// console.log(JewelleryBox)

// Shift :- Removes the beginining of the element
// JewelleryBox.shift()
// console.log(JewelleryBox)

// Unshift :- Add the Beginning of the element
// JewelleryBox.unshift("Watch","Chain")
// console.log(JewelleryBox)

// var JewelleryBox = [ "Rings","Necklace","Earrings","Brcaelet"];

// slice :- Remove Specific element 
// JewelleryBox.slice(start,end)
// var removeItem = JewelleryBox.slice(2,3)  //index 2 start and 3 ends
// console.log(removeItem)

// Splice :- Adds Specific element
// Array.splice(index(starting element form index),count(removing elements from index),item1,...item6)
// JewelleryBox.splice(2,2,"Watch","Chain")
// console.log(JewelleryBox)


//Finding and Combining

// console.log(JewelleryBox.indexOf("Earrings"))
// console.log(JewelleryBox.join("Ings " )) //Removes from array and adds words at the end

// var elements = ["Banana","Graphs"]
// var combining = JewelleryBox.concat(elements)
// console.log(combining)

// var string = "Hello";  //  olleH
// var reverse = string.split("").reverse().join("")
// console.log(reverse)


// Ieteration array and for loop
var JewelleryBox = [ "Rings","Necklace","Earrings","Brcaelet"];
// console.log(JewelleryBox)
    // console.log(JewelleryBox[0])
    // console.log(JewelleryBox[1])
    // console.log(JewelleryBox[2])
    // console.log(JewelleryBox[3])
// for(var i=0; i<JewelleryBox.length; i++){
//         // console.log(JewelleryBox[i]);
//         if(JewelleryBox[i].length > 5){
//             console.log(JewelleryBox[i])
//         }else{
//             console.log(JewelleryBox[i],"Below 5")
//         }
// }

// var num = [12,55,44,33,8];

// for(var i=0;i<num.length;i++){
//     // console.log(num[i])
//     if(num[i] % 2 ==0){
//         console.log(num[i])
//     }
// }

// Array Task 
// Output: [[1, 7], [2, 6], [3, 5]]
  var array = [1, 2, 3, 4, 5, 6, 7];
  var target = 8;
  var matrix = [];

  for(var i = 0;i<array.length;i++){
    // console.log(array[i])
    for(var j = i + 1;j<array.length;j++){
        // console.log(array[j])
        if(array[i] + array[j] == target){
            matrix.push([array[i],array[j]])
        }
    }
  }
  console.log(matrix)