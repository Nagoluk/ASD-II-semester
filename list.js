//Naholiuk Dmitriy 27.03.2020 21:59

let list = (mass = []) => mass.toString().split(",").map(item => +item)

console.log(list([3, 4, 5, [3, 5]]))