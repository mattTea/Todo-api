// var person = {
// 	name: 'Matt',
// 	age: 21
// };

// function updatePerson (obj) { // when assigning a new value to an argument you do not update the original
// 	// obj = {
// 	// 	name: 'Matt',
// 	// 	age: 24
// 	// };
// 	obj.age = 24; // when you simply call something on the original, you are in fact updating it
// }

// updatePerson(person);
// console.log(person);

// Array Example

var grades = [15, 88];

function addGrade (gradesArr) {
	gradesArr.push(55); // this will update the 'grades' array
	debugger;

	// gradesArr = [12, 33, 99]; // this just means a completing new 'gradesArr' variable is created inside of addGrade, but is not referenced by 'grades' array
}

addGrade(grades);
console.log(grades);