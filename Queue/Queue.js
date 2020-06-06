function Queue () {
// 队列，先进先出
    this.dataStore = [];
    this.enqueue = enqueue; //向队尾添加元素
    this.dequeue = dequeue; // 删除队首元素
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    // 方法
    // 往队尾添加元素
    function enqueue (element) {
        this.dataStore.push(element)
    }
    // 移除队首元素
    function dequeue () {
        return this.dataStore.shift()
    }
    function front () {
        return this.dataStore[0]
    }
    function back () {
        return this.dataStore[this.dataStore.length - 1]
    }
    function toString () {
        var str = '';
        this.dataStore.forEach(item => {
            str += item
        })
        return str
    }
    function empty () {
        return this.dataStore.length === 0
    }
}
module.exports = Queue