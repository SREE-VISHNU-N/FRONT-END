/*  Task 3: Constructor for Movie
Create a constructor called Movie

Accept name, rating.

Add a method called isHit() that returns true if rating > 8.5. */

function Movie(name,rating){

    this.name=name;
    this.rating=rating;

    this.isHit=function(){
        return (this.rating>8.5)? true:false;
    }
}

let mov=new Movie('Harry Potter',8.4);
console.log(mov.isHit());