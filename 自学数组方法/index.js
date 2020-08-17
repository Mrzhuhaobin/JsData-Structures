/***
 * num: Number
 * 判断num是否为素数
 */
function findSu (num, i = 2) {
    if (isNaN(Number(num))) return console.log('非数字')
    if (Math.abs(num) < 4) return true
    if (i === num) return true
    if (num % i) {
        i++
        return findSu(num, i)
    } else {
        return false
    }
}

function findSu1 (num) {
    if (isNaN(Number(num))) return false
    if (Math.abs(num) < 4) return true
    let i = 2
    while (i < num) {
        if (num % i) {
            return false
        } else {
            i++
        }
    }
    return true
}



// console.log(`该数字${findSu(191) ? '是' : '不是'}素数`)
/**
 * 实现sort/map/foreach/filter
 */
Array.prototype.sort1 = function (method) {
    method = method || function (val1, val2) {
        return val1 - val2
    }
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (method(this[j], this[j + 1]) > 0) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]]
            }
        }
    }
    return this
}
/**先实现一个冒泡排序
 * params arr Array Number
 * 返回排序后的数组
 */

function babelSort (arr) {
    var temp = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            temp = arr[j];
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
// console.log(babelSort([1,3,5,0,2,-1]))
// const arr = [9,2,4,10,-1]


// console.log(arr.sort1((num1, num2) => num2 - num1))

/**
 * map方法
 */
Array.prototype.map1 = function (fn) {
    fn = fn || function (item) { return item }
    const arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(fn(this[i], i, this))
    }
    return arr
}
const arr_test = [
    {id: 1, name: '张三'},
    {id: 2, name: '李四'},
    {id: 3, name: '王五'}
]
const arr_num = [1, 3, -1, 100, 2000]
// console.log(arr_test.map1((item, i) => {
//     item.id = i
//     return item
// }))

/**
 * foreach
 */
Array.prototype.forEach1 = function (fn) {
    fn = fn || function (item) { return item }
    const arr = [...this]
    for (let i = 0; i< arr.length; i++) {
        fn(arr[i], i, arr)
    }
}
// arr_test.forEach1((item, i) => {
//     item.id = i
//     item.name = ''
// })
// console.log('测试foreach', arr_test)

/**
 * filter
 */
Array.prototype.filter1 = function (fn) {
    fn = fn || function (item) { return item }
    const arr = []
    for (let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            arr.push(this[i])
        }
    }
    return arr
}
// console.log('filter', arr_num.filter1((item, i) => {
//     return item > i
// }))

/**
 * some
 */
Array.prototype.some1 = function (fn) {
    fn = fn || function (item) { return item }
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) return true
    }
    return false
}
// console.log('some', arr_num.some1(item => {
//     return item < 0
// }))

/**
 * every
 */
Array.prototype.every1 = function (fn) {
    fn = fn || function (item) { return item }
    for (let i = 0; i < this.length; i++) {
        if(!fn(this[i], i, this)) return false
    }
    return true
}
// console.log('every', arr_num.every1(item => {
//     return item > 1
// }))