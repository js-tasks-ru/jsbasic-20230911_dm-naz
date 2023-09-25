function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }

  let factorialValue = 1;

  for (let index = 1; index <= n; index++) {
    factorialValue *= index;
  }

  return factorialValue;
}
