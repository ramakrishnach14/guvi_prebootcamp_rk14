//Declare four variables without assigning values and print them in console

var a,b,c,d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//How to get value of the variable myvar as output

var myvar= 1;
console.log(myvar);

//variables to store your first name, last name, marital status, country and age in multiple lines
let firstName,lastName,maritialStatus,country,age;
firstName = "Rob";
lastName = "Matt";
maritialStatus = "unmarried";
country = "india";
age = 45;
console.log(firstName + " " + "\n" + lastName + " " + "\n" + maritialStatus + " " + "\n" + country + " " + "\n" + age);

//Declare variables to store your first name, last name, marital status, country and age in a single line

console.log(firstName + " " + lastName + " " +  maritialStatus +  " " + country +" " +  age );

//Declare variables and assign string, boolean, undefined and null data types

var strExample = "I am String";
var boolExample = true; //boolean
var undefExample = undefined; //
var nulExample = null;

//Convert the string to integer
let numbApp = "2";
let numbApp1 = "22";
let numbApp3 = "234";

console.log(+numbApp , parseInt(numbApp1) , Number(numbApp3) );

//Write 6 statement which provide truthy & falsey values
console.log(2>3);
console.log("a"=="a");
console.log(1=="1");
console.log(1==="1");
console.log("a"<"b");//ascii comparison!!!
console.log(true===true);