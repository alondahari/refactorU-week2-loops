var ol = document.getElementById('answers');
var li = [];
var items = [];
for (var i = 0; i < 7; i++) {
  li.push(document.createElement('li'));
  ol.appendChild(li[i]);
  items.push([]);
}

// 1
for (var i = 0; i < 6; i++) {
  items[0].push(i*100);
}

// 2
for (var i = 0; i < 7; i++) {
  items[1].push(items[1][i-1] * 2 || 1);
}

// 3
for (var i = 1; i < 4; i++) {
  for (var j = 0; j < 3; j++) {
    items[2].push(i);
  }
}

// 4
for (var i = 0; i < 6; i++) {
  items[3].push(i*2);
}

// 5
for (var i = 1; i < 6; i++) {
  items[4].push(i*3);
}

// 6
for (var i = 9; i >= 0; i--) {
  items[5].push(i);
}

// 7
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 4; j++) {
    items[6].push(j);
  }
}

// display answers
for (var i = 0; i < 7; i++) {
  li[i].textContent = items[i].join(' ');
}
