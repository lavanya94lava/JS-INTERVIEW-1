//Q9. Why do we need let and const in JS. Compare it with the problems in ES5

//let is used to define block scope in JS, this was introduced in ES6, before that there was no concept of Block scope.
//block scope means variables can be accessed from outside of the block also.
// for example
// for(var i=0;i<100;i++){
//     //do work
// }

//console.log(i)//100;
//this is still accessible from the outside
//hence we use let

//Earlier, variables can be mutated in JS , thereby leading to some serious security concerns
//this was recitified using const keyword