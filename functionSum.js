const myArr=['rajesh','khoksi','hilary','areng','thengsua','bipul']

const findOddName=(oddName)=>{
    let nameStore = [ ];
    let bigName = 0;
    for(let i=0; i<oddName.length; i++){
        if(oddName[i].length%2!==0){
            nameStore= oddName[i]
            for(let big = 0; big<nameStore.length; big++){
                if(nameStore[big].length>bigName){
                    bigName=nameStore[big]
                }
            }
        }
    }
    return bigName;
}

findOddName(myArr)
