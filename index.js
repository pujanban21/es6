//Begin practice arrow function
const hellWord = () => {
	console.log("Arrow function works!");
}

//understanding of 'this'
function getContext() {
	console.log(this);
}

let myObj = {
	name: 'fancy',
	operation: function () {
		console.log(this);
	}
}

//understanding call() and apply() method

function Product(name, price) {
	this.name = name;
	this.price = price;
}

function Food(name, price) {
	Product.call(this, name, price);
	this.category = 'Food';
}

function Toy(name, price) {
	// Product.call(this, name, price);
	details = [name, price];
	Product.call(this, details);
	// this.category = 'Toy';
}

console.info('Understanding call and apply method')
console.log(new Toy('robot', 40));
console.log(new Food('cheese', 5));

// hellWord();
// getContext();
// myObj.operation();

//understandng bind() method

var module = {
	x: 42,
	getX: function () {
		return this.x;
	}
}

var unboundGetX = module.getX;
console.info('Understanding bind() method');
console.log(unboundGetX()); //undefined, since its looking this.x at global scope at getX()

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); //42, since the value of this.x is within module scope

//Understanding 'this' in arrow functions
console.log(`Understanding 'this' in arrow functions`)
//Arrow functions are designed to lexically bind the context
//Meaning 'this' refers to the enclosing context where the arrow function is defined
//Unlike normal functions, arrow functions doesn't create its own execution context, but takes 'this' from 
//the outer function where it is defined


//Normal function 'this' example
function Employee(firstName, lastName, department, salary) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.department = department;
	this.salary = salary;

	this.getInfo = function () {
		//outer function context 
		return () => {
			//inner function context
			console.log(this.firstName, this.lastName, this.department, this.salary);
		}
	}
}

let jim = {
	firstName: 'jim',
	lastName: 'Ban',
	department: 'Finance',
	salary: 52000
};
let jim1 = new Employee('jim', 'ban', 'finance', 52000);
let printInfo = jim1.getInfo();
printInfo(); //Undefined 'this' is  global scope 


//Understanding Rest and Sprea Operations

// Understanding Rest Operator

console.log('Understanding Rest Operator');

function RestExample(a, ...b) {
	for (let item of b) {
		console.log(item);
	}
}

RestExample(1, 2, 3, 4, 5, );

// Understanding Spread Operator

function SpreadOperator(a, b, c) {
	console.log(a, b, c);
}
let a = [1, 2, 3];
SpreadOperator(...a);