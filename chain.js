//Naholiuk Dmitriy 5.04.2020 12:03

let chainFromNumber = (x, max = 100, eps = 10**(-10)) => {
    x = Math.abs(x);
    let list = [];
    let iteration = 0;
    
    while(true){
        if(iteration > max) break;

        if(Math.ceil(x) - x < eps){
            list.push(Math.ceil(x));           
        }else {
            list.push(parseInt(x));
        }

        if(x - parseInt(x) < eps) break;

        x = 1 / (x - parseInt(x));
        
        iteration++;
    }

    if(list[list.length - 1] === 1) list.pop();

    return list;
}

let numberFromChain = list => {
    let current = 1 / list[list.length - 1] + list[list.length- 2];
    
    for(let i = list.length - 3; i >= 0; i--){
     current = list[i] + 1 / current;
    }

    return current;
}


console.log(chainFromNumber(1.3));
console.log(numberFromChain([1, 3, 3]));
