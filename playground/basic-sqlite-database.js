var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, { // new instance of sequelize to do stuff with
	'dialect': 'sqlite', // which db we want to use
	'storage': __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo', {
	description: {
		type: Sequelize.STRING, // needs to be a string
		allowNull: false, // description needs to exist
		validate: {
			len: [1, 250] // length must be 1-250 chars
		}
	},
	completed: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false // defaults to not completed
	}
});

sequelize.sync({
	// force: true
}).then(function() {
	console.log('Everything is synced');

	// Fetch todo item by id
	// If found print to screen using toJSON
	// If not found print to screen 'todo not found'
	Todo.findById(3).then(function (todo) {
		if (todo) {
			console.log(todo.toJSON());
		} else {
			console.log('Todo not found');
		}
	});


	// Todo.create({	// creates static data (not using API) using attributes you want to save
	// 	description: 'Take out trash'
	// }).then(function (todo) {
	// 	return Todo.create({
	// 		description: 'Clean office'
	// 	});
	// }).then(function() {
	// 	// return Todo.findById(1)
	// 	return Todo.findAll({
	// 		where: {
	// 			description: {
	// 				$like: '%Office%'	// capitalisation not important when using $like
	// 			}
	// 		}
	// 	});
	// }).then(function (todos) {
	// 	if (todos) {
	// 		todos.forEach(function (todo) {
	// 			console.log(todo.toJSON());
	// 		});

	// 	} else {
	// 		console.log('no todo found!');
	// 	}
	// }).catch(function(e) {
	// 	console.log(e);
	// });
});