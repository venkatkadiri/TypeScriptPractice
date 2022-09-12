interface Trouble{
lines:'E'|'G'|'B'|'D'|'A'|'F';
spaces:'F'|'A'|'C'|'E';
}

interface Basu{
lines:'G'|'B'|'D'|'F'|'A'|'C';
spaces:'A'|'C'|'E'|'G';
}

class Staff<T = Trouble[] | null, U = Basu[] | null>{
    clef1?:T[];
    clef2?:U[];
    constructor(clef1?:T[], clef2 ?:U[]){
    this.clef1 = clef1;
    this.clef2 = clef2;
    }
     read():void{
      console.log("Trouble Clef notes are:");  
      this.clef1?.forEach((element)=>{
        console.log(element)});
      
      console.log("Base Clef notes are:"); 
      this.clef2?.forEach((element)=>{
        console.log(element)});
    }
}

let baseNotes:Basu[] = [
    { lines:'G',spaces:'C'},
    { lines:'A',spaces:'A'}
];

let troubleNotes:Trouble[] = [
        { lines:'G',spaces:'C'},
        { lines:'A',spaces:'A'}
];

var staff = new Staff(baseNotes,troubleNotes);
staff.read();
