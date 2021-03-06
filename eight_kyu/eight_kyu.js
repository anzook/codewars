/*******************************************************************************************
Convert a String to a Number! -- number + string = string
*******************************************************************************************/

// MY SOLUTION
var stringToNumber = function(str){
  return parseInt(str); 
}


// TOP SOLUTION

// var stringToNumber = function(str){
//   return +str;
// }



/*******************************************************************************************
The 'if' function -- ternary operator 
*******************************************************************************************/

// MY SOLUTION
function _if(bool, func1, func2) {
  if(bool) { func1(); }
  else { func2(); }
}

// TOP SOLUTION

// function _if(bool, func1, func2) {
//   return bool ? func1() : func2(); //ternary operator -- try to implement in the future
// }



/*******************************************************************************************
Arithmetic Sequence! 
*******************************************************************************************/

// MY SOLUTION = TOP SOLUTION 
var nthterm = function(first, n, c){
 return n * c + first;   
} 



/*******************************************************************************************
Are You Playing Banjo?
*******************************************************************************************/


// MY SOLUTUION

function areYouPlayingBanjo(name) {
  if (name.charAt(0) === 'r' || name.charAt(0) === 'R') 
  	{ return name + " plays banjo"; }
  else 
  	{ return name + " does not play banjo" }
}

// TOP SOLUTION

// function areYouPlayingBanjo(name) {
//   return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo"; // also uses ternary operator
// }



/*******************************************************************************************
A function within a function
*******************************************************************************************/

// MY SOLUTION = TOP SOLUTION

function always(n) {
	return function() {
		return n;
	}
}


/*******************************************************************************************
Sum Arrays -- glance into higher-order functions with .reduce
*******************************************************************************************/

// MY SOLUTION

function sum(numbers) {
  x = 0;
  for (i = 0; i < numbers.length; i++) {
    x += numbers[i];
  }
  return x;
};

// TOP SOLUTION
// var sum = function (numbers) {
//   return numbers.reduce(function(t, n){ //.reduce takes advantage of a callback function as one of it's arguments
//     return t + n;
//   }, 0);
// };



/*******************************************************************************************
Sentence Smash -- intro to native .join method, unnecessary logic
*******************************************************************************************/

// MY SOLUTION
function smash (words) {

var str = "";

if (words.length > 0) {
	for(i = 0; i < words.length - 1; i++) {
		str += words[i];
		str += " ";
		console.log("string inside of for loop at index", i, "equals value", str);
	}
	str += words[words.length - 1];
}

	console.log("final string equals ", str);
	return str;
    
};

// TOP SOLUTION

// function smash(words){
// 	return words.join(' ');
// }



/*******************************************************************************************
Even or Odd -- ternary operator practice
*******************************************************************************************/

// MY SOLUTION = TOP SOLUTION

function even_or_odd(number) {
  return (number % 2) ? 'Odd' : 'Even'
}



/*******************************************************************************************
Swap Values -- intro to native .reverse method
*******************************************************************************************/

// MY SOLUTION

function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
  return args;
}


// TOP SOLUTION

// function swapValues() {
//   return arguments[0].reverse();  //intro to reverse method. try to use this in the future!
// }



/*******************************************************************************************
Get Planet by ID -- don't overlook the break when invoking a switch
*******************************************************************************************/

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
  }
  
  return name;
}



/*******************************************************************************************
Shifty Closures
*******************************************************************************************/

var greet_abe = function() {
	return globalGreet('Abe');
};

var greet_ben = function() {
	return globalGreet('Ben');
};

function globalGreet (name) {
	return "Hello, " + name + '!';
}



/*******************************************************************************************
Return to Sanity: NEW CONCEPT (semi-colon insertion)
*******************************************************************************************/

// function mystery() {
//   var results =
//     {sanity: 'Hello'};
//   return // return by itself is a statement, so Javascript will automatically enter a semi colon at the end of the line for a valid statement. 
//     results;
// }

function mystery() {
  var results =
    {sanity: 'Hello'};
  return results; 
}



/*******************************************************************************************
Semi Optional
*******************************************************************************************/
function wrap(value) {
  return {
  	'value': value //converted the key to a string to avoid conflict
  };
}



