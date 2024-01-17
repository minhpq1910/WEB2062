function sayHello(name = 'minhpq', age = 20) {
  // xu ly logic
  console.log(`Hello ban ${name}. Toi dang ${age} tuoi`);
  return "sdnvjwd";
}

const result = sayHello('minh');
console.log(result);


// Define a function with parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

// Invoke function with arguments
add(5, 10);

// Parameters vs. Arguments
// Parameters are the names of the variables that are used to pass data into a function.
// Arguments are the values that are passed into the function

// Returning a value
function subtract(num1, num2) {
  return num1 - num2;

  console.log('After the return');
}

// Assign the returned value to a variable
// const result = subtract(10, 2);

console.log(result, subtract(20, 5));
