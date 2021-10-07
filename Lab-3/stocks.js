const axios=require('axios');
const { First_Name, Last_Name } = require('../Lab-2/objUtils');
async function getStocks(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json')
    return data // this will be the array of people objects
  }

async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json')
    return data // this will be the array of people objects

}




const listShareholders=async function listShareholders(){
    if(arguments.length!==0){
        throw 'Error: No argument should be given'
    }
let s=await getStocks();
let p=await getPeople();
let share={}
let arr=[]

let arr1=[]
let obj={}
for(let x of s){
     obj={}
    
    arr=[]
    obj['id']=x.id
    obj['stock_ name']=x.stock_name
    
    for(let n of x.shareholders){
        share={}
        for(let a of p){
            if(n.userId==a.id){
                share['first_name']=a.first_name
                share['last_name']=a.last_name
                share['number_of_shares']=n.number_of_shares
                arr.push(share)
            }
        }
    }
    obj['shareholders']=arr
    arr1.push(obj)
}
return arr1 
}




const topShareholder=async function topShareholder(stockName){
    let d=await getPeople();
    let c= await getStocks();
    let firstName;
    let lastName
    let userid
    let maxValue
    

    if(!stockName){
        throw 'Error: No input'
    }

    if(typeof stockName!== 'string'){
        throw 'Error: Not a valid input'
    }

    if(!stockName.replace(/\s/g,'').length){
        throw 'Error: Empty spaces'
    }

let warn=0

    for(let i=0;i<c.length;i++){

        
        if(c[i].stock_name==stockName){
            warn=1;
            if(c[i].shareholders==0 || c[i].shareholders==null || c[i].shareholders==undefined){
                return `${stockName}, currently has no shareholders`
            }
            for(let k=0;k<=c[i].shareholders.length;k++){
               
                   
                maxValue=Math.max.apply(Math, c[i].shareholders.map(function(o) { return o.number_of_shares; }))
                // if(maxValue==0 || maxValue==null || maxValue==undefined){
                //     return `${stockName}, currently has no shareholders`
                // }
                for(let x of c[i].shareholders)
                {
                    if(x.number_of_shares===maxValue)
                        userid=x.userId
                }
                    
               // console.log(userid)
            
    
           // console.log(d);
                for(let x of d){
                 //   console.log(x);   
            if(x.id===userid){
       firstName=x.first_name;
lastName=x.last_name;

                    }
                    

                }


                    return `With ${maxValue} shares in ${stockName}, ${firstName} ${lastName} is the top shareholder`
                    
                    
                
                
            }
        }
        
        }
        if(warn==0){
            throw 'Error: Stock not found'
        }
    }

const listStocks=async function listStocks(firstName,lastName){
    let p=await getPeople()
    let s=await getStocks()
    let  id;
    let warn=0;
    if(!firstName || !lastName ){
        throw 'Error: No input'
    }
    if(typeof firstName!=='string'|| typeof lastName!=='string'){
        throw 'Error: Invalid input'
    }
    if(firstName.length<1 || lastName.length<1){
        throw 'Error: Empty string'
    }
    if(!firstName.replace(/\s/g,'').length ||!lastName.replace(/\s/g,'').length ){
        throw 'Error: Empty spaces'
    }


        for(let i=0;i<p.length;i++){
        if(p[i].first_name==firstName && p[i].last_name==lastName){
        warn=1;
        {
            id=p[i].id;
            
        }
    }
}
    let arr=[];
    for(let x of s)
    {
        for(let u of x.shareholders)
        {
            
            let obj={}
            if(id === u.userId)
            {
                obj['stock_name']=x.stock_name;
                obj['number_of_shares']=u.number_of_shares;
                arr.push(obj);
            }
            
        }  
    }
    if(warn==0){
        throw `${firstName} ${lastName} is not in the people.json`
    }
    
    return arr
}


const getStockById=async function getStockById(id){
    //let p=await getPeople();
    let s=await getStocks();
    let id1;
    let warn=0
    if(!id){
        throw 'Error: No input '
    }
    if(typeof id!=='string'){
        throw 'Error: Not a valid input'
    }
    if(!id.replace(/\s/g,'').length){
        throw 'Error:Empty spaces'
    }

    for(let i=0;i<s.length;i++){
        id1=s[i].id
        if(id1==id){
            warn=1;
            return s[i]
        }
    }
    if(warn=1){
        throw 'stock not found'
    }
    
}

module.exports={
    listShareholders,
    topShareholder,
    listStocks,
    getStockById
}