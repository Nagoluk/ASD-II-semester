let a = [1,5,7,2,4,2,6,6,7,8,9,6,7];
let results = "";

let temp = "";
for(let i = 0; i < a.length ; i++){
   
    if (a[i] <= a[i + 1]){
        temp += " " + a[i];
       
    }else {
        temp += " " + a[i];
        results.length > temp.length ? null : results = temp;
        temp = "";
    }
}

console.log(results);