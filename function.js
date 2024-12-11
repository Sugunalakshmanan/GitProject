//immediate invoke function
var arr = (function (a){
    console.log(a);
})("100");

//function expression
var tt=function greeting(){
    console.log("this is an fuction expression");
};
tt();

//arrow function:
const addvalue=(a, b)=>a+b;
console.log(addvalue(10, 70));

//addition
let num1 =10;
var num2=40;
var sum = num1+num2;
console.log(sum);

//function without parameter
function add(){
    console.log("this is without parameters");
    console.log(add());
    
}

//function with parameter