/* 
  이전에 가지고 있던 값 삭제
*/
clear = function() {
  var eventTypes = ["onkeydown", "onkeyup", "onkeypress"];
  var codeTypes = ["keycode"];
  for (var event = 0; event < eventTypes.length; event++) {
    for (var code = 0; code < codeTypes.length; code++) {
      var element = document.getElementById(
        eventTypes[event] + "_" + codeTypes[code]
      );
      while (element.firstChild != null) {
        element.removeChild(element.firstChild);
      }
    }
  }
};

processKeyEvent = function(eventType, event) {
  if (window.event) {
    event = window.event;
  }

  var element = document.getElementById(eventType + "_keycode");
  var text = document.createTextNode("'" + event.keyCode + "'"); // table data에 keycode 표시
  element.appendChild(text);
};

processKeyDown = function(e) {
  clear();
  processKeyEvent("onkeydown", e);
};

processKeyUp = function(e) {
  processKeyEvent("onkeyup", e);
};

processKeyPress = function(e) {
  processKeyEvent("onkeypress", e);
};
