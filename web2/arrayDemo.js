//求数组下面数组中哪个数组的总和最大
// var arr = [[1,5],[7,3],[3,5]],
// newarr = []
// //8
// for(var i=0;i<arr.length;i++){
//     var sum = 0;
//     for(var j=0;j<arr[i].length;j++){
//         sum += arr[i][j]
//     }
//     newarr.push(sum)
// }
// console.log(newarr);
// var newarr = [ 6, 10, 8 ];
// for(var i=0;i<newarr.length;i++){
//     for(var j=i+1;j<newarr.length;j++){
//         console.log(newarr[i],newarr[j]);
//         if(newarr[i]<newarr[j]){
//             var temp = newarr[i]
//             newarr[i] = newarr[j] //8->6
//             newarr[j] = temp
//         }
//     }
// }

// console.log(newarr);

//冒泡排序
// var arr = [1,3,6,2,3,4]
// arr.sort()
// console.log(arr[arr.length-1]);
//  for(var i=0;i<arr.length;i++){ // 循环4次
//     // console.log(arr[i]) //1 2 3 4
//     for(var j=i+1;j<arr.length;j++){ // 循环4次
//         if(arr[i]<arr[j]){
//             var tmp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tmp
//         }
//     }
//  }
//  console.log(arr);
// 2.  句子中的最多单词数
// 输入：arr = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// 输出：6
// 解释：
// - 第一个句子 "alice and bob love leetcode" 总共有 5 个单词。
// - 第二个句子 "i think so too" 总共有 4 个单词。
// - 第三个句子 "this is great thanks very much" 总共有 6 个单词。
// 所以，单个句子中有最多单词数的是第三个句子，总共有 6 个单词。

// var arr = [" alice and   bob   love   leetcode ", " i think so too    ","ashg  jh 132 qwe ioi   qq      qwe", "this is great thanks very much"];
// var result = []
// for(var i=0;i<arr.length;i++){
//         var res = arr[i].split(" "); //按空格分割
//         var count = 0
//         for(var j=0;j<res.length;j++){
//             if(res[j]){
//                 count++
//             }
//         }
//         result.push(count)
// }
// console.log(result);

// 3. 求和
// 输入：nums = [1,2,5,3,4]
// 输出：[1,3,6,10]
// 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。

// var nums = [1,2,1,3,4]
// var sum= 0
// for(var i=0;i<nums.length;i++){ //循环4次 每次取出一个值
//     sum+=nums[i]
//     console.log(sum);
// }
// console.log(sum);

// 4. 使用数组和Math对象方法 ，随机出双色球 7 个数字
//   双色球数字规则：
//     前6个红球数字范围：1~33 （不能重复）
//     最后一个篮球：1~16

// for(var i=0;i<50;i++){
//     var lan = Math.floor( Math.random()*16+1); //篮球
//     console.log(lan);
// }

// var lan = Math.floor( Math.random()*16+1); //篮球
// var arr = []
// for(var i=0;i<6;i++){
//     var red = Math.floor( Math.random()*33+1) //红球
//     if(arr.includes(red)){ //判断是否存在
//         i--
//     }else{
//         arr.push(red)
//     }
//     // for(var j=0;j<i;j++){
//     //     if(arr[i]==arr[j]){
//     //         i--
//     //     }
//     // }
// }
// console.log(arr,lan);
