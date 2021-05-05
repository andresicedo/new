/*Suppose you want to create an object type of Person. You want this type of 
object to be called Person and you want it to have properties for name, age 
and sex. To do this, you would write the following function:*/

//Ex:
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

//Now I'll create one object called andres as follows:
//Ex:
const andres = new Person('Andres', 21, 'M');
console.log(andres);
//Person { name: 'Andres', age: 21, sex: 'M' }
/*This statement creates andres and assigns it the specified values for its 
properties. Then the value of andres.name is the string "Andres" and the 
value of andres.age is the number 21 and so on...*/