// const recursionFunc =(number)=>{
//     console.log(number);
//     const newNumber = number -1;

//     if(newNumber>0){
//         recursionFunc(newNumber)
//     }
    
// }

// recursionFunc(5)


//series number 1+2+3+4+5.....................n
//lastTotal + num =


// let total=1;

// const num=10;

// for(let i=1; i<=num; i++){
//     total*=i
    
// }
// console.log(total)



//f(num-1) + n = total
const seriesSum=(n)=>{
    if(n===1){
        return 1;
    }
    return n * seriesSum(n-1);
}

const totalSum = seriesSum(10)
console.log(typeof(totalSum))


