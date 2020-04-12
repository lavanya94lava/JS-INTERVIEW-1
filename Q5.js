// Q5. How to call the function display() in the following code such that it logs the given object on the screen


//bind method binds "this" keyword with the function context
function display() {
    console.log(this);
}

const obj = {
    a:100,
    b:{
        c:700,
        d:192
    }
};


display.bind(obj)();