// Q4. Implement a function sum() in the following way such that it gives the sum of two numbers

// return a fucntion within a function so that we can call twice and get the desired output.
function sum (a){
    return function(b){
        return a + b;
    }
}

//Example
console.log(sum(1)(10));// output is 11

