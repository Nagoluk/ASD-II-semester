//Naholiuk Dmitriy 24.03.2020 19:51


let gorner = (a, x) => {
    let p = 0;

    for(let i = 0; i < a.length; i++) {
        p = p*x + a[i]
    }

    return p;
}

console.log(gorner([4, 6, 7], 4))


