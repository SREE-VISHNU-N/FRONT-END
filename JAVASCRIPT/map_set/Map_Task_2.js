/* Task 2:
Write a function that takes a Map and
prints all keys and values using a for...of loop.  */

let people = new Map();
people.set('Sree',21);
people.set('vishnu',22);
people.set('abdul',22);
people.set('jebinth',22);
people.set('vishvan',19);


/* for(i of people.values()){
     for(j of people.keys()){
        console.log(j+':'+i);
    
    }

    break;
} */


for(let[k,v] of people){   //k means keys and v means values
    console.log(k+':'+v);
}