// 1) Фабрика функций.
// Реализовать функцию, которая основываясь на единственном аргументе
// (который может бьть равен: ‘sum’, ‘mult’, ‘div’) возвращает одну из функций,
// каждая из которых принимает 2 числа и выполняет соответственно их сложение, умножение, или деление.


/**
 *
 * @param arg
 * @param a
 * @param b
 * @return {*}
 */
function doSmth(arg, a, b){
  switch (arg) {
    case getSum(): return getSum();
    case getMult(): return getMult();
    case getDiv(): return getDiv();
    default: console.log('arg is not a function');
  }
}

/**
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

