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



const topShareholder=async function topShareholder(stockName){
    let d=await getPeople();
    let c= await getStocks();
    let firstName;
    let lastName
    let userid
    let maxValue
    let shares;
    

    if(!stockName){
        throw 'Error: No input'
    }

    if(typeof stockName!== 'string'){
        throw 'Error: Not a valid input'
    }

    if(!stockName.replace(/\s/g,'').length){
        throw 'Error: Empty spaces'
    }



    for(let i=0;i<c.length;i++){
        shares=c[i].stock_name

        
        if(c[i].stock_name==stockName){
            for(let k=0;k<=c[i].shareholders.length;k++){
               
                   if(c[i].shareholders==0 || c[i].shareholders==null || c[i].shareholders==undefined){
                       return `${stockName}, currently has no shareholders`
                   }
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
    if(shares!==stockName){
        throw 'Error'
    }
    
}
topShareholder();

async function main(){
    try{
        console.log(await stocks.topShareholder("Powell Industries, Inc."))
    }
    catch(e){
        console.log(e)
    }
}
main();