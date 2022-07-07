//计算器
function fun(num1 = 0, num2 = 0, str = '+') {
  switch (str) {
    case '+':
      return +num1 + +num2
    case '-':
      return +num1 - +num2
    case '*':
      return +num1 * +num2
    case '/':
      return +num1 / +num2
    default:
      return +num1 + +num2
  }
}
var res = fun(10, 13, '*')
// console.log(res)

// 2.实现数组去重
//   例如：传入 ['a','b','c','a','b','c']
//   返回： ['a','b','c']
function unique(arr) {
  //循环数组 判断  indexOf 是否-1 如果是-1代表没有重复的值
  var res = [] //存放结果
  arr.map(function (val) {
    if (res.indexOf(val) == -1) {
      res.push(val)
    }
  })
  return res
}
var arr = ['a', 'b', 'c', 'a', 'b', 'c']
var res = unique(arr)
// console.log(res)
// 3. 实现字符串去除空白字符
// 例如：传入
//     var str = " 张  三 你   好 啊 "
//     结果： str = "张三你好啊"

function trimStr(str) {
  var res = ''
  for (var i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      res += str[i]
    }
  }
  return res
}
// var res = trimStr(' 张  三 你   好 啊 ')
var res = trimStr(' 张三  1 2  你 a   好 啊 ')

// console.log(res)

// 4.实现将字符串每个单词首字母大写
// 例如：传入
//   var str = "hello world"
//   返回："Hello World"

// var str = 'hello world'
// var str = 'hello,world'
// var str = 'hello world'
// // var str = 'hello,world'
// function strFirstToupcase(str, s) {
//   var res = str.split(s)
//   //   console.log(res)
//   var arr = res.map(function (val) {
//     return val.replace(val[0], val[0].toUpperCase())
//   })
//   return arr.join(s)
// }
// console.log(strFirstToupcase(str, ' '))

// //5.实现将数组的顺序随机打乱
// var arr = ['a', 'b', 'c', 'd', 'e']
// function randomArr(arr) {
//   //随机数
//   var res = [] //存放结果
//   while (arr.length > 0) {
//     var n = Math.floor(Math.random() * arr.length) // *5 = 0-4  *4 = 0-3
//     res = res.concat(arr.splice(3, 1))
//   }
//   console.log(res)
// }
// randomArr(arr)

// 7.实现找到最接近 0 的数字
// 例如：
//   输入：nums = [-4,-1,2,4,8]
//   输出：1
function findNear(nums) {
  var res = nums[0]
  for (var i = 0; i < nums.length; i++) {
    if (Math.abs(0 - nums[i]) < Math.abs(0 - res)) {
      res = nums[i]
    }
  }
  return res
}
var nums = [-4, -2, -1.1, 2, 4, 8]
var res = findNear(nums)
console.log(res)
