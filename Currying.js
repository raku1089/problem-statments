// write utility function which accepts function as argument .
// which can be executed by passing arguments one by one or passing all arguments in one go
// const newFn = tarnsform(fun)
// newFn(1,2,3)
// newFn(1,2)(3)
//newFn(1)(2)(3)

function multiply(a, b, c) {
  return a * b * c;
}

function add(a, b, c, d) {
  return a + b + c + d;
}
// utility function
function transform(foo) {
  return function partial(...args1) {
    if (args1.length >= foo.length) {
      return foo(...args1);
    } else {
      return function (...args2) {
        // concat arguments using destructure
        return partial(...[...args1, ...args2]);
      };
    }
  };
}

const multiplyNumber = transform(multiply);
const addNumber = transform(add);
console.log(multiplyNumber(1, 2, 3));
console.log(multiplyNumber(1, 2)(3));
console.log(addNumber(1, 2, 3, 4));
console.log(addNumber(1, 2)(3, 4));
