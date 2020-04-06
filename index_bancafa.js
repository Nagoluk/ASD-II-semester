//Naholiuk Dmitriy 5.04.2020 20:30

let Combinatorics = require('js-combinatorics');

Array.prototype.sumMembers = function (){
    let sum = 0;

    if(this.length === 0) return 0;

    this.forEach(a => sum+=a.mem)
    
    return sum;

}

Array.prototype.crucialMember = function(q, sum){
    return this.forEach(item => {
        if(sum - item.mem < q){
            item.i++
        }
    })
}


let Rada = [
    {id: "Sluga", mem: 50, i: 0},
    {id: "OPZ", mem: 1, i: 0},
    {id: "ES", mem: 49, i: 0}
]


let indexOfBancaf = (Rada) => {

    let q = parseInt(Rada.sumMembers() / 2) + 1;

    console.log("Q: " + q);

    
    let cmb = Combinatorics.power(Rada);
    cmb.forEach((a)=> {
        let sum = a.sumMembers()
        if(sum >= q) {
            a.crucialMember(q, sum);
        }
    });

    let sum = 0; 
    Rada.forEach(item => sum += item.i)
    Rada.forEach(item => item.i = item.i + "/" + sum)

    console.log(Rada)

}



indexOfBancaf(Rada);

