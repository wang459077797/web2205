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
var str = `vajkshd[123]1jaka      sd      h[]xAz
[321]
bc撒[aaa]旦 3`
var str1 = `abc def as dsa null`
var reg = /\[(\w)*\]/gi

// var res = reg.exec(str) //返回查找字符的下标
// var res = reg.test(str) //返回true或false

// var res = str.replace(reg, '*')
// var res = str.search(reg) //返回查找字符的下标
// var res = str.match(reg) //	找到一个或多个正则表达式的匹配
var res = str1.split(/\s/)
console.log(res)
//匹配身份证号正则
var reg = //
