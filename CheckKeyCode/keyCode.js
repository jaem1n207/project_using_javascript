document.getElementById("input").focus();

function checkKeyCode(e) {
  var keycode = e.keyCode;

  document.getElementById("onkeydown_keycode").innerText = keycode;
}
