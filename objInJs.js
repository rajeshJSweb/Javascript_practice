const myObject={
    name:'Rajesh',
    age:25,
    address:'Dhaka'
}

console.log(myObject.name, myObject.address);
const swapObject=(x)=>{
    let tempContainer = x.name;
    x.name=x.address;
    x.address=tempContainer;

    console.log(x.name, x.address,x.age)
}

swapObject(myObject)
console.log(myObject.name, myObject.address)