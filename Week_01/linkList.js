let Node = function (element) {
  this.element = element;
  this.next = null;
}
class linkList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  // 向链表添加元素
  append(element) {
    let node = new Node(element)
    if (this.head == null) {
      this.head = node
    } else {
      let current = this.getElementAt(this.length - 1);
      current.next = node
    }
    this.length++;
  }
  // 向指定位置添加元素
  insert(position, element) {
    if (position < 0 || position >= this.length) {
      return null
    }
    let node = new Node(element)
    let current = this.getElementAt(position)
    console.log('数据-========>',current)
    // current.next = node

  }
  // 删除链表中指定位置的元素，并返回这个元素的值
  removeAt(position) {
    
  }
  // 删除链表中对应的元素
  remove(element) {
    
  }
  // 返回指定元素的索引
  indexOf(element) {
    
  }
  // 获取指定位置的链表元素
  getElementAt(position) {
    if (position < 0 || position >= this.length) {
      return null
    }
    let current = this.head
    for (let i = 0; i < position; i++){
      current = current.next
    }
    return current
  }
  // 链表是否为空
  isEmpty() {
    
  }
  // 清空链表
  clear() {
    
  }
  // 链表长度
  size() {
    
  }
  toString() {
    let list = []
    for (let x = 0; x < this.length; x++){
      list.push(this.getElementAt(x))
    }
    return list.toString()
  }
  // 打印链表
  logAll() {
    console.log(this.getElementAt(0))
  }
}


let newLinkList = new linkList()
newLinkList.append(1)
newLinkList.append(2)
newLinkList.append(3)
newLinkList.logAll()
