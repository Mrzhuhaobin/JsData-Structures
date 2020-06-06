function curry (fn) {
    // var args = Array.prototype.slice.call(arguments, 1);
    var args = [].__proto__.slice.call(arguments, 1)
    console.log('args', args)
    return function () {
        // var innerArgs = Array.prototype.slice.call(arguments);
        var innerArgs = Array.from(arguments);
        var finalArgs = args.concat(innerArgs);
        console.log('finalArgs', finalArgs)
        return fn.apply(null, finalArgs) // apply函数参数1为修改的this指向，参数二可以是一个数组
        // return fn.call(null, ...finalArgs)
    }
}
function add () {
    return Array.prototype.reduce.call(arguments, (total, item) => total += item)
    // var sum = 0;
    // Array.prototype.forEach.call(arguments, item => {
    //     sum += item
    // })
    // return sum
}
var test = curry(add, 5, 1, 7, 8)
console.log(test(100))
// var obj = {
//     1: 'a',
//     2: 'b',
//     3: 'c',
// }
// // var arr = Array.prototype.slice.call(obj);
// var arr = [];
// for (let key in obj) {
//     arr.push(obj[key])
// }
// console.log(arr)
// function showNum () {
// }
// console.dir([])