const restaurants = require('./data/restaurants');
const connection = require('./config/mongoConnection');

const main=async() =>{
 try{
        const PalluRestro = await restaurants.create("Pallu Restaurant","Jersey City, New Jersey", "201-920-7889", "http://www.pallurestro.com", "$$$$", ["Indian", "Continental"], 3, {dineIn: true, takeOut: true, delivery: false});
        console.log(PalluRestro);
 }
 catch(e){
        console.log(e);
}
try{
        const getPalluRestro = await restaurants.get("615cae77224fcd8d75b4e3af"); 
        console.log(getPalluRestro);
}
catch(e){
        console.log(e);
}  
try{
        const mamisKitchen= await restaurants.create("Mami's Kitchen","Jersey City, New Jersey", "551-208-3651", "http://www.mamiskitchen.com", "$$", ["Indian"], 1, {dineIn: true, takeOut: true, delivery: false});
        console.log(mamisKitchen);
}
catch(e){
        console.log(e);
}
try{
        const allResturants = await restaurants.getAll();
        console.log(allResturants);
}
catch(e){
        console.log(e);
}
try{
        const PrathuMania= await restaurants.create("Prathu Mania","Jersey City, New Jersey", "551-430-9847", "http://www.prathumania.com", "$$$", ["Indian","Chinese"], 2, {dineIn: false, takeOut: true, delivery: true});
        console.log(PrathuMania);
}
catch(e){
        console.log(e);
}
try{
        const getPrathuMania = await restaurants.get("615cb55340ccbcd3c4078725"); 
        console.log(getPrathuMania);
}
catch(e){
        console.log(e);
}  
try{
        const renamedPalluRestro = await restaurants.rename("615cae77224fcd8d75b4e3af", "http://www.thepallurestro.com"); 
        console.log(renamedPalluRestro);
}
catch(e){
        console.log(e);
}
try{
        const getPalluRestro1 = await restaurants.get("615cae77224fcd8d75b4e3af"); 
        console.log(getPalluRestro1); 
}
catch(e){
        console.log(e);
}
try{
        const removemamisKitchen = await restaurants.remove("615cb480c4c69d48779d2f8a"); 
        console.log(removemamisKitchen);
}
catch(e){
        console.log(e);
}
 try{       
        const allResturants1 = await restaurants.getAll();
        console.log(allResturants1);
 }
 catch(e){
        console.log(e);
}
try{
        const MeetuRestro = await restaurants.create("Meetu Restaurant","Jersey City, New Jersey", "201-279-2275", "http://www.meetuurestro.com", "$$$$$", ["Indian", "Continental"], 3, {dineIn: true, takeOut: false, delivery: false});
        console.log(MeetuRestro);
}
catch(e){
        console.log(e);
}
try{
        const removedummyrestro = await restaurants.remove("615beade9e434522f6ee0000"); 
        console.log(removedummyrestro);
}
catch(e){
        console.log(e);
}
try{
        const renameddummyrestro = await restaurants.rename("615beade9e434522f6ee0000", "http://www.dummyrestro.com"); 
        console.log(renameddummyrestro);
}
catch(e){
        console.log(e);
}

try{
        const renamedPalluRestro1 = await restaurants.rename("615cae77224fcd8d75b4e3af", 123); 
        console.log(renamedPalluRestro1);
}
catch(e){
        console.log(e);
}
try{
        const getdummyrestro = await restaurants.get("615beade9e434522f6ee0000"); 
        console.log(getdummyrestro); 
}
catch(e){
        console.log(e)
}

process.exit();
}

main();