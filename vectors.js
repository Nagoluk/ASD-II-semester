//Naholiuk Dmitriy 5.04.2020 20:30

let n = 3;

let list = [];
let getRandomInt = () => Math.floor(Math.random() * 10 + 1);

let product = (list, num) => list.map(a => a * num)

let getScalar = (list1, list2) => {
    let scalar = 0

    for(let i = 0; i < list1.length; i++){
        scalar = scalar + list1[i] * list2[i]
    }

    return scalar;
}

let getSumVectors = (list1, list2) => {
    let sumOfVectors = [];

    for(let i = 0; i < list1.length; i++){
        sumOfVectors.push(list1[i] + list2[i])
    }

    return sumOfVectors;
}

let getDiffVectors = (list1, list2) => {
    let diffOfVectors = [];

    for(let i = 0; i < list1.length; i++){
        diffOfVectors.push(list1[i] - list2[i])
    }

    return diffOfVectors;
}


for(let i = 0; i < n; i++){
    let temp = []
    for(let j = 0; j < n; j++){
        temp.push(getRandomInt())
    }
    list.push(temp);
}

let E_k = (vector) => product(vector, 1 / Math.sqrt(getScalar(vector, vector)))


let ortoNormVectors = []
ortoNormVectors.push(E_k(list[0]))



for(let j = 1; j < n; j++){
    let newA = [];
    newA = [...list[j]]

    for(let k = 0; k < j ; ++k){

        let m = ortoNormVectors[k].map(item => item*getScalar(list[j], ortoNormVectors[k]))
        newA = getDiffVectors(newA, m)

    }

    ortoNormVectors.push(E_k(newA))

}


console.log(ortoNormVectors)


