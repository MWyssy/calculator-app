const input = "5 -";

const arr = input.match(/[\-+x÷](?=\D*$)/g);

console.log(arr.length > 2);

const number = "25";
const calculation = [
  {
    calc: "5 x 5",
    total: "= 25",
  },
];
const calc = calculation[calculation.length - 1];
console.log(
  "test: ",
  `${number}${calc.calc.replace(/-?\d*\.?\d+/, "")}`
    .split("")
    .map((char) => {
      return char === "x" ? "*" : char === "÷" ? "/" : char;
    })
    .join("")
);
