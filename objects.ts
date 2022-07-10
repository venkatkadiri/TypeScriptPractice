function objTest(person:{firstname:string,lastname:string}):void{
console.log(`the name passed down is: ${person.firstname} and the lastname is:${person.lastname}`);
}
const person ={
    firstname:'venkat',
    lastname:'kadiri'
}
objTest(person);

// return type of a given function to be an object
type applicant = {
    name:string,
    age:number
}
function objTest2(name:string,age:number):applicant{
const person2 ={
    name,
    age
}
return person2;
}
// declaring object type during object initialization
const val:{name:string,age:number} ={name:'venkat',age:25}; 
console.log(objTest2(val.name,val.age));
