/* This replaces entire body: 
document.body.innerHTML = "This is some content from javascript";
*/

/* Whereas this adds to body text (note the +=)
document.body.innerHTML += "This is some content from javascript";
*/


	/* 	DECLARE A FUNCTION AND CALL IT
	function testExample(name) {
		var greeting = "hi: my name is " + name;
		console.log(greeting);
	}

	testExample("Luke");
	*/

	/* DECLARE ANONYMOUS FUNCTION AND CALL IT 
	var testExample = function(name) {
		var greeting = "hi: my name is " + name;
		console.log(greeting);
	}

	testExample("Luke")
	*/

	/* OR CALL FUNCTION AS SOON AS CODE IS CALLED 
	(function testExample() {
		var greeting = "hi: my name is Luke"
		console.log(greeting);
	}())
	*/

function calc() {
	var a = parseInt(document.querySelector("#value1").value);
	var b = parseInt(document.querySelector("#value2").value);
	var op = document.querySelector("#operator").value;
	var calculate;
	
	if (op == "add") {calculate=a+b;}
	else if (op == "sub") {calculate=a-b;}
	else if (op == "mul") {calculate=a*b;}
	else if (op == "div") {calculate=a/b;}
	
	document.querySelector("#result").innerHTML = calculate;
	
}