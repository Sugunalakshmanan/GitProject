let obj={empname: "sugu", empid: 49};
for(let a in obj){
    console.log(a);//accessing the key only
    console.log(obj[a]);//accessing the value only
    
    
}

//for of (iterate over the values in array and string)
//ARRAY
let arr=[1,2,3,4];
for(let b of arr){
console.log(b);

}
//STRING
let str="Suguna";
for(let b of str){
    console.log(b);

}
//FOR EACH(iterates over the values in an Array, string(not in object))

let str1=["Sugu", "Aaruth", "Mani", "Amizhthini"];

str1.forEach((a,b,c) => {
    console.log(a,b,c[b]);
    
});