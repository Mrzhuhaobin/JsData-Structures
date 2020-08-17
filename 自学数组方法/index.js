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



// console.log(`该数字${findSu(1) ? '是' : '不是'}素数`)
/**
 * 实现sort/map/foreach/filter
 */
Array.prototype.sort1 = function (method) {
    const fn = method || function (val1, val2) {
        return val1 - val2
    }
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (fn(this[j], this[j + 1]) > 0) {
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
const arr = [9,2,4,10,-1]


console.log(arr.sort1((num1, num2) => num2 - num1))