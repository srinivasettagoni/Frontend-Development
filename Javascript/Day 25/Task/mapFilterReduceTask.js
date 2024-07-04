const school = {
    classes: [
      {
        className: "Math",
        students: [
          {
            name: "Mahesh",
            grades: [85, 92, 88],
          },
          {
            name: "Hema",
            grades: [78, 81, 85],
          },
          {
            name: "Suresh",
            grades: [90, 87, 91],
          },
        ],
      },
      {
        className: "Science",
        students: [
          {
            name: "Naresh",
            grades: [92, 85, 89],
          },
          {
            name: "Uma",
            grades: [88, 91, 92],
          },
          {
            name: "Priya",
            grades: [84, 78, 80],
          },
        ],
      },
    ],
  };

 let findName = school.classes.map((value)=>{
        // console.log(value.className)
        // return value.className
        // console.log(value.students)
        return value.students.map((currentValue)=>{
            // console.log(currentValue.name)
            // return currentValue.name
            return currentValue.grades.reduce((acc,curr)=>{
                    // console.log(acc)
                    // console.log(curr)
                    return acc + curr;
            })
        })
 });
 console.log(findName)

// let findName = school.classes.map((value) => {
//     return value.students.map((currentValue) => {
//       const totalGrades = currentValue.grades.reduce((acc, curr) => {
//         return acc + curr;
//       }, 0); // Start with 0 for summing
//       return { name: currentValue.name, totalGrades: totalGrades };
//     });
//   });
  
//   console.log(findName);