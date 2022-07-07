// var a = ["Banana", "Orange", "Apple", "Mango","Apple"];
// var b =[2,34,1,4123,4]
// console.log(fruits.reverse());//反转数组
// console.log(fruits.shift()) //删除第一元素 并返回删除的元素 ，原数组会改变
// console.log(fruits)

// var citrus = fruits.slice(1,2); //数组截取 参数1 开始位置 参数2结束位置 但不包含结束下标元素
// console.log(citrus);
// b.sort()
// console.log(b)

// a.splice(2,2,"Lemon","putao",'菠萝'); //插入元素 参数1 插入位置 参数2 删除个数 参数3，4,5,6，.... 插入的元素
// a.unshift("Lemon","Pineapple");
// console.log(a);

// function fun(){

// }
// ages.every(fun)
// ages.every(function(param){
//     console.log(param)
//     // return a>=18
// })
// console.log(arr)
// var ages = [32, 33, 16, 40];
//找到数组中第一个符合条件的值
// var res = ages.find(function(v){
//     console.log(v)
//     return v>=18
// })
// console.log(res)
//数组过滤 判断符合条件的值 返回true代表保留 返回false代表去掉
// var arr = ages.filter(function(param,index,arr){
//     // console.log(param,index,arr)
//      return param>=18
// })
// console.log(arr)

//  var arr = [1,2,3,4,5,6,4,8,9,10]
//  var res = arr.findIndex(function(v){
//     return v==4 //true
//   })
//   arr.forEach(function(v){
//     console.log(v)
//   })
//  console.log(res)

//  var obj = {
//     name:'张三',
//     age:18,
//  }
//  var arr = Array.from(['数学','语文','英语'],function(v){
//     console.log(v)
//     return v+'课'
//  })
//  console.log(arr);

//  var res = ['数学','语文','英语'].map(function(v){
//     console.log(v)
//     return v+'课'
//  })
//  console.log(res);

//  var numbers = [1,2,3,4,5];
//  var res = numbers.reduce(function(tmp,v){
//     console.log(tmp)
//     return tmp-v
//  })
//  console.log(res);

//  function maxSum(arr){
//     //代码
//     var sum = 0,newarr=[];
//     for(var i=0;i<arr.length;i++){
//         for(var j=0;j<arr[i].length;j++){
//             sum += arr[i][j]
//         }
//         newarr.push(sum)
//     }
//     for(var i=0;i<newarr.length;i++){
//         for(var j=i+1;j<newarr.length;j++){
//             if(newarr[i]<newarr[j]){
//                 var temp = newarr[i]
//                 newarr[i] = newarr[j]
//                 newarr[j] = temp
//             }
//         }
//     }
//     return newarr[0]
//  }
//  var arr = [[1,23,3],[3,2,11,2],[1,2,3,4,53],[1,2,3,42,5]]
//  var res = maxSum(arr)
//  console.log(res);

// var arr = ["zhangsan","lisi","wangwu","lisi","zhaoliu"]
//先分析数据值是什么  在分析数据类型
//看到 单引号和双引号 或 反引号 就是字符串
//判断 数组内的名字是否小于5 小于5就是不符合的数组
// var res = arr.every(function(name){
//     return name.length>5
// })
// console.log(res);

// var res = arr.map(function(val,index,arr){
//每次循环的值
// 下标
// var nextVal = arr[index+1]
// if(nextVal=='lisi'){
//     return true
// }else{
//     return false
// }
//     if(val!='lisi'){
//         return val+"❀"
//     }else{
//         return val
//     }
// })

// console.log(res);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i],i)
// }

// //冒泡排序
var arr = [7, 3, 4, 5, 6, 2, 1]
for (var i = 0; i < arr.length; i++) {
  console.log(arr)
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      var temp = arr[i] //temp = 7
      arr[i] = arr[j] //arr[i] = 3
      arr[j] = temp //arr[j] = 7
    }
  }
}
