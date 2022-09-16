const spreadOperator= (x,y,z)=>{
    for(let i=0; i<x; i++){
        if(x<y && y>z){
            return y+z;
        }
    }
}

const myArr = [10,21,81]

const sum=spreadOperator(...myArr)
console.log(sum)