/*
However, this does not affect any other object. To add the property to all
objects of the same type, you must ad the property to the definition of the
Person object type.

You can add a shared property to a previously defined object type by using 
the Function.prototype property. This defines a property that is shared by 
all objects created with that function, rather than by just one instance of 
the object type. The following code adds a language property with value 
"English" to all objects of type Person and then overwrites that value with 
the string "English" only in an instance object that already defines language 
as a property.
*/

//Ex:
function Person () {};
jon = new Person();
arya = new Person();
console.log(jon.sigil);//undefined

Person.prototype.sigil = "Direwolf";
console.log(jon.sigil)//Direwolf

jon.sigil = 'Dragon';
console.log(jon.sigil);//Dragon

console.log(Object.getPrototypeOf(jon));//Direwolf
console.log(Object.getPrototypeOf(arya));//Direwolf
console.log(jon.sigil);//Dragon
console.log(arya.sigil);//Direwolf
