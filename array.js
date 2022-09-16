const myObject={
    name:'Rajesh',
    age:25,
    address:'Dhaka',
    phone:0171425,
    myFunc: function(){
        console.log('Hello There');
    }
}

const myFunc=()=>{
    console.log('Thabk you')
}

const myFunc2=()=>{
    for(item in myObject){
        item.address[2]
    }
}

myFunc2()