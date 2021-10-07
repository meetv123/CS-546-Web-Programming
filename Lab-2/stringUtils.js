// function sortString(string){
//     if(!string){
//         throw 'Error: No input'
//     }
//     if(typeof string!=='string'){
//         throw 'Error: Not a string'
//     }
//     if(string.length<1){
//         throw 'Error: Empty string'
//     }
//     if(!string.replace(/\s/.g,'').length){
//         throw 'Error: Empty spaces'
//     }
//     let sepnum=/[0-9]/g
//     let sepnumfinal= string.match(sepnum)
//     let sepupperfinal
//     let sepupper=/[A-Z]/g
//     if(string.match(sepupper)!=null && string.match(sepupper)!=undefined){
//         sepupperfinal=string.match(sepupper).sort().join('')
//     }      
//     let seplowerfinal;
//     let seplower=/[a-z]/g
//     if(string.match(seplower)!=null && string.match(seplower)!=undefined){
//      seplowerfinal=string.match(seplower).sort().join('')
//     }
//     else{
//         seplowerfinal=''
//     }
//     let arr=string.split('')
//     let specialarr=[]
//     let space=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].charCodeAt(0)>=33 && arr[i].charCodeAt(0)<=47 || arr[i].charCodeAt(0)>=58 && arr[i].charCodeAt(0)<=64 || arr[i].charCodeAt(0)>=91 && arr[i].charCodeAt(0)<=96 || arr[i].charCodeAt(0)>=123 && arr[i].charCodeAt(0)<=126){
//             specialarr.push(arr[i])
//           }
//         else if(arr[i].charCodeAt(0)==32){
//             space.push(arr[i])
//         }
//     }    
//         let x=sepnumfinal.sort(function(m,n){return m-n}).join('');
//         let special=specialarr.join('')
//         let spacestring=space.join('')

//         let finaloutput=sepupperfinal+seplowerfinal+special+x+spacestring;
        
//         return finaloutput;
//     }
        
// function replaceChar(string, idx){
    
//     if(string.length<=0){
//         throw 'Error: String is empty'
//     }

//     if(!string){
//         throw 'Error: No input provided'
//     }
//     if(typeof string!='string'){
//         throw 'Error: Input is not a string'
//     }
//     if(idx>string.length){
//         throw 'Error: Index not valid'
//     }
//     if(idx<=0 || idx>string.length-2){
//         throw 'Error: Invaild Index'
//     }
//     if(!string.replace(/\s/.g,'').length){
//         throw 'Error: Empty spaces'
//   }
//     let count=0
//     for(let i=0;i<string.length;i++){
        
//         if(string[idx]===string[i]){
//             if(count%2==0){
//                 if(i!=idx){
// string=string.substring(0,i)+string[idx-1]+string.substring(i+1)

// count++
//                 }

//             }
//         }
//         else if(string[idx]==string[i]){
//             if(count%2==1){
//                 if(i!=idx){
//                     string=string.substring(0,i)+string[idx+1]+string.substring(i+1)
//                     count++;
//                 }
//             }

//         }
    
// }
// return string
// }
    






// function mashup(string1,string2,char){
    
//     if(!string1 || !string2 || !char){
//         throw 'Error: No input'
//     }
//     if(typeof string1!='string' || typeof string2!='string' || typeof char!='string'){
//         throw 'Error: Not a char'
//     }

//     if(!string1.replace(/\s/.g,'').length || !string2.replace(/\s/.g,'').length || !char.replace(/\s/.g,'').length ){
//             throw 'Error: Empty spaces'
//            }


//     let concatstring=""
//     let c=0
//     if(string1.length==string2.length){
//         for(let i=0;i<string1.length;i++){
//             for(let j=0;j<string2.length;j++){
//                 if(i==j){
//                     concatstring=concatstring+string1[i].concat(string2[j])
                    
//                 }
//             }
//         }
//     }
//     else if(string1.length<string2.length){
//         for(let h=0;h<string1.length;h++){
//             for(let k=0;k<string2.length;k++){
//                 if(h==k){
//                     concatstring=concatstring+string1[h].concat(string2[k])
//                 }
                
//     }
    
// }
// for(let l=string1.length;l<string2.length;l++){
//     concatstring=concatstring+char+string2[l];
// }
//     }
//     else{
//         for(let d=0;d<string1.length;d++){
//             for(let c=0;c<string2.length;c++){
//                 if(d==c){
//                     concatstring=concatstring+string1[d].concat(string2[c])
//                 }
                
//     }
    
// }
// for(let p=string2.length;p<string1.length;p++){
//     concatstring=concatstring+string1[p]+char
// }

//     }
// return concatstring;
// }

// module.exports={
//     First_Name:'Meet',
//     Last_Name:'Vanani',
//     CWID:'10475603',
//      sortString,
//      replaceChar,
//      mashup
// };
