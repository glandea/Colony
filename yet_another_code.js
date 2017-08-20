// 1) Фабрика функций.
// Реализовать функцию, которая основываясь на единственном аргументе
// (который может бьть равен: ‘sum’, ‘mult’, ‘div’) возвращает одну из функций,
// каждая из которых принимает 2 числа и выполняет соответственно их сложение, умножение, или деление.



/**
 * Return math function
 *
 * @param arg
 * @return {number}
 */
function doSmth(arg, a, b){
  if (typeof arg === 'string' && typeof(a) === 'number' && typeof(b) === 'number') {
      switch (arg) {
          case 'getSum': return getSum();
          break;
          case 'getMult': return getMult();
          break;
          case 'getDiv': return getDiv();
          default: console.log('arg is not a function');
    }
  }
}

/**
 * Return sum
 *
 * @param a {number}
 * @param b {number}
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
 * @param a {number}
 * @param b {number}
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
 * @param a {number}
 * @param b {number}
 *  :3
 * @return {number}
 */
function getDiv(a, b) {
  if (typeof(a) === "number" && typeof(b) === "number") {
    return (a / b);
  }
  return('a or b is not a number');
}









