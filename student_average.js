let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];

   let numberOfStudent = students.length 
  
   for (let i=0 ; i<numberOfStudent; i++){
  
    let total = 0;

    let currentScoresArray = students[i].scores

    let numberofStudentScores = currentScoresArray.length


    for(let i = 0; i<numberofStudentScores; i++){

        total += currentScoresArray[i];
    }    
    let studentAverage = total / numberofStudentScores;
    console.log(`${students[i].name} has an average of ${studentAverage.toFixed()}`)
   }


