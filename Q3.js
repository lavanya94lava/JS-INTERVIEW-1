// Q3. Implement a function strContains(char) that I can use on any string and it returns true/false if the character “char” is present on a string (optimize it as much as possible)


//The prototype property's value is an object, which is basically a bucket for storing properties and methods that we want to be inherited by objects further down the prototype chain.

//this function goes to every character in the string and checks whether it matches with the given input.
//time complexity is O(n)
String.prototype.strContains = function(char){
    const str = this;//this refers to the current string;

    for(let i=0;i<str.length;i++){
        if(str.charAt(i)== char){
            return true;
        }
    }
    return false;
}


console.log("unitedStatesOfAmerica".strContains("l")); // return false;
console.log("unitedStatesOfAmerica".strContains("a")); // return true;


