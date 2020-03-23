//Naholiuk Dmitriy 23.03.2020 14:02

let binary = (k, m) => {
    for(let i = m; ; ++i){
        let n = (i**k).toString(2).length;

        if(n > m) return i;
    }
}

console.log(binary(3, 11))

