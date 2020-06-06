const Queue = require('./Queue');
const fs = require('fs');
var q = new Queue();
var text = fs.readFileSync('./测试文本.txt', 'utf8');
// console.log(text.split('\n'))
var dataList = text.split('\n').map(item => {
    var str = item.trim()
    item = {
        sex: str.slice(0, 1),
        name: str.slice(1)
    }
    return item
})
// console.log(dataList)
function divide(type) {
    return dataList.filter(item => item.sex === type)
}
var manList = new Queue();
var womanList = new Queue();
divide('F').forEach(item => {
    manList.enqueue(item)
})
divide('M').forEach(item => {
    womanList.enqueue(item)
})
// console.log(manList, womanList)
dancer(manList, womanList)
function dancer (manList, womanList) {
    console.log('该组舞伴为：');
    while(!manList.empty() && !womanList.empty()) {
        var man = manList.dequeue()
        console.log(man.name + '的舞伴是');
        var woman = womanList.dequeue()
        console.log(woman.name)
    }
}

