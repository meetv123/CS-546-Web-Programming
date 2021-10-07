//const mongoCollections = require('./mongoCollections');
const { ObjectId } = require('bson');
const mongoCollections = require('../config/mongoCollections');
const restaurants = mongoCollections.restaurants;

module.exports={
    async create(name, location, phoneNumber, website, priceRange, cuisines, overallRating, serviceOptions){
        
        if(!name || !location || !phoneNumber || !website || !priceRange || !cuisines || !overallRating || !serviceOptions){
            throw 'Error:Not a valid input'
        }

        if(typeof name!=='string' || typeof location!=='string' || typeof phoneNumber!== 'string' || typeof website!== 'string' || typeof priceRange!== 'string'){
            throw 'Error: Input is not a string'
        }

        if(!name.replace(/\s/g,'').length || !location.replace(/\s/g,'').length || !phoneNumber.replace(/\s/g,'').length || !website.replace(/\s/g,'').length || !priceRange.replace(/\s/g,'').length ){
            throw 'Error: Empty string'
        }
        let reg=/\d{3}-\d{3}-\d{4}$/
        let matched=phoneNumber.match(reg)
        if(matched==null || matched[0]!==phoneNumber){
            throw 'Error: Incorrect phone number format'
        }
        
        let web1='http://www.'
        let web2='.com'
        
        if(website.slice(0,11)!==web1 || website.slice(-4)!==web2 || website.slice(11,-4).length<5 )
        {
            throw 'Error: Invalid website url'
        }
        let price='$$$$'
        if(price.slice(0,1)!==priceRange && price.slice(0,2)!==priceRange && price.slice(0,3)!==priceRange && price.slice(0)!==priceRange){
            throw 'Error: Invalid price range'
        }

        if(!Array.isArray(cuisines)  || cuisines.length<1 || !cuisines.every(i=>(typeof i==='string' || i.replace(/\s/g,'').length || i==null  ))){
            throw 'Error: Cuisines is not an array or Element in an array is not a string or is an empty string'
        }

        if(typeof overallRating!=='number'){
            throw 'Error:Input is not a string'
        }

        var key=Object.keys(serviceOptions)

        if(Array.isArray(serviceOptions)){
            throw 'Error: It is an array'
        }
        else if(typeof(serviceOptions)!=='object'){
            throw 'Error: It is not an object'
        }
        
        else if( Object.keys(serviceOptions).length<3 || Object.keys(serviceOptions).length>3){
            throw 'Error: More than 3 object key or less than 3 object key'

        }
        
        else if(!key.includes('dineIn') || !key.includes('takeOut') || !key.includes('delivery')){
            throw 'Error: Invalid object key'
        }

        else if(typeof serviceOptions.dineIn!=='boolean' || typeof serviceOptions.takeOut!=='boolean' || typeof serviceOptions.delivery!=='boolean' ){
            throw 'Error: Invalid value input'
        }




        

        
        const restaurantsCollection = await restaurants();
        let newrestro = {
            // _id: ObjectId, 
            name: name,
            location: location,
            phoneNumber: phoneNumber ,
            website: website, 
            priceRange: priceRange,
            cuisines: cuisines ,
            overallRating: overallRating,
            serviceOptions: serviceOptions
        }
    


        const insertInfo = await restaurantsCollection.insertOne(newrestro);
        let newid=insertInfo.insertedId
        if(insertInfo.insertedCount===0) throw 'Unable to add restaurant'

        let a= await restaurantsCollection.findOne(newid);

        a._id=(a._id).toString();  
        return a
    },


async getAll(){
    const restaurantsCollection = await restaurants();

    const restlist = await restaurantsCollection.find({}).toArray();
    for(let i=0;i<restlist.length;i++)
    {
        restlist[i]._id=(restlist[i]._id).toString();

    }

       return restlist;


},

async get(id){
    
    
    if(!id){
        throw 'Error: No input'
    }

    if(typeof id!=='string' || !id.replace(/\s/g,'').length){
        throw 'Error: Input is not a string or is an empty string'
    }

    if(ObjectId.isValid(id)!=true){
        throw 'Error: Input is not a valid ObjectId'
    }
    const restaurantsCollection = await restaurants();

    let objid=ObjectId(id)
    let rest = await restaurantsCollection.findOne({ _id: objid });
    if (rest === null){ 
        throw 'Error: No restaurants with that id';
        
}
   rest._id=(rest._id).toString();

       return rest;
},


async remove(id){
    if(!id){
        throw 'Error: No input'
    }

    if(typeof id!=='string' || !id.replace(/\s/g,'').length){
        throw 'Error: Input is not a string or is an empty string'
    }

    if(ObjectId.isValid(id)!=true){
        throw 'Error: Invalid ObjectId'
    }
    let objid=ObjectId(id)
    const restaurantsCollection = await restaurants();

   
    let rest = await restaurantsCollection.findOne({ _id: objid });
    if (rest === null){ 
        throw 'Error: Restaurant cannot be removed as it does not exist';
        
}
let nameInfo= rest['name']


    const deletionInfo = await restaurantsCollection.deleteOne({ _id: objid });
    rest._id=(rest._id).toString();

    

       return `${nameInfo} has been successfully deleted!`;




},

async rename(id, newWebsite){
        if(!id){
        throw 'Error: id input not provided'
    }

    if(typeof id!=='string' || !id.replace(/\s/g,'').length){
        throw 'Error: Input is not a string or is an empty string'
    }

    if(ObjectId.isValid(id)!=true){
        throw 'Error: Invalid ObjectId'
    }

    if(!newWebsite){
        throw 'Error: newWebsite input not provided'
    }

        let web1='http://www.'
        let web2='.com'

        if(typeof newWebsite!=='string'){
            throw 'Error: Input is not a string'
        }

        if(!newWebsite.replace(/\s/g,'').length){
            throw 'Error: Empty string'
        }
        
        if(newWebsite.slice(0,11)!==web1 || newWebsite.slice(-4)!==web2 || newWebsite.slice(11,-4).length<5 )
        {
            throw 'Error: Invalid website url'
        }

    let objid=ObjectId(id)

        const restaurantsCollection = await restaurants();

    let rest = await restaurantsCollection.findOne({ _id: objid });
    if (rest === null){ 
        throw 'Error: Restaurant cannot be renamed as it does not exist';
        
}

let oldweb= rest['website']


if(newWebsite===oldweb){
    throw 'Error: new website name is same as old website name'
}


    const updatedrestro = {

      website: newWebsite
    };

    const updatedInfo = await restaurantsCollection.updateOne(
      { _id: objid },
      { $set: updatedrestro }
    );
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update website successfully';
    }
    updatedInfo._id=(rest._id).toString();

    return await this.get(id)

}


}
    

   

