//Square of a number
var num1 = 2
console.log(num1 * num1);//Math.pow(num1,2)

//swaping numbers
var a , b ;
a = 3 ;
b = 6
console.log("Before swapping");
console.log(a,b);
a = a+b;
b = a-b;
a = a-b;
console.log("After swapping");
console.log(a,b);

//addition of three numbers
var c;

a = 24 ; b = 32 ; c = 9
console.log(a+b+c);

//Celsius to Fahrenheit conversion
var celsius , fahrenheit ; 
celsius = 0;
fahrenheit =  (celsius*9)/5+32;
console.log(celsius + "C is " + fahrenheit + "F");

//Meter to miles

var varMeters , varKM;
varMeters = 2000;
varKM = varMeters/1000;
console.log(varMeters +"M is " +  varKM +"KM");

//Pounds to kg
var varPound , varKg ;
varPound = 50;
varKg =  varPound/2;
console.log(varPound +"pound is " +  varKg + "Kg");

//Calculate Batting Average
var varTotalScore , varTotalInnings , batAvg;
varTotalScore = 660;
varTotalInnings = 9;
batAvg = Math.round(varTotalScore / varTotalInnings,2);
console.log("Total score is "+varTotalScore);
console.log("Total innings is "+varTotalInnings);
console.log("batAvg is "+batAvg);

//Calculate five test scores and print their average
var testScore1 = 78;
var testScore2 = 81;
var testScore3 = 86;
var testScore4 = 90;
var testScore5 = 93;
var testAvg = (testScore1 + testScore2 + testScore3 + testScore4 + testScore5) / 5 ;

console.log("testScore1 is "+testScore1 + " " + "testScore2 is "+testScore2 + " " + "testScore3 is "+testScore3 + 
	" "+"testScore4 is "+testScore4 + " "+"testScore5 is "+testScore5);
console.log("testAvg is "+testAvg);

//Power of any number x ^ y
var varX , varY;
varX = 3 ; varY = 4;
console.log(varX+" power of "+varY + " is");
console.log(varX**varY);

//Calculate Simple Interest
var principal , time , rate , si;
principal = 10000;
time = 2;
rate = 2;
si = (principal*time*rate)/100;
console.log("principal is " + principal + " time is "+ " rate is "+rate);
console.log("SI is "+si);

//Calculate area of an equilateral triangle
var side = 3 , eqiArea;
console.log("side is " +side);
eqiArea = Math.sqrt(3)/4*side*side
console.log("Area is " + eqiArea);

//Area Of Isosceles Triangle
var base , height , isosArea;
base = 10;
height = 20;
isosArea = (base * height)/2;
console.log("Base is "+base+" height is "+height+" area is "+isosArea);

//Volume Of Sphere
var radius , volume , piValue ;
piValue = Math.PI;
radius = 10;
volume = (4*piValue*Math.pow(radius,3))/3;
console.log("The radius is "+radius+" volume is "+volume.toFixed(2));

//Volume Of Prism

var length , width , height , baseArea , volumeOfPrism ,  volumeOfPrism;
length = 10;
width = 13;
height = 15;
baseArea = length * width;
volumeOfPrism = baseArea * height;
console.log("The length is "+length+" width is "+width+" height is "+height);
console.log("The baseArea is "+baseArea);
console.log("The volumeOfPrism is "+volumeOfPrism);

//area of a triangle
var triArea;
base = 12;
height = 20;
triArea = (base*height)/2;
console.log("Base is "+base+" height is "+height);
console.log("Area of triangle is "+triArea);

//Give the Actual cost and Sold cost, Calculate Discount Of Product

var actualCost , soldCost , discount;
actualCost = 25;
soldCost = 24;
if(actualCost>soldCost){
	discount = actualCost-soldCost;
	//console.log(discount);
	console.log("Actual cost is "+actualCost+" soldCost is "+soldCost+ " discount is "+discount);
} else {
	console.log("Actual cost is "+actualCost+" soldCost is "+soldCost+ " no discount");
}

//Given their radius of a circle and find its diameter, circumference and area
var radius , diameter , circumference , area;
radius = 	10;
diameter = 2 * radius;
circumference = diameter * (22/7);
area =  (Math.PI) * radius * radius;
console.log("The radius is "+radius);
console.log("The diameter is "+diameter);
console.log("The circumference is "+circumference.toPrecision(6));
console.log("The area is "+area.toPrecision(6));

//Display the asterisk pattern as shown below(No loop needed):
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

//Calculate electricity bill
var perHourConsume = 100;
var perDay = 100*24;
var unitsPerDay = perDay/1000;
var unitsPerMonth = unitsPerDay * 30;

var bill = unitsPerMonth * 10 ;

console.log("Per Month units are "+unitsPerMonth +" and bill is "+bill);


