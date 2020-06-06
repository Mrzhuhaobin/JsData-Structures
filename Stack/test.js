const Stack = require('./stack');
var goods = new Stack();
for (let i = 0; i < 101; i++) {
    goods.push(i)
}
// function showChange () {
//     console.log(goods.length(), goods.peak())
// }
// showChange()
// var a = goods.pop()
// showChange()
// console.log(a, goods.length())
// goods.clear()
// showChange()
// 进制转换 适用于基数2-9得情况
function mulBase (num, base) {
    var s = new Stack();
    do {
        s.push(num%base);
        num = Math.floor(num/base);
    } while (num > 0)
    var converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted
}
// console.log(mulBase(10,2))
// 判断回文
function judgeWords (word) {
    var s = new Stack();
    word = word.toString().split('')
    word.forEach(item => {
        s.push(item)
    })
    var str = '';
    while (s.length() > 0) {
        str += s.pop()
    }
    var desc = ''
    return desc = str === word.join('') ? '该内容为回文' : '该内容不是回文'
}
function judgeWords2 (word) {
    var wordInit = word.toString();
    var str = word.toString().split('').reverse().join('')
    return desc = str === wordInit ? '该内容为回文' : '该内容不是回文'
}
// console.log(judgeWords('dad'))
// console.log(judgeWords2('dad'))

// 阶乘
function factorial (val) {
    return val === 0 ? 1 : val * arguments.callee(val-1)
}
console.log(factorial('109'))
function factorial1 (val) {
    var s = new Stack();
    for( let i = 1; i <= parseInt(val); i++) {
        s.push(i)
    }
    var result = 1;
    while (s.length() > 0) {
        result *= s.pop()  
    }
    return result
}
console.log(factorial1('109'))