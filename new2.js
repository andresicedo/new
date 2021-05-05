/*
The "new" keyword does the following things:
1. Creates a blank Javascript object
2. Adds a property to the new object that links to the constructor 
function's prototype object
3. Binds the newly created object instance as the "this" context (all 
references to "this" in the constructor function now refers to the 
object created in the first step).
4. Returns "this" if the function doesn't return an object

Creating a user-defined object requires two steps:
1. Define the object type by writing a function that specifies its name 
and properties. For example, a constructor function to create an object 
Person might look like this:
*/

//Ex:
function Person(name, age, sex, country) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.country = country;
}


//2. Create an instance of the object with "new".
//Ex:
const andres = new Person('Andres', 21, 'M', 'USA');
console.log(andres);
//Person {name: 'Andres',age: 21,sex: 'M',country: 'USA'}

//***An object can have a property that is itself another object

/*
When the code new Person(...) is executed, the following happens:
1. A new object is created, inheriting from Person.prototype
2. The constructor function Person is called with the specified arguments 
and with "this" bound to the newly created object. new Person is equivalent 
to new Person().(If no argument list is specified, Person is called without 
arguments)
3. The object return by the constructor function becomes the result of the 
whole "new" expression. If the constructor function doesn't explicitly 
return an object, the object created in step 1 is used instead (normally 
constructors don't return a value, but they can choose to do so if they want 
to override the normal object creation process).

You can always add a property to a previously defined object instance:
*/
//Ex:
andres.language = 'Spanish';
console.log(andres);
/*
Person {
  name: 'Andres',
  age: 21,
  sex: 'M',
  language: 'Spanish',
  country: 'USA'
}
*/