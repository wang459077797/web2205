var a = ["Banana", "Orange", "Apple", "Mango","Apple"];
var b =[2,34,1,4123,4]
// console.log(fruits.reverse());//反转数组
// console.log(fruits.shift()) //删除第一元素 并返回删除的元素 ，原数组会改变
// console.log(fruits)

// var citrus = fruits.slice(1,2); //数组截取 参数1 开始位置 参数2结束位置 但不包含结束下标元素
// console.log(citrus);
// b.sort()
// console.log(b) 

// a.splice(2,2,"Lemon","putao",'菠萝'); //插入元素 参数1 插入位置 参数2 删除个数 参数3，4,5,6，.... 插入的元素
a.unshift("Lemon","Pineapple");
console.log(a);