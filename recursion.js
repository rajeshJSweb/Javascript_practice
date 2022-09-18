const recursionFunc =(number)=>{
    console.log(number);
    const newNumber = number -1;

    if(newNumber>0){
        recursionFunc(newNumber)
    }
    
}

recursionFunc(5)