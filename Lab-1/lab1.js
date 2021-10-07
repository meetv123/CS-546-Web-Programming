//////**********Question-1**********///////
function questionOne(arr){
    let object1={};
if(arr){
    for(let i=0;i<arr.length;i++){
        let r1 = arr[i]**2-7;
        let r2 = Math.abs(r1);
        
      
        if(r2 < 2){
            object1[result] = false;
        }
        
        let j = 2;
        while(j<r2){
            
            if(r2%j === 0){
                object1[r2] = false;
                break;
            }
            j++;
            
        }
        if(!(r2 in object1))
        object1[r2] = true;
    
       

    }
    return object1
}
else{
    return object1
}

  }

//////**********Question-2**********//////
function questionTwo(arr){
    let distinct=[...new Set(arr)];
    
    return distinct;
}

//////**********Question-3**********//////
function questionThree(arr1){
    let object1={};
    let sortedalpha=[];
    let arr=[...new Set(arr1)];
    for(let i=0; i<arr.length;i++){
    sortedalpha[i]=arr[i].split("").sort().join("");
    }

    for(let i=0;i<sortedalpha.length;i++){

        
        let flag=0;
        
        let arr1=[];
         for(j=i+1;j<sortedalpha.length;j++){
 
            
             if(sortedalpha[i]===sortedalpha[j] ){
           
             arr1.push(arr[i]);
             arr1.push(arr[j]);
             delete arr[j];
             delete sortedalpha[j];
             
                 flag=1;
                 
             }
            
         }
         
         if(flag===1 && arr1[0]!=undefined)
         {
            
             let a=[...new Set(arr1)];
             object1[sortedalpha[i]]=a;
         
         }
     }
 
     
     return object1
}

//////**********Question-4**********//////////
function questionFour(num1,num2,num3){

    function fact(arr){

        if(arr<0){
            return -1;
            }

        else if(arr==0){
            return 1;
            }

        else{
            return arr*fact(arr-1);
            }
        }
        let n1=fact(num1);
        let n2=fact(num2);
        let n3=fact(num3);
    
        let result=n1+n2+n3;
        let avg=(num1+num2+num3)/3;
        let finalresult= Math.floor(result/avg);
        return finalresult;
        
    }

    module.exports = {
        firstName: "Meet", 
        lastName: "Vanani", 
        studentId: "10475603",
        questionOne,
        questionTwo,
        questionThree,
        questionFour
    };
