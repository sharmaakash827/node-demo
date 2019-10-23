var Animal = require("./animal.js");

var john = new Animal(20);
console.log(john.getAge());
console.log(john.__proto__.__proto__);
console.log(Animal.__proto__);