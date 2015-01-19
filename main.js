// 1
var item1 = [];
for (var i = 0; i < 6; i++) {
  item1.push(i*100);
}
console.log(item1);

// 2
var item2 = [];
for (var i = 0; i < 7; i++) {
  item2.push(item2[i-1] * 2 || 1);
}
console.log(item2);

// 3
var item3 = [];
for (var i = 1; i < 4; i++) {
  for (var j = 0; j < 3; j++) {
    item3.push(i);
  }
}
console.log(item3);

// 4
var item4 = [];
for (var i = 0; i < 6; i++) {
  item4.push(i*2);
}
console.log(item4);

// 5
var item5 = [];
for (var i = 1; i < 6; i++) {
  item5.push(i*3);
}
console.log(item5);

// 6
var item6 = [];
for (var i = 9; i >= 0; i--) {
  item6.push(i);
}
console.log(item6);

// 7
var item7 = [];
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 4; j++) {
    item7.push(j);
  }
}
console.log(item7);
