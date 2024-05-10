let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];


let members = academyMembers.length

for (let i = 0; i < members; i++) {

    if (academyMembers[i].name.indexOf("Bob") === 0) {
        console.log(`${academyMembers[i].name} name starts with Bob`)
    }

    if (academyMembers[i].memID === 187) {
        console.log(` The academy member with ${academyMembers[i].memID} ID is ${academyMembers[i].name}`);
    }
    if (academyMembers[i].films.length >= 3) {
        console.log(`${academyMembers[i].name} has at least 3 films`);
    }

 //lets put the actors film in its own variabl
 let actorsFilms = academyMembers[i].films
    

 let startsWithA = false;
 for(let i=0; i < actorsFilms.length; i++){

     if(actorsFilms[i].indexOf("A") === 0){
         startsWithA = true;
         break;
     }

 }

 if(startsWithA){
     console.log(`${academyMembers[i].name} has been in movies that start with A`)
 }

}