// Q1. Implement customMap() function for JS arrays. The functionality should be exactly the same as that of JS native .map() function. Function customMap() should return a new array and not change the array on which we are mapping


//The prototype property's value is an object, which is basically a bucket for storing properties and methods that we want to be inherited by objects further down the prototype chain.

Array.prototype.customMap = function(callback){
    const newArray = [];
    for(let i=0;i<this.length;i++){
        newArray.push(callback(this[i],i));
    }
    return newArray;
}

const array = [2,4,6];

const result = array.customMap((val, index) => {
    return val*10;
});

console.log(array);

console.log(result);