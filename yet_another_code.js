// 1) Фабрика функций.
// Реализовать функцию, которая основываясь на единственном аргументе
// (который может бьть равен: ‘sum’, ‘mult’, ‘div’) возвращает одну из функций,
// каждая из которых принимает 2 числа и выполняет соответственно их сложение, умножение, или деление.


/**
 * Return math function
 *
 * @param arg
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
function doSmth(arg, a, b){
  if (typeof arg === 'string' || typeof(a) === 'number' || typeof(b) === 'number') {
      switch (arg, a, b) {
      case getSum(): return getSum();
      case getMult(): return getMult();
      case getDiv(): return getDiv();
      break;
      default: console.log('arg is not a function');
    }
  }
}

/**
 * Return sum
 *
 * @param a
 * @param b
 * @return {number}
 */
function getSum(a, b) {
  if (typeof(a) === "number" && typeof(b) === "number"){
    return (a + b);
  }
  return('a or b is not a number');
}


/**
 * Return mult
 *
 * @param a
 * @param b
 * @return {number}
 */
function getMult(a, b) {
  if (typeof(a) === "number" && typeof(b) === "number") {
     return (a * b);
  }
  return('a or b is not a number');
}

/**
 * Return div
 *
 * @param a
 * @param b
 * @return {number}
 */
function getDiv(a, b) {
  if (typeof(a) === "number" && typeof(b) === "number") {
    return (a / b);
  }
  return('a or b is not a number');
}


alert(getDiv(2, 3));
alert(doSmth(getDiv(2, 3)));
