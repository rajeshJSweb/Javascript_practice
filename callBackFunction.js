const myFunc=(callBack)=>{
    setTimeout(function(){
        console.log('A function that takes some time')
        return callBack;
    },3000)
}

const myAntherFunc=()=>{
    console.log('My Anther function');
}

myFunc(myAntherFunc)


const numSquare =(x)=>{
    console.log(`Number of square: ${x}: ${x*x}`)
}

const higherOrderFunc = (num, callBack)=>{
    callBack(num)
}

higherOrderFunc(6,numSquare)