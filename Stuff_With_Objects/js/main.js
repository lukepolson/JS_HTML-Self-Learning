/* Create Object */
let person = new Object();

/* Set Attributes */
person.name = "Daniel";
person.eyeColor = "Blue";
person.age = 27;
person.updateAge = function() {
	return ++person.age;
}

/* Short Way */

let person ={
	name: "Luke",
	eyeColor: "Blue",
	age: 27,
	updateAge: function() {
		return ++person.age;
	}
}	
	
/* Create Object Constructor */

function Person(name, eyeColor, age) {
	this.name = name;
	this.eyeColor = eyeColor;
	this.age = age;
	this.updateAge = function() {
		return ++this.age;
	};
}

let person1 = new Person("Luke", "Blue", 22);

console.log(person1.updateAge());
