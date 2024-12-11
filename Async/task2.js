//Armstrong
let number = 153;
let NoOfdigits=number.length;
var sum=0;

for(i=0; i<NoOfdigits; i++){
    sum=Math.pow(number.charAt(i), NoOfdigits)
}
if(sum==number)
{
    console.log("The number is Armstrong");
    
}
else{
    console.log("The number is not Armstrong");
    
}   

//fibanocci series
