const axios=require('axios');
async function getPeople(){
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json')
    return data // this will be the array of people objects

  }
  

  const getPersonById= async function getPersonById(id){
      if(!id){
          throw 'Error: No input'
      }
      if(typeof id!=='string'){
          throw 'Error: Not a string'
      }

      if(!id.replace(/\s/g,'').length){
          throw 'Error: Empty Spaces'
      }
    let x= await getPeople();
    let warn=0;
    for(let i=0;i<x.length;i++){

if(x[i].id==id){
    warn=1;
return x[i]

}
else{
    throw 'person not found'
}
}  
}


const sameStreet= async function sameStreet(streetName, streetSuffix){
    let x=await getPeople()
    let ans = []
    for(let i=0;i<x.length;i++){
if(!streetName || !streetSuffix){
    throw 'Error: No input'
}
if(typeof streetName!=='string' || typeof streetSuffix!=='string' ){
    throw 'Error: Not a valid input'
}

if(!streetName.replace(/\s/g,'').length || !streetSuffix.replace(/\s/g,'').length ){
    throw 'Error: Empty Spaces'
}

            if(x[i].address.home.street_name===streetName && x[i].address.home.street_suffix===streetSuffix || x[i].address.work.street_name===streetName && x[i].address.work.street_suffix===streetSuffix){
                ans.push(x[i])        
            }
         }
    if(ans.length < 2){
        throw "Error: There are not at least two people that live or work"
    }
    

    return ans
}

const manipulateSsn= async function manipulateSsn(){
    let z=await getPeople();
    let convert;
    let remove;
    let sort;
    let removezero;
    let convertnum;
    let obj={}
    let obj1={}
    let obj2={}
    let emptyarr=[]
    let average;
    let firstName2;
    let lastName2
    for(let i=0;i<z.length;i++){
        convert=z[i].ssn;
        remove=convert.replace('-','').replace('-','')
        sort=remove.split('').sort().join('')
        removezero=sort.replace('0','').replace('0','').replace('0','')
        convertnum=parseInt(removezero,10)
        emptyarr.push(convertnum)
        
        
for(let j=0;j<emptyarr.length;j++){
    if(i===j){
        z[i].ssn=emptyarr[j]
    }
let sum=0;
let c=0;
    for(let k=0;k<emptyarr.length;k++){
        sum+=emptyarr[k]
        c++
    }
    average=Math.round(sum/c)

             highestnumber=Math.max(...emptyarr);
         lowestnumber=Math.min(...emptyarr);

    if(z[i].ssn==highestnumber){
    firstName1=z[i].first_name
    lastName1=z[i].last_name
}
else if(z[i].ssn==lowestnumber){
    firstName2=z[i].first_name
    lastName2=z[i].last_name

}
obj1['firstName']=firstName1
obj1['lastName']=lastName1
obj['highest']=obj1

obj2['firstName']=firstName2
obj2['LastName']=lastName2
obj['lowest']=obj2

obj.average=average   
}
    }

    
return obj

}
    
const sameBirthday=async function sameBirthday(month,day){
    if(!month || !day){
        throw 'Error: No input'
    }
    if(month<0 || month>12){
        throw 'Error: Month is more than 12 '
    }
    if(month==(01 || 1) || month==(03 || 3) || month==(05 || 5) || month==((07 || 7) || month==(08 || 8) || month==10 || month==12))
{    
  if(day>=31){
      throw 'Error: Days are more than 31'
  }
}
if(month==(04 || 4) || month==(06 || 6) || month==(09 || 9) || month==11){
    if(day>=30){
        throw 'Error: Days are more than 30'
    }
}
if(month==(02 || 2)){
    if(day>=29){
        throw 'Error:There are not 29 days in Febuary month'
    }
}

    if(typeof month=='string' && !month.replace(/\s/g,'').length || typeof day=='string' && !day.replace(/\s/g,'').length ){
        throw 'Error: Empty Spaces'
    }
    let a= await getPeople()
    let arr=[]
let slicedmonth;
let slicedday;
let fl
    for(let i=0;i<a.length;i++){
        fl=a[i].first_name+" "+a[i].last_name;
        slicedmonth=a[i].date_of_birth.slice(0,2)
        slicedday=a[i].date_of_birth.slice(3,5)
if(slicedmonth==month && slicedday==day){
    arr.push(fl)
    
}

}
return arr;
}



module.exports={
    getPersonById,
    sameStreet,
    manipulateSsn,
    sameBirthday
}
  
