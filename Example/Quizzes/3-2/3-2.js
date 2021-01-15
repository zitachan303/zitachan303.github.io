function add (x, y ) {
	var result = x + y; 
	var msg = 'the sum of '+ x + ' and ' + y + ' is ' + result;
	return msg;
}

function substract (x, y ) {
	var result = y - x; 
	var msg = 'the result of '+ y + ' minus ' + x + ' is ' + result;
	return msg;
}

function multiply (x, y ) {
	var result = x * y; 
	var msg = 'the product of '+ y + ' and ' + x + ' is ' + result;
	return msg;
}

function divide (x, y ) {
	var result = x / y;
	var msg = 'the result of '+ y + ' / ' + x + ' is ' + result;
	return msg;
}



var basicMath = {
	add: add, 
	substract:substract,
	multiply: multiply,
	divide: divide,
};

console.log(basicMath.add(10, 21));
console.log(basicMath.substract(10, 21));
console.log(basicMath.multiply(5, 17));
console.log(basicMath.divide(80, 4));


