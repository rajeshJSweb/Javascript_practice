function returnValue(width, height){
    for(let i=0; ; i++){
       if(width<0 && height>0){
        return width+height;
       }
       else if(width<0||height>0){
        return width * height;
       }
    }
}

const totalValue = returnValue(3,2)
console.log(totalValue)