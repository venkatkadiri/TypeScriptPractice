//Type the parameters: its a good practice to type the parameters for type checking
// if the parameters are not 'typed' they are assumed to be 'any'.
function examole(x:number,y:string){
// console.log(x+y);
}
// examole(1,'var');
// return type of the function

// specifiying the return type to a function 

const returnType = (x:number,y:number):number =>{
return x +y;
}

// default parameters
const newV =(x = 's') =>{
return x;
}
// console.log(newV());

// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

const twoFer = (name:string = "you"):string =>{
    return `One for me One for${name}`;
}

const isLeapYear = (year:number):boolean =>{
if(400%year == 0) return true;
else return false;
}

console.log(twoFer("venkat"));
console.log(twoFer());
console.log(isLeapYear(2018));
console.log(isLeapYear(2000));