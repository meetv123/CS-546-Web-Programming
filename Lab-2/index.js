//////***********stringUtils.js***********//////
const arrayUtils = require("./arrayUtils");

// //////***********Average Test***********//////
// try{
//     //Should Pass
// const avg =arrayUtils.average([[1],[2],[3]]); 
// console.log("average passed successfully")
// }
// catch(e){
//     console.error("average failed test case")
// }

// try{
//     // Should Fail
// const avg =arrayUtils.average([[1,3], ['guitar',4,5]]); 
// console.error("average passed successfully")
// }
// catch(e){
//     console.log("average failed test case")
// }


// //////***********modeSquared Test***********//////
// try{
//     //Should Pass
// const mode =arrayUtils.modeSquared([1,2,3,3,4]); 
// console.log("modesquared passed successfully")
// }
// catch(e){
//     console.error("modesquared failed test case")
// }

// try{
//     // Should Fail
// const mode =arrayUtils.modeSquared([[]]); 
// console.error("modesquared passed successfully")
// }
// catch(e){
//     console.log("modesquared failed test case")
// }



//////***********medianElement***********//////
try{
    //Should Pass
const median =arrayUtils.medianElement([3,20,6,8,9]); 
console.log(median)
console.log("medianelements passed successfully")
}
catch(e){
    console.error("medianelements failed test case")
}

// try{
//     // Should Fail
// const median=arrayUtils.medianElement([[1,2,'guitar']]); 
// console.error("medianelements passed successfully")
// }
// catch(e){
//     console.log("medianelements failed test case")
// }



// //////***********Merge Test************//////
// try{
//     //Should Pass
// const merge =arrayUtils.merge([1,2,3],[3,2,1]); 
// console.log("merge passed successfully")
// }
// catch(e){
//     console.error("merge failed test case")
// }

// try{
//     // Should Fail
// const merge=arrayUtils.merge([[null,null,null][null,null,null]]); 
// console.error("merge passed successfully")
// }
// catch(e){
//     console.log("merge failed test case")
// }

// //////***********stringsUtils.js***********//////
// const stringUtils = require("./stringUtils");
// /////////***********sortedString Test************//////
// try{
//     //Should Pass
// const sort =stringUtils.sortString('123 FOO BAR!'); 
// console.log("sortString passed successfully")
// }
// catch(e){
//     console.error("sortString failed test case")
// }

// try{
//     // Should Fail
// const sort=stringUtils.sortedString(''); 
// console.error("sortString passed successfully")
// }
// catch(e){
//     console.log("sortString failed test case")
// }


// ////***********replaceChar(string,idx)***********//////
// try{
//     //Should Pass
// const replace =stringUtils.replaceChar("Daddy",2); 
// console.log("replaceChar passed successfully")
// }
// catch(e){
//     console.error("replaceChar failed test case")
// }

// try{
//     // Should Fail
// const replace=stringUtils.replaceChar("foobar",0)
// console.error("replaceChar passed successfully")
// }
// catch(e){
//     console.log("replaceChar failed test case")
// }

// ////***********mashup(string1,string2,char)***********//////
// try{
//     //Should Pass
// const mashup =stringUtils.mashup("Patrick", "Hill", "$"); 
// console.log("mashup passed successfully")
// }
// catch(e){
//     console.error("mashup failed test case")
// }

// try{
//     // Should Fail
// const mashup=stringUtils.mashup("Patrick", "")
// console.error("mashup passed successfully")
// }
// catch(e){
//     console.log("mashup failed test case")
// }


// //////***********objUtils.js***********//////
// const objUtils = require("./objUtils");
// const { medianElement } = require("./arrayUtils");



// //////***********computeObjects(obj1,obj2)***********//////

// try{
//     const first = { x: 2, y: 3};
// const second = { a: 70, x: 4, z: 5 };
//     //Should Pass
// const compute =objUtils.computeObjects([first, second], x => x * 2); 
// console.log("computeobject passed successfully")
// }
// catch(e){
//     console.error("computeobject failed test case")
// }
// try{
//     // Should Fail
// const compute=objUtils.computeObjects({})
// console.error("computeobject passed successfully")
// }
// catch(e){
//     console.log("computeobject failed test case")
// }

// //////***********commonKeys Test***********//////


// try{
//     const first = {a: 2, b: 4};
// const second = {a: 5, b: 4};
//     //Should Pass
// const common =objUtils.commonKeys(first, second); 
// console.log("commonkeys passed successfully")
// }
// catch(e){
//     console.error("commonkeys failed test case")
// }

// try{
//     // Should Fail
// const common=objUtils.commonKeys({})
// console.error("commonkeys passed successfully")
// }
// catch(e){
//     console.log("commonkeys failed test case")
// }

// //////***********flipObject()***********//////


// try{
//     //Should Pass
// const flip =objUtils.flipObject({ a: 3, b: 7, c: { x: 1 }}); 
// console.log("flipobject passed successfully")
// }
// catch(e){
//     console.error("flipobject failed test case")
// }

// try{
//     // Should Fail
// const flip=objUtils.flipObject()
// console.error("flipobject passed successfully")
// }
// catch(e){
//     console.log("flipobject failed test case")
// }
