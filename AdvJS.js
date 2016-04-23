/*

***** Constructor Function *****

Inbuild constructor function:

=> Start name with Capital letter.
=> New instance created using new keyword.
=> "this" keyword becomes the instance of constructor function.
=> Default return type of any function is undefined.

*/

// Non parameterised constructor function.
function Employee () {
    this.name = "Non parameterised constructor function.";
    this.greet = function () {
        return "Welcome, " + this.name;
    }
};


// Parameterised constructor function.
function Employee (name, message) {
    this.name = name || "No name passed.";
    this.greet = function () {
        return message || "No message passed.";
    }
};

/*
Closure:- A closure is a special kind of object that combines two things:

1. The function.
2. Environment in which that function was created.

*/

function closureFn () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
};

var counter = closureFn();// Here counter is closure.

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
