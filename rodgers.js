Array.prototype.avarage = function (){
    return this.reduce((a, b) => a + b) / this.length;
}

let rodjers = (A, B) => {
    let results = [];

    let avarageA = A.avarage(), avarageB = B.avarage(); 

    for(let item of A) {
        if(item < avarageA && item > avarageB) {
            results.push(item);
        }
        
    }
    
    return results;
}

console.log(rodjers([1, 2, 4, 5, 7, 9], [1, 2, 3, 4]))