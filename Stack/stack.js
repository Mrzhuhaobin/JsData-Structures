function Stack () {
// 栈，特点：后入先出
    this.dataStore = []; //栈内元素
    this.top = 0; // 栈顶位置,即数组长度
    this.push = push; //往栈内添加元素
    this.pop = pop; // 返回栈顶元素，同时top-1,即删除栈顶元素
    this.peak = peak; // 返回栈顶元素
    this.clear = clear; //清空栈
    this.length = length; // 栈内元素个数

    // 方法
    function push (val) {
        this.dataStore[this.top++] = val; 
    }
    function pop () {
        return this.dataStore[--this.top]
    }
    function peak () {
        return this.dataStore[this.top - 1]
    }
    function length () {
        return this.top
    }
    function clear () {
        this.top = 0
    }
}
module.exports = Stack;