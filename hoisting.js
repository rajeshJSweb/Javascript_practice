myFunc(0);

function myFunc(number){
    let isPrime = true;
    if(number === 1){
        console.log('Primee number neither composit number')
    }
    else if(number>1){
        for(let i=2; i<number; i++){
            if(number%i==0){
                isPrime=false;
                break
            }
        }
        if(isPrime){
            console.log('This is prime number')
        }
        else{
            console.log('This is not prime number')
        }
    }
    else{
        console.log('Not a valid number')
    }

    }
