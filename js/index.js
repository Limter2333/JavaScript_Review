//   //a = null
//     // b = obj`
// var a = "xxx";
// var b = a;
// console.log(b);
// a = "yyy";
// console.log(b);


// var Person = function (){
//     var name = this.name;
//     var show = function () {
//         console.log(name);
//     }
// }
//
// p = Person;
// p.name = "aaa";
// p.show;


// function fun(n,o){
//     console.log(o)
//     return{
//         fun:function (m){
//             return fun(m,n)
//         }
//     }
// }
// var a = fun(0)
// // a.fun(1)
// // a.fun(2)
// // a.fun(3)
// var b = fun(0).fun(1).fun(2).fun(3)
// // b
// var c = fun(0).fun(1)
// // c.fun(2)
// // c.fun(3)


// 构造函数+原型链定义方法
// function Person(name, age){
//     this.name = name
//     this.age = age
//     this.setName = function(name){
//         this.name = name
//     }
// }
// // // 在原型里设置方法可以节省空间
// // Person.prototype.setName = function (name) {
// //     this.name = name
// // }
// var p1 = new Person('Tom', 23)
// p1.setName("lalala")
// var p2 = new Person('Jack', 25)
// console.log(p1, p2)


// 构造函数+原型链定义方法demo
// function Parent(){
//     // Parent.constructor = Child()
//     console.log("Parent")
// }
// Parent.prototype.test = function (){};
//
// function Child(){
//     // Parent.call(this, xxx);
//     console.log("Child")
// }
// Child.prototype = new Parent();
// Child.prototype.constructor = Child
// var child = new Child();


// 进程 process
// 线程 thread
// 线程池 thread poor 保存多个线程对象的容器， 实现线程对象的复用


// webkit Trident
// 涉及到高安全性操作，用Trident内和
// 内核包括很多模块 1.js引擎模块 2.css，html文档解析模块 3.DOM、CSS相关处理模块 4.布局渲染模块 。。。。。ajax网络请求模块； 事件响应模块；
// 标签的渲染实际上是以一个DOM对象树形式渲染的


// // 定时器
// window.onload = function (){
//     var btn01 = document.getElementById("btn");
//     btn01.onclick = function () {
//         var start = Date.now()
//         console.log("Before start")
//         setTimeout(function () {
//             console.log('Time out!', Date.now() - start)
//         }, 200)
//         // alert 暂停记时
//         alert("ede1")
//         console.log("End")
//     }
// }

// 费波那契数列
function fibonacci(n){
    // 主线程                  分线程
    return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(4))


//
//