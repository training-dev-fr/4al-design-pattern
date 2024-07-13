class Multiton{
    constructor(){
        if(!Multiton.listInstance){
            Multiton.listInstance = [this];
        }else if(Multiton.listInstance.length < 6){
            Multiton.listInstance.push(this);
        }
        return Multiton.listInstance;
    }
}

let i1 = new Multiton();
let i2 = new Multiton();
let i3 = new Multiton();
let i4 = new Multiton();
let i5 = new Multiton();
let i6 = new Multiton();
let i7 = new Multiton();

console.log(i6);
console.log(i7);