const findLongestWord=(str)=>{
    var strSplit = str.split(' ')

    let longestWord = 0;

    for(let i=0; i<strSplit.length; i++){
        if(strSplit[i].length> longestWord){
            longestWord=strSplit[i].length
        }
    }
    console.log(longestWord);
}
    


findLongestWord("This is bangladesh1")