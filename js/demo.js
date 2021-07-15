// document.write("Hello World!");
//
// console.log("Hello World!");
// // 标识符可以含有$ 可以用中文
// // \转义字符
//
// // 0开头 八进制
// // 0x开头 十六进制
// // 0b开头 二进制 这个并不是所有浏览器引擎都支持
//
// a = 10
// a = parseInt(a, 10); // 用十进制解析
//
// // 运算符
// // 任何数和NaN做运算都是NaN
// //
// c = 1
// console.log("c = " + c);
//
// function fun2(){
//     console.log();
// }
//
// var fun = function (){
//     console.log();
// };
//
// // 立即执行函数
// (function fun3(){})();
//
// function Person(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     // 添加方法
//     this.sayName = function (){
//         alert("Hello " + this.name);
//     };
// }
//
// var per = new Person("Sheven", 21, "男");
// per.sayName();
//
// function Person(){
//
// }
//
// // 原型对象
// Person.prototype.sayName = function () {
//     alert("Hello ");
// }
//
// var per = new Person();
// console.log(per.sayName());
//
//
// // 垃圾回收
// per = null;
//
// var arr2 = new Array(10, 20, 30)
// arr = [10]; // 创建含有元素10的数组
// arr2 = new Array(10); // 可创建长度为10的数组;
//
// //数组可以存放对象
// var obj = {name:"Sheven"};
// arr[arr.length] = obj;
// arr = [{}]
//
// //数组可以存放函数
// arr = [function (){alert(1)}, function (){alert(2)}];
// arr[0]();
//
//
// function getAdult(arr){
//     var newArr = {};
//
//     for(var i=0; i<arr.length; i++){
//         var p = arr[i];
//         if(p>=18){
//             newArr.push(p)
//         }
//     }
//
//     return newArr;
// }
//
// var result = getAdult(perArr);
//
// console.log(result)
//
// var arr = ["Sheven", "Lim"];
//
// arr.forEach(function(a){
//     console.log(a);
// })
//
// // Date
// //
//
// // Math
// // 不能这么用 var m = new Math();
// console.log(Math.PI);
//
// // 正则表达式
// var str = "0j2eoiqwrhnsan,znv192005!@$^&(%()*";
//
// var result = str.split(/[A-z]/);
// console.log(result);
// result = str.search();
//
// result = str.match(/[A-z]/gi);
//
// console.log(result);
//
//
// var reg = /a{3}/; // a重复出现3次
// reg = /(ab){3}/; // ab重复3次
// reg = /ab{1,3}c/; // b重复1-3次
// reg = /b{3,}/; // b重复出现3次以上
// reg = /ab+c/; // 至少一个b
// reg = /ab*c/; // 大于等于0个b
// reg = /ab?c/; // 0或1个b
// reg = /^a/; //以a开头
// reg = /a$/; //以a结尾
//
// console.log(reg.test("aaaabc"));
//
//
// //检查手机号
// //1.11位
// //2.以1开头
// //3.第二位3-9
// //4.三为以后任意数字9个
// reg = /^1[3-9][0-9]{9}$/;
// var phoneNum = "13511111111";
//
// console.log(reg.test(phoneNum));
//
// // 检查邮件
// // 1.任意字母数字下划线 . 任意字母下划线 @ 任意字母数字 .任意字母(2-5位) .任意字母(2-5)s位
// req = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
// console.log(req.test("114@ee.com"));
//


// DOM

// window绑定onload会在页面加载界面完成后再实现
// window.onload = function(){
//     var btn = document.getElementById("btn");
//     btn.innerHTML = "I'M CHANGED";
//     btn.onclick = function(){
//         alert('u clicked me');
//     };
// }

// 实现图片切换功能
window.onload = function () {
    var prev = document.getElementById("pre");
    var next = document.getElementById("next");
    var img = document.getElementsByTagName("img")[0];

    var imgArr = ["img/01.jpg", "img/02.jpg", "img/03.jpg"];
    var index = 0;

    
    prev.onclick = function () {
        if (index == 0) {
            index = imgArr.length;
        }
        index--;
        img.src = imgArr[index];
    };
    next.onclick = function () {
        if (index == imgArr.length-1) {
            index = -1;
        }
        index++;
        img.src = imgArr[index];
    };
}