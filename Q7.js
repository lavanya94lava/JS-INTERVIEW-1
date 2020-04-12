// Q7. Give a relevant example of Promises

//Promises are used in asynchronours programming, in promises we attach callbacks to Promise instead  of sending them as functions.
//Promises are used to avoid callback hell.

var promise = new Promise(function(resolve, reject){
    // we are using setTimeout to show promise and make it asynchronous
    setTimeout(function(){
        resolve("Congrats");
    },500);
});

promise.then((congratsMessage) => {
    console.log(congratsMessage);
}).catch((err) =>{
    console.log(`Promise not fulfilled ${err}`);
});