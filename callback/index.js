// Get p tag with id result
var result = document.getElementById("result");

var s = document.getElementById("optionSymbol");
optionSymbol = s.options[s.selectedIndex].value;
var input1, input2;

function changeSelect() {
  // get value in select
  var s = document.getElementById("optionSymbol");
  optionSymbol = s.options[s.selectedIndex].value;
}

function value1Change() {
  // get value entered in input
  input1 = document.getElementById("getValue1").value;
}

function value2Change() {
  // get value entered in input
  input2 = document.getElementById("getValue2").value;
}

function calc() {
  var int_number1 = Number(input1);
  var int_number2 = Number(input2);
  switch (optionSymbol) {
    case "+":
      result.innerText = eval(int_number1 + int_number2);
      break;
    case "-":
      result.innerText = eval(int_number1 - int_number2);
      break;
    case "*":
      result.innerText = eval(int_number1 * int_number2);
      break;
    case "/":
      result.innerText = eval(int_number1 / int_number2);
      break;

    default:
      result.innerText = "잘못된 입력입니다.";
      break;
  }
}

/*
function calc(option, num1, num2, callback) {
  var result = "";

  switch (option) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "올바른 연산자를 입력하세요.";
  }

  callback(num1, num2, result);
}

function println1(num1, num2, result) {
  document.write(
    "첫 번째 수: " +
      num1 +
      " 두 번째 수: " +
      num2 +
      "이고 " +
      "두 수의 합은 = " +
      result +
      "입니다.",
    "<br>"
  );
}

function println2(num1, num2, result) {
  document.write(
    "첫 번째 수: " +
      num1 +
      " 두 번째 수: " +
      num2 +
      "이고 " +
      "두 수의 곱은 = " +
      result +
      "입니다.",
    "<br>"
  );
}

calc("+", 10, 20, println1);
calc("*", 10, 20, println2);
*/
