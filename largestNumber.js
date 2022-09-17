const dataArray=[50,30,55,60,80,10,90,40,70,30,20,]
const max = Math.max(...dataArray)
const min = Math.min(...dataArray)
console.log(max, min)

const maxNumber =(arr)=>{
    let bigNumber=[];
    for(let i=0; i<arr.length; i++){
        // if(!bigNumber){
        //     bigNumber=arr[i]
        // }
       if(arr[i]>bigNumber){
        bigNumber=arr[i]
       }
    }
    return bigNumber;
}

const maxNum = maxNumber(dataArray)
const minNum = maxNumber(dataArray)
console.log(maxNum);