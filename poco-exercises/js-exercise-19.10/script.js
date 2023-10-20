//function declaration = can be called before or after the decleration
function nameOfThe(param) {
  //do something
  return bool;
}

//function expression = can be called after the code is executed
const nameOfTheFunction = function () {
  //do something

  return true;
};

//arrow function - cannot be used as a method
//(parameters => {statements})
const sayHi = (name) => {
  console.log("hi");
};

//anonymous function
const library = ["Alchemist", "LOTR"];
library.forEach(function (book, index) {
  console.log(book);
});

//const experiencePoints = winBattle() ? 10 : 1;

function name(a) {
  return a + 100;
}
(a) => a + 100;

//no parameter
() => {
  let x = 5 + 100;
  alert(x);
};

// one parameter
(a) => {
  let x = a + 100;
  alert(x);
};

//more parameter
(a, b) => {
  let x = a + b;
  alert(x);
};

//expression
(a, b) => a + b;

//============================================================
/*
//conditions
//while
while(statement){codeblock};

do {
    //code block
} while (statement);

for (initialization; CSSConditionRule; itetator){
    //code block
};

array.forEach(function(value, index){
    //more code here
});

Array.forEach((element, index) => {
    //more code here
    console.log("rank" + (index+1) + "competitor: "+ element)
});
*/

//looping through an array
let list = ["Nora", "Noah", "Mia"];
for (let x of list) {
  console.log(x);
}

let obj = { doors: 2, windows: 5, rooms: 3 };
for (let x in obj) {
  console.log(x);
}

//============================================
//Constructor

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.greet = function () {
    console.log(
      `Hello, my name is ${this.name}, and I am ${this.age} years old. Also I am from ${this.city} `
    );
  };
}

const person1 = new Person("melek", 39, "uster");
console.log(person1);

//inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }
  jump() {
    console.log(`${this.name} is jumping.`);
  }
}

class Bird extends Animal {
  fly() {
    console.log(`${this.name} is flying.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const myDog = new Dog("Luna");
console.log(myDog.name);
myDog.jump();
myDog.bark();

const name = "first name";

const object = {
    [names]: "Melek",
    [5+3]: 2,
    experience: 12
}

