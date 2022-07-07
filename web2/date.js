// var dateObj = new Date(1033434754000)
// console.log(dateObj.getFullYear())
// console.log(dateObj.getMonth() + 1)
// console.log(dateObj.getDate()) //日期是几号);
// console.log(dateObj.getDay()) //星期4
// console.log(dateObj.getHours()) //时间是几点
// console.log(dateObj.getMinutes()) //分钟是几分
// console.log(dateObj.getSeconds()) //秒是几秒
// console.log(dateObj.getMilliseconds()) //毫秒是几毫秒
// console.log(dateObj.getTime()) //时间戳
//计算你出生了多少天
function getDays(n) {
  var now = new Date() //当前时间
  var birth = new Date(n) //
  var s = now.getTime() - birth.getTime() //计算时间差
  console.log(s)
  var days = s / 1000 / 60 / 60 / 24
  //   console.log(Math.ceil(days))
  return Math.ceil(days)
}
var res = getDays('2005-11-20')
console.log(res)
