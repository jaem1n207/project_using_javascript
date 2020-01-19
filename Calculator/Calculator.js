/* 
  input.value에 내가 누른 버튼의 숫자나 기호를 추가하는 함수
*/
function add(char) {
  var display = document.getElementById("display");
  if (char === "=") {
    document.getElementById("result").value += char;
  } else {
    display.value += char;
  }
}

/* 
  input태그에서 식을 받아 계산하는 함수
*/
function calculate() {
  var display = document.getElementById("display");
  var result = eval(display.value);
  document.getElementById("result").value = result;
}

/* 
  값 모두 초기화하는 함수
*/
function reset() {
  document.getElementById("display").value = "";
  document.getElementById("result").value = "";
}
