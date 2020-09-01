// functions and types
//  мы можем опрелять какой тип функция должна возвращать
// это параметер после всег аргументов функции

function add(n1: number, n2: number): number {
	return n1 + n2;
}

// return type => void
// used when you don't return value
function printResult(num: number) {
	console.log('Result: ', +num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

printResult(add(5, 12));

// here the type of returning value is undefined
function returnResult(num: number) {
	console.log('Result: ', +num);
	return;
}

// you can use undefined in TypeScript
let someValue: undefined;

// function type
// let combineValues: Function;
// let combineValues: () => number; // take no parameter and return number
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log('combineValues', combineValues(8, 8));

addAndHandle(10, 20, (result) => {
	console.log(result);
});
