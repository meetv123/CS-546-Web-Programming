const people=require('./people')
const stocks=require('./stocks')
async function main(){
// //////***********getPersonById()***********//////

    try{
    console.log( await people.getPersonById(-1))
    }
    catch(e){
        console.log(e)
    }
    try{
    console.log( await people.getPersonById(1001))
    }
    catch(e){
        console.log(e)
    }
    try{
    console.log( await people.getPersonById())
    }
    catch(e){
        console.log(e)
    }
    try{
    console.log( await people.getPersonById('7989fa5e-5617-43f7-a931-46036f9dbcff'))
    }
    catch(e){
        console.log(e)
    }

//////***********sameStreet()***********//////
try{
    console.log(await people.sameStreet("Sutherland", "Point"))
    }
    catch(e){
        console.log(e)
    }
try{
    console.log(await people.sameStreet(1, "Street"))
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await people.sameStreet("Street", 1))
        }
        catch(e){
            console.log(e)
        }
    try{
        console.log(await people.sameStreet("Street"))
        }
        catch(e){
            console.log(e)
        }
    try{
    console.log(await people.sameStreet())
    }
    catch(e){
        console.log(e)
    }
    try{
    console.log(await people.sameStreet("Crownhardt", "Park"))
    }
    catch(e){
        console.log(e)
    }

//////***********manipulateSsn***********//////
try{
console.log(await people.manipulateSsn())
}
catch(e){
    console.log(e)
}

//////***********sameBirthday***********//////
try{
    console.log(await people.sameBirthday(09, 25))
    }
    catch(e){
        console.log(e)
    }
    try{
        console.log(await people.sameBirthday(9, 25))
        }
        catch(e){
            console.log(e)
        }
    try{
        console.log(await people.sameBirthday("09",25))
        }
        catch(e){
            console.log(e)
        }
    try{
    console.log(await people.sameBirthday(09,31))
    }
    catch(e){
        console.log(e)
    }
    try{
    console.log(await people.sameBirthday(13,25))
    }
    catch(e){
        console.log(e)
    }
    try{
    console.log(await people.sameBirthday(02, 29))
    }
    catch(e){
        console.log(e)
    } 
    try{
    console.log(await people.sameBirthday("09", "31"))
    }
    catch(e){
        console.log(e)
    } 
    try{
    console.log(await people.sameBirthday("      ", "25"))
    }
    catch(e){
        console.log(e)
    } 
    try{
    console.log(await people.sameBirthday())
    }
    catch(e){
            console.log(e)
    } 

////////***********Stock.js***********//////////

//////***********listShareholders***********///////
try{
    console.log(await stocks.listShareholders())
}
catch(e){
    console.log(e)
}
try{
    console.log(await stocks.listShareholders('7283e5d6-7481-41cb-83b3-5a4a2da34717'))
}
catch(e){
    console.log(e)
}
try{
    console.log(await stocks.listShareholders('Nuveen Preferred and Income 2022 Term Fund'))
}
catch(e){
    console.log(e)
}

//////***********topShareholder(stockName)***********///////
try{
    console.log(await stocks.topShareholder('Aeglea BioTherapeutics, Inc.'))
}
catch(e){
    console.log(e)
}
try{
    console.log(await stocks.topShareholder('Nuveen Floating Rate Income Fund'))
}
catch(e){
    console.log(e)
}

try{
    console.log(await stocks.topShareholder("Powell Industries, Inc."))
}
catch(e){
    console.log(e)
}
try{
    console.log(await stocks.topShareholder('     '))
}
catch(e){
    console.log(e)
}
try{
    console.log(await stocks.topShareholder('Foobar Inc'))
}
catch(e){
    console.log(e)
}
try{
    console.log(await stocks.topShareholder())
}
catch(e){
    console.log(e)
}

//////***********listStocks(firstName,lastName)***********///////
try{
    const stock=await stocks.listStocks('Patrick','Hill')
    console.log(stock)
}
catch(e){
    console.log(e)
}
try{
    const stock=await stocks.listStocks()
    console.log(stock)
}
catch(e){
    console.log(e)
}
try{
    const stock=await stocks.listStocks('foo')
    console.log(stock)
}
catch(e){
    console.log(e)
}
try{
    const stock=await stocks.listStocks("      ", "        ")
    console.log(stock)
}
catch(e){
    console.log(e)
}
try{
    const stock=await stocks.listStocks(1,2)
    console.log(stock)
}
catch(e){
    console.log(e)
}

//////***********getStockById(id)***********///////
try{
    console.log(await stocks.getStockById(-1))
}
catch(e){
    console.log(e)
}
try{
    console.log(await stocks.getStockById(1001))
}
catch(e){
    console.log(e)
}
try{
    console.log(await stocks.getStockById())
}
catch(e){
    console.log(e)
}
try{
    console.log(await stocks.getStockById('7989fa5e-5617-43f7-a931-46036f9dbcff'))
}
catch(e){
    console.log(e)
}

}

    main();