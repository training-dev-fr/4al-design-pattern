class PokerManager{
    constructor(){
        if(!PokerManager.listTable){
            PokerManager.listTable = [{listPlayer: [this]}];
        }else if(PokerManager.listTable[PokerManager.listTable.length-1].listPlayer.length < 6){
            PokerManager.listTable[PokerManager.listTable.length-1].listPlayer.push(this);
        }else{
           PokerManager.listTable.push({listPlayer: [this]}) 
        }
        return PokerManager.listTable;
    }
}

let i1 = new PokerManager();
let i2 = new PokerManager();
let i3 = new PokerManager();
let i4 = new PokerManager();
let i5 = new PokerManager();
let i6 = new PokerManager();

console.log(i6);

let i7 = new PokerManager();

console.log(i7);