const sumFibonacci = (n) => {
  if (n <= 1 || typeof n !== 'number') {
    return 0;
  }
  const nameUndefined = (quantity, acc, newNum) => {
    if (quantity === 0) {
        return acc - 1
    }
    return nameUndefined(quantity - 1, acc + newNum, newNum = acc)
  }
  return nameUndefined(n, 1, 0);
};

console.log(sumFibonacci())

/*
console.log(sumFibonacci(1)); // 0 (только первое число Фибоначчи)
console.log(sumFibonacci(2)); // 1 (0 + 1)
console.log(sumFibonacci(3)); // 2 (0 + 1 + 1)
console.log(sumFibonacci(4)); // 4 (0 + 1 + 1 + 2)
console.log(sumFibonacci(5)); // 7 (0 + 1 + 1 + 2 + 3)
console.log(sumFibonacci(6)); // 12 (0 + 1 + 1 + 2 + 3 + 5)
console.log(sumFibonacci(7)); // 20 (0 + 1 + 1 + 2 + 3 + 5 + 8)
console.log(sumFibonacci(8)); // 33 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13)
console.log(sumFibonacci(9)); // 54 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21)
console.log(sumFibonacci(10)); // 67 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 34)
console.log(sumFibonacci(11) = 143 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55)
console.log(sumFibonacci(12) = 232 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89)
console.log(sumFibonacci(13) = 376 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89 + 144)
console.log(sumFibonacci(14) = 609 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89 + 144 + 233)
console.log(sumFibonacci(15) = 985 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89 + 144 + 233 + 377)
console.log(sumFibonacci(16) = 1596 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89 + 144 + 233 + 377 + 610)
console.log(sumFibonacci(17) = 2584 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89 + 144 + 233 + 377 + 610 + 987)
console.log(sumFibonacci(18) = 4180 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89 + 144 + 233 + 377 + 610 + 987 + 1597)
console.log(sumFibonacci(19) = 6765 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89 + 144 + 233 + 377 + 610 + 987 + 1597 + 2584)
console.log(sumFibonacci(20) = 10946 (0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 + 89 + 144 + 233 + 377 + 610 + 987 + 1597 + 2584 + 4181)
console.log(sumFibonacci(-1)); // 0
console.log(sumFibonacci('abc')); // 0

 По какой-то причине безупречная работа костылей ломается на n = 15
 ... А ещё на 17
 ... И на 19
 ... И даже на 20
*/
