//////***********computeObjects([objects],func)***********//////
// function computeObjects(objects,func){
//     if (!Array.isArray(objects)) {
//         throw 'Error:Input should be an object';
//     }
//     if (typeof objects != 'object') {
//         throw 'Error:Input should be an object';
//     }
//     if (Object.keys(objects).length == 0){
//          throw 'Error: Empty object';
//     }
//     if(!objects){
//         throw 'Error:No input'
//     }

//     let obj={}
//     for(let key of objects){
      
//         for(const [key1,value] of Object.entries(key)){
//             if(obj[key1]!=undefined){
//             obj[key1]+=func(value);
//             }
//             else if(obj[key1]==undefined)
// {
//     obj[key1]=func(value)
// }        }
//     }
//     return obj;
// }


// //////***********commonKeys(obj1,obj2)***********//////

// function commonKeys(obj1,obj2){
//     if(!obj1 && !obj2){
//         throw 'Error: It is not an object'
//     }
//     if(typeof obj1!=='object' || typeof obj2!=='object'){
//         throw  'Error: It is not an object'
//     }
//     if(obj1.length<1 && obj2.length<1){
// throw 'Error: Object is empty'
//     }
// let finalobj={}
// let objobj={}

// let key1=Object.entries(obj1)
// let key2=Object.entries(obj2)

// for( const [keys1,values1] of key1){
//     for(const[keys2,values2] of key2){
//         if(keys1==keys2){
//             for(const [keys3,values3] of Object.entries(values1)){
//                 for(const[keys4,values4] of Object.entries(values2)){
//                     if(keys3==keys4){
//                     if(values3==values4){
//                         objobj[keys3]=values3
                        
//                         finalobj[keys1]=objobj
//                     }
//                 }
//                 }
//             }
//         }
//              if(keys1==keys2)
//            {
//                if(values1==values2){
//                 finalobj[keys1]=values1
//             }
//         }
//     }
// }
// return finalobj
// }



// //////***********flipObject(obj1)***********//////
// function flipObject(object)
// {
//     if(!object){
//         throw 'Error: It is not an object'
//     }
//     if(typeof object!=='object'){
//         throw  'Error: It is not an object'
//     }
    
//     let ansObj={};
    
//     for (const [x,y] of Object.entries(object)) 
//     {
       
//         if(typeof y !="number")
//         {
//             let obj={}
//             for(const [x1,y1] of Object.entries(y))
//             {
//              obj[y1]=x1;   
//             }
//             ansObj[x]=obj;
//         }
//         else
//         {
//             ansObj[y]=x;
//         }
//     }
//     return ansObj;
// }



// module.exports={
//     First_Name:'Meet',
//     Last_Name:'Vanani',
//     CWID:'10475603',
//     computeObjects,
//     commonKeys,
//     flipObject
// }