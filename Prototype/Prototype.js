let arr = [1,2,3,4,5];
//let result = arr.filter(element => element >2);

Array.prototype.filter2 = function(predicate){
    let result = [];
    for(let element of this){
        if(predicate(element)){
            result.push(element)
        }
    }
    return result;
}

let result2 = arr.filter2(element => element >2);
console.log(result2);