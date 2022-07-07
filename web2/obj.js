var person = {
  name: '张三',
  age: 18,
  sex: '男',
  children: [
    {
      name: '小张三',
      age: 3,
      sex: '男',
    },
    {
      name: '张美女',
      age: 1,
      sex: '女',
    },
  ],
  say(a) {
    return (
      '我叫' +
      this.name +
      ',今年' +
      this.age +
      '岁,已婚，' +
      this.children.length +
      '个孩子,目前资产是:' +
      this.money +
      a
    )
  },
  songwaimai: function () {
    this.money++
  },
  money: 10000,
  house: null,
}
console.log(person.say(666666666666))
// console.log('你女儿的年龄是：' + person.children[1].age)
// person.songwaimai()
// console.log(person.money)
// person.woman = '刘亦菲'
// console.log(person)
