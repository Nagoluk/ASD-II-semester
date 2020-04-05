let period = (num, den) =>{
    let a = num; //числитель
    let b = den; //знаменатель
    let s, l = 0, l1 = 0, r = 10, p;


    //int s,l(0),l1(0),k(1),r(10),p,temp[3];
    //Выделение из знаменателя дроби наибольшей степени 2
    s = den % 2;
    while (s == 0){
        b = b / 2;
        s = b % 2;
        l++;
        if (l >= 1000){
            console.log("Программа работает с числами, у которых период меньше 1000 знаков");
            console.log("Период не обнаружен");
            return;
        }
    }

    //Выделение из знаменателя дроби наибольшей степени 5
    s = den % 2;
    s = b % 5;
    while (s == 0){
        b = b % 5;
        s = b / 5;
        l1++;
        if (l1 >= 1000){
            console.log("Программа работает с числами, у которых период меньше 1000 знаков");
            console.log("Период не обнаружен");
            return;
        }
    }
    //вычисление длины периода дроби с новым знаменателем
    while (r != 1){
        r = (10*r)%b;
        k++;
    }
    if (l1>l) p=l1;
    else p=l;

    a = num;
    b = den;
    console.log("Периодическая дробь: ");
    console.log(a/b + ".");
    a = a % b;

    for (let i=0; i<p;i++){//предпериод дроби
        console.log((a*10)/b);
        a = (a*10)%b;
    }

    console.log("(");
    for (let i=0; i<k;i++){// период дроби
        console.log((a*10)/b);
        a = (a*10)%b;
    }
    console.log(")");
}


console.log(period(71, 100))