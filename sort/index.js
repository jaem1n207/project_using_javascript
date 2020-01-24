var newItem = document.createElement("li");

var items = [
  { name: "James", age: 21 },
  { name: "Amy", age: 26 },
  { name: "Crime", age: 19 },
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
    var textNode = document.createTextNode(items[i].name);
    this.newItem.appendChild(textNode);
    var myList = document.getElementById("itemList");
    myList.appendChild(this.newItem);

    /*
    var list = document.getElementById("itemList");
    list.insertBefore(newItem, list.childNodes[0]);
    */
  }
};

console.log(items);
