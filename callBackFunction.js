const myFunc=callBack=>{
    setTimeout(function(){
        console.log('A function that takes some time')
        return callBack;
    },300)
}

const myAntherFunc=()=>{
    console.log('My Anther function');
}

myFunc(myAntherFunc)