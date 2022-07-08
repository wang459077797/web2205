// \ 反斜杠 代表转义
//g -- 全局匹配
//i -- 忽略大小写
//m -- 多行匹配

// []  -- 匹配括号中的任意字符
// . -- 匹配除换行符外的任意字符
// \w 数字字母下划线 \W 非数字字母下划线
// \d 0-9  \D 非数字
// \s 空白字符 \S 非空白字符
// \b 单词边界 \B 非单词边界
// \n 换行符 \t 制表符 \r 回车符

// + -- 前面的字符至少出现一次
// * -- 前面的字符出现0次或多次
// ? -- 前面的字符出现0次或1次
// {n} -- 前面的字符出现n次
// {n,m} -- 前面的字符出现n到m次
// {n,} -- 前面的字符出现n次或多次
// ^ 开始 $结束
// (?=n) 后边紧跟着的字符
// (?!n) 后边紧跟着的字符不是n
// var str = `vajkshd[123]1jaka      sd      h[]xAz
// [321]
// bc撒[aaa]旦 3`
// var str1 = `abc def as dsa null`
// var reg = /\[(\w)*\]/gi

// var res = reg.exec(str) //返回查找字符的下标
// var res = reg.test(str) //返回true或false

// var res = str.replace(reg, '*')
// var res = str.search(reg) //返回查找字符的下标
// var res = str.match(reg) //	找到一个或多个正则表达式的匹配
// var res = str1.split(/\s/)
// console.log(res)
//匹配身份证号正则
// var reg = //
// var str = '高高兴兴'
// console.log(/^([\u4e00-\u9fa5]{1})\1([\u4e00-\u9fa5]{1})\2$/g.test(str))
// 高高兴兴

//把 "Doe, John" 转换为 "John Doe" 的形式：
// var str = 'abcasd , yun'
// var res = str.replace(/(\w+)\s*,\s*(\w+)/, '$2 ,$1')
// console.log(res)
//说明：$1,$2上就是按顺序对应小括号里面的小正则 捕获到的内容。

var reg = /foo/g
console.log(/foo/g.test('foo'))
console.log(/foo/g.test('foo'))
console.log(/foo/g.test('foo'))
console.log(/foo/g.test('foo'))
// console.log(reg.test('foo')) //true
// console.log(reg.test('foo')) //false
// console.log(reg.test('foo')) //true
// console.log(reg.test('foo')) //false
// console.log(reg.test('foo')) //true

// 原因： 正则表达式使用了g全局匹配， 当1执行的时候是从下标0开始 检索对应的字符串foo,检索到返回true,因为foo长度为3所以最后检索位置停留在了下标为3，也叫做lastindex
// 		  当2执行的时候检索位置 是从上次停留的位置lastindex 也就是3开始所以检索不到返回false，当检索返回false时lastindex的下标会重置为0，从0检索肯定可以找到foo所
// 		  以第三次执行的时候是true
// 解决办法： 1.可以把修饰符 g 去掉
// 2. 可以每次使用不同的正则对象例如
//     /foo/g.test("foo") //true
//     /foo/g.test("foo") //true
