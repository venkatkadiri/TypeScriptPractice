//example of union type...

function isMajor(age:number|string):boolean{
return age >= 19 ? true:false; 
    
} 
let age: number|string = 20;
console.log(isMajor("20t"));

//type filtering 

const returnTax = (salary:number|string,taxPercent:number):number =>{
  typeof(salary) === 'string'? salary = parseFloat(salary): salary = salary; // arithemetic operations are to be prechecked to have proper types by typeScript
    return salary * taxPercent;
}

let tax = returnTax("fefe",20);
//literal types
let literal:'math'|'Science'= 'math';
//union types with arrays
let arr:(string|number)[] = ['venkat',19,'vijay'];
