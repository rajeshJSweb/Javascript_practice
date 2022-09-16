const myObject={
    name:'Rajesh',
    age:25,
    job:'Student',
    anotherObj:{
        name:'Khoksi Rajesh',
        value:()=>{
            console.log(this);
        }
    }
}

myObject.anotherObj.value();