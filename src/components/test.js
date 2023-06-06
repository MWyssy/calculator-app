const number = "10 - 3 - 3 / 4 * 6";

const calculate = number.split(/\s*(?=[+\-/*=])\s*/);

console.log(calculate.join(" "));

function maths(array) {
  let num1 = Number(array[0]);
  let result = 0;
  const bodmas = array.sort((a, b) => {
    const order = { "/": 1, "*": 2, "+": 3, "-": 4 };
    const operatorA = a.trim().charAt(0);
    const operatorB = b.trim().charAt(0);

    return order[operatorA] - order[operatorB];
  });

  console.log(bodmas);

  for (let i = 1; i < bodmas.length; i++) {
    const mathsArray = bodmas[i].split(" ");
    const operator = mathsArray[0];
    const num2 = Number(mathsArray[1]);

    result =
      operator === "+"
        ? num1 + num2
        : operator === "-"
        ? num1 - num2
        : operator === "/"
        ? num1 / num2
        : num1 * num2;
    console.log(num1, operator, num2, "=", result);
    num1 = result;
  }
  return result;
}

console.log(maths(calculate));
