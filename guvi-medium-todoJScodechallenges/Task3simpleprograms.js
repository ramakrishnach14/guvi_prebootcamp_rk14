
//Write a loop that makes seven calls to console.log to output the following triangle:

var op = "";
for(var i =  1 ; i<=7 ; i++){
	for(var j =  1 ; j<=i ; j++){
		op = op + "#";
	}
	console.log(op);
	op = "";
}

//Iterate through the string array and print it contents

 var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"];

  for(var i = 0; i<strArray.length;i++){
  	console.log(strArray[i]);
  }


  //write a code to count the elements in the array . Don’t use length property

  var myarray=[11,22,33,44,55];
  var sum = myarray.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log("sum of Array without knowing th length of array is "+sum);

//Declare an empty array;
//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=[];
foods[0] = "food1";foods[1] = "food2";foods[2] = "food3";foods[3] = "food4";foods[4] = "food5";foods[5] = "food6";foods[6] = "food7";
foods[7] = "food8";
foods[8] = "food9";foods[9] = "food10";foods[10] = "food11";foods[11] = "food12";foods[12] = "food13";foods[13] = "food14";foods[14] = "food15";
foods[15] = "food16";foods[16] = "food17";
foods[17] = "food18";foods[18] = "food19";foods[19] = "food20";

//How can you find your fifth favorite food
console.log("Fifth food is "+foods[4]);

//Find the length of your foods array

console.log("length of foods array is "+foods.length);