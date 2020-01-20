var numberClicked = false; // 숫자이면 true, 연산자이면 false

/* 
  input.value에 내가 누른 버튼의 숫자나 기호를 추가하는 함수
*/
function add(char) {
  var display = document.getElementById("display");
  if (numberClicked == false) {
    // 이전에 연산자를 입력했다면,
    if (isNaN(char) == true) {
      // 입력 받은 값이 연산자라면,
      // 아무것도 하지 않음.
    } else {
      // 연산자가 아니라면,
      display.value += char;
    }
  } else {
    // 이전에 숫자를 입력했다면,
    display.value += char;
  }

  if (isNaN(char) == true) {
    // 연산자를 눌렀다면,
    numberClicked = false;
  } else {
    numberClicked = true;
  }
}

function enter(e) {
  if (e.keyCode == 13) {
    // Enter 시 계산
    calculate();
  } else if (48 <= e.keyCode && e.keyCode <= 57) {
    // 0~9 ASCII code
    num = e.keyCode - 48;
    add(num);
  } else if (
    e.keyCode == 187 ||
    e.keyCode == 189 ||
    e.keyCode == 191 ||
    e.keyCode == 56
  ) {
    switch (e.keyCode) {
      case 187:
        add("+");
        break;
      case 189:
        add("-");
        break;
      case 56:
        add("*");
        break;
      case 191:
        val("/");
        break;
    }
  } else if (e.keyCode == 8) {
    // backspace 누를 시 함수 실행
    backSpace();
  } else if (e.keyCode == 116 || e.keyCode == 16) {
    return;
  } else if (e.keyCode == 17) {
    // ctrl 누를 시 초기화
    document.getElementById("display").value = "";
    document.getElementById("result").value = "";
  } else {
    alert("숫자 또는 연산자를 입력하세요!");
  }
}

function backSpace() {
  var display = document.getElementById("display");
  display.value = display.value.substring(0, display.value.length - 1);
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
