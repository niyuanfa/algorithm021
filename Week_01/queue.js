class Queue {
  constructor() {
    let items = []
    // 添加队列元素
    this.enqueue = function (element) {
      if (element instanceof Array) {
        items.concat(element)
      } else {
        items.push(element)
      }
    }
    // 删除队列元素
    this.dequeue = function () {
      items.shift()
    }
    // 队列是否为空
    this.isEmpty = function () {
      return items.length == 0
    }
    // 返回队列首个元素
    this.front = function () {
      return items[0]
    }
    // 返回队列长度
    this.size = function () {
      return items.length
    }
    // 清空队列
    this.clear = function () {
      items = []
    }

    // 打印队列所有元素
    this.logAll = function () {
      console.log(items)
      return items
    }
  }
}

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
console.log(queue.front())
queue.logAll()