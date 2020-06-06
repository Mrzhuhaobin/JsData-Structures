const List = require('./List');
var goods = new List();
goods.append('a','b','c','d','e');
// goods.insert('0','a')
// goods.front()
// goods.next()
// goods.next()
// goods.prev()
// console.log(goods.getElement());
goods.remove('a');
goods.insert('张三','b');
for(goods.front();goods.hasNext();goods.next()){
    console.log(goods.getElement())
}
for(goods.end();goods.hasPrev();goods.prev()){
    console.log(goods.getElement())
}
console.log('\n'+goods.toString())

