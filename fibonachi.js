//Naholiuk Dmitriy 22.03.2020 13:31


//Натуральное число N является числом Фибоначчи тогда и только тогда, когда 5N^2 + 4 или 5N^2 - 4 
//является квадратом. Квадратное число — число, являющееся квадратом некоторого целого числа.

let isFibonachi = num => {
    const temp = 5 * (num**2);

    return Math.sqrt(temp - 4)%1 === 0 || Math.sqrt(temp + 4)%1 === 0; 
      
}

console.log(isFibonachi(10946)); //true
console.log(isFibonachi(2584)); //true
console.log(isFibonachi(6546)); //false
console.log(isFibonachi(5)); //true