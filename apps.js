/*
    About this project: 
    Developer: Shayan Mahmoudi
    Date start: 12/25/2023
    Date end: 12/26/2023
    Teacher: mr.khateri
    E-mail: unkshayan@gmail.com
    GitHub ID: shayanUNK
*/
// create a function for give a numbers and operation 
function calculator(num1, operation, num2) {
// If user put a plus sign, it adds the two numbers together
if (operation === "+") {
    console.log(num1 + num2);
// If we put a minus sign, it will subtract the two numbers
  } else if (operation === "-") {
    console.log(num1 - num2);
// If we put a division sign, it divides two numbers
  } else if (operation === "/") {
    console.log(num1 / num2);
  } else if (operation === "%") {
    console.log(num1 % num2);
  } else if (operation === "*") {
    console.log(num1 * num2);
  }
}
calculator(
  Number(prompt("enter second number")),
  prompt("enter ope10"),
  Number(prompt("enter first number"))
);

console.clear();
console.log(2 ** 4);
