let str="Hello Suguna";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt());
console.log(str.indexOf("S"));
console.log(str.lastIndexOf("a"));
let str1=str.slice(6,8);
console.log(str1);
var str2=str.substring(1,3);
console.log(str2);
//replace
let text="Hi Suguna Suguna";
let newtext=text.replace("Suguna", "Aaruth");
console.log(newtext);
//replaceall
let newtext2=text.replaceAll("Suguna", "Aaruthran");
console.log(newtext2);

//split
let string ="Aaruthran, amizhthini";
let string2 =string.split(",");
console.log(string2);

//trim
let space="  Hello world  ";
let space1=space.trim(" ");
console.log(space1);

//startswith
let str5="Hello Suguna";
let str6=str5.startsWith("A");
console.log(str6);

//endswith
let str7="Hello Suguna";
let str8=str7.endsWith("a");
console.log(str8);

//include()
let Incl="Hello Sugu";
let Incl1=Incl.includes("Sugu");
console.log(Incl1);

//concat():
let a="Suguna";
let b="Manikandan";
let c=a.concat(b);
console.log(c);

//repeat
let s1="Sai ram ";
let s2=s1.repeat(3);
console.log(s2);

//match:
let text3="rain main vain";
var match=text3.match("ain");
console.log(match);

//search()
let text4="main vain";
var search=text4.search("vain");
console.log(search);









