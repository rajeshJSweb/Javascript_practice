function myName(){
    let name="bangladesh";
    const obj={
        name:'Australia',
        age:25,
        country:function(){
            console.log('hello')
        }
    }
    return obj;
}

const newObj=myName().country();
console.log(newObj);