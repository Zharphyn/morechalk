var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

message = chalk.grey.bgMagenta("This will look terrible!!");
console.log(message);