// declaration of the type of variable along with initialization
let movieTitle:String = 'var';
console.log(movieTitle);

// type inference example
// typescript generally asigns the type during the initialization and from then it is useually infered

let inference = 5;
// resigning the inference variable is illigal
//inference = 'f';
console.log(typeof(inference));

// side note typeScript useually does not allow to call method that are not useually associated with the data type.. examole instance.upper() is illigal where as its perfectly valid in js

// the 'any type': is similar to js 
let a:any;
a = 'text';
console.log(a);
a = {a:5};
console.log(a);

// typeScript stop the user from using uninitiallised variables

// do not do delayed inference as typeScript useually assigns any type to the variable which will cause problems..

// let exampleVal;  doing this is problematic

let exampleVal:String;
//console.log(typeof(exampleVal)); // doing this  incorrect