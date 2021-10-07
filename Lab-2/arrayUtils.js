
// function average(arr){
// if(!arr){
//     throw 'Error: No input'
// }
// if(!Array.isArray(arr)){
//     throw 'Error: Not an array'
// }
//     if(arr.length<1){
//         throw 'Error: Array is empty '
//     }   
// let sum=0;
// let count=0;
// let c=0;
// for(let i=0;i<arr.length;++i){
    
    
//     if(arr[i].length===0){
//         throw 'Error: Array is null'
//     }
//     for(let j=0;j<arr[i].length;++j){
//         if(typeof arr[i][j]!= 'number'){
//             throw 'Error: Non-integer values in an array'
//         }
        
//         sum+=arr[i][j];
//         c++;
//     }
 
// }
// return Math.round(sum/c);
// }


// function modeSquared(arr){
//     if(!arr){
//         throw 'Error: Not input'
//     }

//     if(!Array.isArray(arr)){
//         throw 'Error:Not an array'
//     }

//     if(arr.length<1){
//         throw 'Array is empty'
//     }
//     let freq={};
//     let maxfreq=0;
//     let mode=[];
//     for(let i in arr){
//         if(arr[i] in freq ){
//         //freq[arr[i]]=(freq[arr[i]] || 0)+1;
//         freq[arr[i]]=parseInt(freq[arr[i]])+1
//         }
//         else{
//             freq[arr[i]]=0;
//         }


//         if(typeof arr[i]!='number'){
//             throw 'Error: No number in array'
//         }

//         if(freq[arr[i]]>maxfreq){
//             maxfreq=freq[arr[i]];
//         }


//     }
//     if(maxfreq===0){
//         return 0;

//     }
//     let sum=0;
//     for(let j in freq ){
//         if(freq[j]===maxfreq){
//             sum=sum+(j**2)
//         }
//     }
//     return sum

// }




function medianElement(arr){
    if(!arr){
        throw 'Error: No input'
    }
    if(!Array.isArray(arr)){
        throw 'Error:Not an array'
    }

    if(arr.length<1){
        throw 'Array is empty'
    }

    for(let i in arr){
        if(typeof arr[i]!='number'){
            throw 'Error: Not a number in an array'
        }
    }
    let object1={}
    let midval1=Math.floor(arr.length/2)
    let x=arr.sort(function(m,n){return m-n});
    let midval=Math.floor(x.length/2)
    if(arr.length%2){
         object1[x[midval]]=arr.indexOf(x[midval])

    }
    else{
         object1[(x[midval-1]+x[midval])/2.0]=arr.indexOf((x[midval-1]+x[midval])/2.0)
    }
    return object1
}



// function merge(arrayOne,arrayTwo){
//     if(!arrayTwo && !arrayOne){
//         throw 'Error:No input'
//     }

//     if(arrayOne.length<1) throw 'Error:Empty array'
//     if(arrayTwo.length<1) throw 'Error:Empty array'

//     if(!Array.isArray(arrayOne) && !Array.isArray(arrayTwo)){
//         throw 'Error: Not an array'
//     }

//     for(let k=0;k<arrayOne.length;k++){
        
//         if(arrayOne[k]===null ){
//             throw 'Error: Array has null value'
//         }

//         if(typeof arrayOne[k]!=='number' && typeof arrayOne[k]!=='string'){
//             throw 'Error: Invalid element in array'
//         }
        
//     }
//     for(let h=0;h<arrayTwo.length;h++){
//         if(arrayTwo[h]===null){
//             throw 'Error: Array has null value'
//         }
//         if(typeof arrayTwo[h]!=='number' && typeof arrayTwo[h]!=='string'){
//             throw 'Error: Invalid element in array'
//         }
        

//     }
    
//    let num=[];
//    let upperCase=[];
//    let lowerCase=[];

//    let concatarray=arrayOne.concat(arrayTwo)

//    for(let i=0;i<concatarray.length;i++){

//        if(typeof concatarray[i]=== 'number'){
//            num.push(concatarray[i])
//        }
//        else if(concatarray[i].toUpperCase()===concatarray[i]){
//            upperCase.push(concatarray[i])
//        }
//        else if(concatarray[i].toLowerCase()===concatarray[i]){
//            lowerCase.push(concatarray[i])
//        }
//    }
//    let x=num.sort(function(m,n){return m-n});
   
//    let uppercasesort=upperCase.sort();
   
//    let lowercasesort=lowerCase.sort()
//    let finalarray=lowercasesort.concat(uppercasesort).concat(x)    
//    return finalarray;

// }


module.exports={
    First_Name:'Meet',
    Last_Name:'Vanani',
    CWID:'10475603',
    //average,
    //modeSquared,
    medianElement,
    //merge

};




