function List() {
    this.listSize = 0;//列表的元素个数
    this.pos = 0;//列表的当前位置
    this.length = length; //返回列表中元素的个数
    this.dataStore = [];//初始化一个空素组
    this.clear = clear;//清空数组的方法
    this.find = find;//查找指定元素
    this.insert = insert; //插入元素的方法
    this.toString = toString;//返回列表的字符串形式
    this.append = append;//在现有元素后插入新元素
    this.remove = remove;//查找指定元素
    this.front =front;//将列表的当前位置移动到第一个元素
    this.end = end;//将列表的当前位置移动到最后一个元素
    this.next= next;//将当前位置往前移动一位
    this.prev = prev;//降当前位置往后移动一位
    this.hasNext = hasNext;//判断后一位
    this.hasPrev = hasPrev;//判断前一位
    this.currPos = currPos;//返回列表的当前位置
    this.moveTo= moveTo;//将当前位置移动弄到指定位置
    this.getElement = getElement;//返回当前元素
    this.contains = contains;//判断是否包含指定元素

    function append () {
        [].forEach.call(arguments,item=>{
            this.dataStore[this.listSize++] = item
        })
    }

    function remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            // this.dataStore.splice(foundAt,1);
            for(let i = foundAt; i < this.listSize-1; i++ ){
                this.dataStore[i] = this.dataStore[i+1]
            }
            --this.listSize;
            --this.dataStore.length;
            return true
        }
        return false
    }
    function find(element) {
        var result = -1;
        this.dataStore.forEach((item,i)=>{
            if (item === element) result = i;
        })
        return result
    }
    function length() {
        return this.listSize
    }
    function toString() {
        return this.dataStore.join()
    }
    function clear() {
        this.dataStore.length = 0;
        this.listSize = this.pos = 0;
    }
    function insert(element,after) {
        var insertPos = this.find(after);
            // this.dataStore.splice(insertPos, 0 , element);
            // this.dataStore[insertPos] = element;
        if (insertPos === -1) return false;
        for(let i = this.listSize; i >= insertPos; i--){
            this.dataStore[i] = (i===insertPos) ? element : this.dataStore[i-1]
        }
        this.listSize++;
        return true
    }
    function contains(element) {
        return this.dataStore.some(item=>{
            return item === element
        })
    }
    function front() {
        this.pos = 0
    }
    function end(){
        this.pos = this.listSize-1
    }
    function prev(){
        --this.pos
    }
    function next(){
        let pos = this.pos
        this.pos= pos < this.listSize ? ++pos : pos
    }
    function currPos(){
        return this.pos
    }
    function moveTo(position){
        this.pos = position
    }
    function getElement(){
        return this.dataStore[this.pos]
    }
    function hasNext(){
        return this.pos < this.listSize
    }
    function hasPrev(){
        return this.pos >= 0
    }
}
module.exports = List;