// Write program to print Fibonacci  Searies and return the value at passed number

// solution 1
function fibonacci(num) {
  const result = [0, 1];
  for (let i = 2; i <= num; i++) {
    const latest = result[i - 1];
    const seconLatest = result[i - 2];
    result.push(latest + seconLatest);
  }
  console.log(result);
  return result[num];
}

// solution 2
function fib(num) {
  if (num < 2) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}
