const recursive=(number)=>{
    console.log(number);
    const newNumber = number - 1
    if(newNumber>0){
        recursive(newNumber)
    }
}

recursive(5)