// Q2. Implement a function propertyExists(obj, path) that takes in an object and a path (string) as arguments and returns ‘False’ if the property doesn’t exist on that object or is null, else returns the value of the property


//function looks out for object key and then goes to find another object inside current level depending on your input.
function propertyExists(obj, path){
    if(path!=null && typeof path === "string"){
        const array = path.split('.');
        for(let i=0;i<array.length;i++){
            const ele = array[i];
            if(obj[ele]){
                obj = obj[ele];
            }
            else{
                return false;
            }
        } 
        return obj;
    }
}

const obj = {
    a: 1,
    b: 2,
        c: {
            d: 100,
            e: {
                f: 45
            }
        }
    };

    console.log(propertyExists(obj, "c.d"));
    console.log(propertyExists(obj, "c.d.g.h")); 
    console.log(propertyExists(obj, "a.b")); 
    console.log(propertyExists(obj, "c.e.f"));
    
    