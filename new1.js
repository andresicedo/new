/*
The "new" operator lets you create an instance of a user-defined object 
or one of the built in object types that has a constructor function.
*/

//Ex:
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const andres = new Car('Audi', 'A4', 2014);
console.log(andres) //Car { make: 'Audi', model: 'A4', year: 2014 }
console.log(andres.make)//Audi
console.log(andres.model)//A4
console.log(andres.year)//2014
