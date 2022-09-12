abstract class Animal{
    constructor(private mammal:boolean, protected numOfLimbs:number, protected name:string, protected type :'herbivorous'|'carnivorous'|'omnivorous'){
        this.mammal = mammal;
        this.numOfLimbs = numOfLimbs;
        this.name = name;
        this.type = type;
    }
   abstract eat(food:string):string;
   public sleep(numOfHours:number):string{
    return `this ${this.name} has slept ${numOfHours}`;
   }
}
interface animal{
    mammal:boolean,
    limbs:number,
    name: string,
    type: 'herbivorous'|'carnivorous'|'omnivorous',
    domestic: boolean,
    nickName?:string
}

class Dog extends Animal{
    domestic = true;
    nickName ?: string;
    constructor(dogObj:animal){
        super(dogObj.mammal,dogObj.limbs,dogObj.name,dogObj.type);
        this.nickName = dogObj.nickName;
   }

    eat(food: string): string {
        return this.nickName === null ? `${this.nickName} is eating ${food}`: `this dog is eating ${food}`;
    }
}

var kryptoObj: animal = {
 nickName:'krypto',
 limbs: 4,
 name: 'dog',
 type: 'omnivorous',
 domestic: true,
 mammal:true,
}

var krypto = new Dog(kryptoObj);
console.log(krypto.sleep(8));
console.log(krypto.eat("Dog Food"));