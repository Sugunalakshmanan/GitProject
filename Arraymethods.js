//Splice
let arr=[23,45,12,67,4,8,9];
arr.splice(2,3,"raj", 100);
console.log(arr);

//push
let a=[23,45,67];
a.push(23);
console.log(a);

//pop
let b=[23,45,67];
b.pop();
console.log(b);

//shift
var c=[1,2,3,4];
c.shift(c);
console.log(c);

//unshift
var d=[5,6,7,8];
d.unshift(11,12);
console.log(d);

//length
let q=[1,2,3,4];
let m = q.length;
console.log(m);

//concat
var g=[1,2,5];
let o=[5,6];
let n=g.concat(o);
console.log(n);



//some
let u=[23,56];
let v=u.some((e)=>e%2==0);
console.log(v);

//reverse
let rev=[1,2,4];
var var1=rev.reverse();
console.log(var1);

//sort
let srt=[1,8,6,7];
let asc=srt.sort();
console.log(asc);

//map
let map1=[1,6,7];
let map2=map1.map((e)=>e*2);
console.log(map2);

//filter
let filt1=[2,3,4,6,7];
let filt2=filt1.at((e)=>e%2==0);
console.log(filt2);

//reduce
var a1=[2,3,4];
var a2=a1.reduce((acc,num)=>acc+num,0);
console.log(a2);

@@//indexOf
var str1 = ["Hi Suguna"];
console.log(str1.indexOf("H"));

@@//every
let u=[23,56];
let x=u.every(e<10);
console.log(x);