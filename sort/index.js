var items = [
  { name: "James", age: 21 },
  { name: "Amy", age: 26 },
  { name: "John", age: 19 },
  { name: "Amy", age: 20 }
];

// age 기준으로 정렬
items.sort(function(a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    // a must be equal to b
    return 0;
  }
});

// name 기준으로 정렬
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA > nameB) {
    return 1;
  } else if (nameA < nameB) {
    return -1;
  } else {
    return 0;
  }
});

window.onload = function() {
  for (var i = 0; i < items.length; i++) {
    var li = document.createElement("li"); // li태그 생성
    var ul = document.getElementById("itemList"); // ul 가져오기
    var textNode = document.createTextNode(items[i].name); //items의 인덱스 별 이름 가져오기
    li.appendChild(textNode);
    ul.appendChild(li);
  }
};

console.log(items);
