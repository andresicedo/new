/*
Then you can rewrite the definition of Person to include a relationship property 
that takes a relationship as an object as follows:*/
//Ex:
function Person(name, age, sex, relationship) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.relationship = relationship;
}

/*You can create any number of Person objects by calls to new.
Lets instantiate two new Person objects as follows:*/
//Ex:
const megan = new Person('Megan', 21, 'F', 'girlfriend');
const stacy = new Person('Stacy', 21, 'F', 'sister');

//To instantiate the new objects, you then use the following:
//Ex:
const andres = new Person('Andres', 21, 'M', megan);
const jon = new Person('Jon', 25, 'M', stacy);

console.log(`My name is ${andres.name} and ${andres.relationship.name} is my ${andres.relationship.relationship}`);
//My name is Andres and Megan is my girlfriend
console.log(`MY name is ${jon.name} and ${stacy.name} is my ${jon.relationship.relationship}`);
//MY name is Jon and Stacy is my sister