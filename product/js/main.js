//スティッキーヘッダー

let p = document.getElementById('first');
console.log(p.className);
// => 'class1'

p.className = 'class2';
console.log(p.className);
// => 'class2'

p.className += ' class3';
console.log(p.className);
// => 'class2 class3'
p.classList.add('class4');
console.log(p.className);
// => 'class2 class3 class4'

p.classList.remove('class3');
console.log(p.className);
// => 'class2 class4'

p.classList.replace('class2', 'class1');
console.log(p.className);
// => 'class1 class4'
