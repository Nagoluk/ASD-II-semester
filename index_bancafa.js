//Naholiuk Dmitriy 5.04.2020 20:30

const Parlament = [
    {fractionName: "SLUGA", members: 1, crucialRoleCount: 0},
    {fractionName: "OPZH", members: 2, crucialRoleCount: 0},
    {fractionName: "VOICE", members: 3, crucialRoleCount: 0},
    // {fractionName: "ES", members: 100, crucialRoleCount: 0}
]

let indexOfBancaf = (Rada = []) => {

    let sumMembers = array => {
        let q = 0;
        array.forEach(item => q = q + item.members);
        return q;
    }

    
    let q = Math.floor(sumMembers(Rada) / 2);

    console.log(q);

    let results = [];

    for(let i = 0; i < Rada.length; i++){
        let tempArray = [...Rada].filter(item => item.fractionName !== Rada[i].fractionName)

        let sum = 0;


        while(true){
            

            sum = Rada[i].members + sumMembers(tempArray);
           
            
            console.log(sum);

            if(tempArray.length == 0) break
            
            tempArray.pop()
        }

    }



}



indexOfBancaf(Parlament);

