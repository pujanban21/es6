const hellWord = () => {
	console.log("Arrow function works!");
	console.log(a);

	let a = () => 45;
	console.log(typeof a, a());
}

function getContext() {
	console.log(this);
}

let myObj = {
	name: 'fancy',
	operation: function () {
		console.log(this);
	}
}
hellWord();
getContext();
myObj.operation();