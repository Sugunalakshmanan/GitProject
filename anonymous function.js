//function expression:(assign to a variable)
const name=function(employee){
console.log(`Hi, ${employee}`);
};
name('Suguna');

//callback function
 function fun1(name, callback) {
    console.log(`hi, ${name}`);
    callback();
 }

 function fun2() {
    console.log("bye");    
 }
 fun1("Suguna", fun2);

 //IIFE(immediately invvoked function expression)
 (function () {
    console.log("Hi Suguna");
     
 })();