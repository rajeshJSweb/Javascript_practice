const evenNumber = (arr)=>{
   
    for(let i=0; i<arr.length; i++){
        const checkEven= arr[i]
       if(checkEven%2!==0){
        const evenNumber =checkEven
        console.log(evenNumber)
       }
    }
}

const number = [10,13,15,6,14,12,19,17]

evenNumber(number)